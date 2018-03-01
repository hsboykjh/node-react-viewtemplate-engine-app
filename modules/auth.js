const ACL = require('../config/acl');

module.exports.loginCheck = function (req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else {
        req.flash('error_msg','You are not logged in');
        res.redirect('/admins/login');
    }
};

module.exports.roleCheck = function(path){
    return function(req, res, next) {
        if(res.locals.user && ACL[path].indexOf(res.locals.user.role) != -1){
            next();
        }
        else{
            req.flash('error_msg','You cannot access here');
            res.redirect('/');
        }
    }
};