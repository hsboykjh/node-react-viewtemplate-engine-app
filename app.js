var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var mongoose = require('mongoose');

// App Router Configurations
const routes = require("./routes/index");
const user_routes = require("./routes/user");
const admin_routes = require("./routes/admin");
const auction_routes = require("./routes/auction");
const catalogue_routes = require("./routes/catalogue");
const house_routes = require("./routes/house");
const agency_routes = require("./routes/agency");

const config = require('./config/config'); // get our config file
const port = 3000;

var app = express();

mongoose.connect(config.database); // connect to database
mongoose.Promise = global.Promise;

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Express Session
app.use(session({
    secret: config.session_secret,
    saveUninitialized: true,
    resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
    res.locals.messages = req.flash();
    res.locals.user = req.user || null;
    next();
});


//routes
app.use("/", routes);
app.use("/users", user_routes);
app.use("/admins", admin_routes);
app.use("/auction", auction_routes);
app.use("/catalogue", catalogue_routes);
app.use("/house", house_routes);
app.use("/agency", agency_routes);

// Set Port
app.set('port', (process.env.PORT || port));

app.listen(app.get('port'), function(){
	console.log('Server started on port '+app.get('port'));
});