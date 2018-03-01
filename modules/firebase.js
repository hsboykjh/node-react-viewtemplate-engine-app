const firebaseAdmin = require("firebase-admin");
const serviceAccount = require("../firebase-admin-key.json");

//defining a var instead of this (works for variable & function) will create a private definition
firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: "***************************"
});

var DATABASE_AUCTION_INFO_REF = {};
var DATABASE_AUCTION_INFO_LISTENERS;
var DATABASE_AUCTION_INFO_DATA;

var DATABASE_PRICE_INFO_REF= {};
var DATABASE_PRICE_INFO_LISTENERS;
var DATABASE_PRICE_INFO_DATA;

function initListeners() {

    DATABASE_AUCTION_INFO_REF = firebaseAdmin.database().ref('auctionInfo');
    DATABASE_AUCTION_INFO_LISTENERS = DATABASE_AUCTION_INFO_REF.on(('value'), function(snapshot) {

        // console.log("auction info : " , snapshot.val());
        DATABASE_AUCTION_INFO_DATA = snapshot.val();
        console.log('DATABASE_AUCTION_INFO_DATA : ', DATABASE_AUCTION_INFO_DATA);
    });

    //init price info table (price info)
    DATABASE_PRICE_INFO_REF = firebaseAdmin.database().ref('price');
    DATABASE_PRICE_INFO_LISTENERS = DATABASE_PRICE_INFO_REF.once('value').then(function(snapshot) {

        // console.log("price info : " , snapshot.val());
        DATABASE_PRICE_INFO_DATA = snapshot.val();
        console.log('DATABASE_PRICE_INFO_DATA : ', DATABASE_PRICE_INFO_DATA);
    });

    console.log('initListeners started... ');
}

initListeners();

exports.auctionInfoRef = DATABASE_AUCTION_INFO_REF;
exports.priceInfoRef = DATABASE_PRICE_INFO_REF;
