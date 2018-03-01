const express = require('express');
const router = express.Router();
const House = require('../models/house'); // get our mongoose model
const auth = require('../modules/auth');

router.get('/', auth.loginCheck, auth.roleCheck('house'), function(req, res) {
    House.find({}, function(err, houses) {
        res.render('houses/houses', {
            data: houses,
            user : res.locals.user
        });
    });
});

router.get('/:id', auth.loginCheck, auth.roleCheck('house'), function(req, res) {
    House.findById(req.params.id, function (err, house) {
        if (err) {
            return next(err);
        }

        console.log("house : ",house);
        res.render('houses/house_detail', {
            data: house,
            user: res.locals.user
        });
    });
});

module.exports = router;