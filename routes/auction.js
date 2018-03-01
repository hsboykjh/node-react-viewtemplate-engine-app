const express = require('express');
const router = express.Router();
const auth = require('../modules/auth');

router.get('/', auth.loginCheck, auth.roleCheck('auction'), function(req, res){
    res.render('auction/auction', {
        user : res.locals.user
    });
});

module.exports = router;