const express = require('express');
const router = express.Router();
const Catalogue = require('../models/catalogue'); // get our mongoose model
const auth = require('../modules/auth');

router.get('/', auth.loginCheck, auth.roleCheck('catalogue'), function(req, res) {
    Catalogue.find({},null, {sort: {no: 1}}, function(err, catalogues) {
        res.render('catalogue/catalogue', {
            data: catalogues,
            user : res.locals.user
        });
    });
});

module.exports = router;