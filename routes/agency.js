const express = require('express');
const router = express.Router();
const Agency = require('../models/agency'); // get our mongoose model
const auth = require('../modules/auth');

router.get('/', auth.loginCheck, auth.roleCheck('agency'), function(req, res) {
    Agency.find({},null, {sort: {no: 1}}, function(err, agencies) {
        console.log('agencies : ',agencies);
        res.render('agency/agencies', {
            data: agencies,
            user : res.locals.user
        });
    });
});

router.get('/:id', auth.loginCheck, auth.roleCheck('agency'), function(req, res) {
    Agency.findById(req.params.id, function (err, agency) {
        if (err) {
            return next(err);
        }

        console.log("agency : ",agency);
        res.render('agency/agency_detail', {
            data: agency,
            user: res.locals.user
        });
    });
});

module.exports = router;