var express = require('express');
var router = express.Router();
const auth = require('../modules/auth');

// Get Homepage
router.get('/', auth.loginCheck, function(req, res){
    res.render('index',{
	    user : res.locals.user,
        locals : res.locals
    });
});

module.exports = router;