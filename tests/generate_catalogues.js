const mongoose    = require('mongoose');
const config = require('../config/config'); // get our config file
const Catalogue = require('../models/catalogue');
const _ = require('underscore');

mongoose.connect(config.database); // connect to database
mongoose.Promise = global.Promise;

const START_CATALOGUE_NO = 1;
const LAST_CATALOGUE_NO = 10;
const CATALOGUE_PERIOD = 7;

var loop = _.range(START_CATALOGUE_NO,LAST_CATALOGUE_NO+1);
console.log('Loop index list : ', loop);

var createCatalogue = function create(index){ // sample async action
    return new Promise((resolve, reject) => {
        Catalogue.create({
            no: index,
            start_date : new Date(2018,8,1 + (CATALOGUE_PERIOD * index),0),
            end_date : new Date(2018,8,1 + (CATALOGUE_PERIOD * (index+1)) -1,23,59,59),
            end_time : new Date(2018,8,1 + (CATALOGUE_PERIOD * (index+1)) -1,16),
        }, function(err, catalogue) {
            if (err) {
                console.log(err);
                reject(index);
            }

            console.log('results : ',catalogue);
            console.log('generate_catalogues completed : ', index);
            resolve(index);
        });
    });
};

var generate_catalogues = Promise.all(loop.map(createCatalogue));

generate_catalogues.then(function(data){
    console.log('promise all finished - success List : ', data);
    process.exit(0);
}).catch(
    // Log the rejection reason
    (reason) => {
        console.log('promise failed - error List : ', reason);
        process.exit(0);
    });