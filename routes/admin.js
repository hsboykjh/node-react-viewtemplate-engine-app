var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var auth = require('../modules/auth');
var Admin = require('../models/admin');

router.get('/', auth.loginCheck, auth.roleCheck('admins'), function(req, res) {
    Admin.find({}, function(err, admins) {
        res.render('admins/admins', {
            data: admins,
            user : res.locals.user,
            locals : res.locals
        });
    });
});

// Register
router.get('/register', auth.roleCheck('admins'), function(req, res){
	res.render('admins/register', {
        user : res.locals.user,
        locals : res.locals
    });
});

// Login
router.get('/login', function(req, res){
	res.render('admins/login', {
        user : res.locals.user,
        locals : res.locals
    });
});

// Register User
router.post('/register', auth.roleCheck('admins'), function(req, res){
	var name = req.body.name;
	var password = req.body.password;

	var errors = req.validationErrors();

	if(errors){
		res.render('register',{
			errors:errors
		});
	} else {
		var newAdmin = new Admin({
			name: name,
			password: password
		});

        Admin.createAdmin(newAdmin, function(err, user){
			if(err) throw err;
			console.log(user);
		});

		req.flash('success_msg', 'You are registered and can now login');

		res.redirect('/admins/login');
	}
});

passport.use(new LocalStrategy({
        usernameField: 'name',
        passwordField: 'password'
    },
    function(name, password, done) {
        Admin.getUserByUsername(name, function(err, user){
            if(err){
                console.log('err : ', err);
                throw err;
            }
            if(!user){
                console.log('Unknown User');
                return done(null, false, {message: 'Unknown User'});
            }

            Admin.comparePassword(password, user.password, function(err, isMatch){
                if(err) throw err;
                if(isMatch){
                    // console.log('Success');
                    return done(null, user);
                } else {
                    console.log('Invalid password');
                    return done(null, false, {message: 'Invalid password'});
                }
            });
        });
    }));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    Admin.getUserById(id, function(err, user) {
        done(err, user);
    });
});

router.post('/login',
    passport.authenticate('local', {successRedirect:'/', failureRedirect:'/admins/login',failureFlash: true}),
    function(req, res) {

        req.flash('success_msg', 'You are logged in');
        res.redirect('/');
    });

router.get('/logout', function(req, res){
	req.logout();
	req.flash('success_msg', 'You are logged out');
	res.redirect('/admins/login');
});

router.get('/:id', auth.loginCheck, auth.roleCheck('admins'), function(req, res) {
    Admin.findById(req.params.id, function (err, admin) {
        if (err) {
            return next(err);
        }

        console.log("admin : ",admin);
        res.render('admins/admin_detail', {
            data: admin,
            user: res.locals.user
        });
    });
});

module.exports = router;