const mongoose    = require('mongoose');
const config = require('../config/config'); // get our config file
const House = require('../models/house');
const Agency = require('../models/agency');
const _ = require('underscore');

//variables
const NUM_OF_HOUSES = 30;
const bed = [1,2,3,4,5];
const bath = [1,2,3];
const car = [0,1,2,3];
const owner_id = ['5a5d78fa3d38d7576d3b40d1','5a5d7f3d45e69658091128f0','5a600eeef950eda9290dc983'];
const loc = [
    '246 Windsor Rd, Vineyard NSW 2765',
    '10-14 Market Ln, Rouse Hill NSW 2155',
    'Blacktown NSW 2148',
    'The Centre, Terminus Rd, Seven Hills NSW 2147'
];

const statusList = ['ready','sold','rent'];
const currentDate = new Date();
const created_at = currentDate;
const updated_at = currentDate;

mongoose.connect(config.database); // connect to database
mongoose.Promise = global.Promise;

var loop = _.range(NUM_OF_HOUSES);
// console.log('Loop index list : ', loop);

var createHouse = function create(index, agencyList){ // sample async action
    console.log('createHouse promise : ', agencyList);

    return new Promise((resolve, reject) => {
        House.create({
            bed : bed[Math.floor(Math.random() * bed.length)],
            bath : bath[Math.floor(Math.random() * bath.length)],
            car : car[Math.floor(Math.random() * car.length)],
            owner_id : owner_id[Math.floor(Math.random() * owner_id.length)],
            loc : loc[Math.floor(Math.random() * loc.length)],
            agency : mongoose.Types.ObjectId(agencyList[Math.floor(Math.random() * agencyList.length)]),
            status : statusList[Math.floor(Math.random() * statusList.length)],
            created_at : created_at,
            updated_at : updated_at,
        }, function(err, houses) {
            if (err) {
                console.log(err);
                reject(index);
            }

            console.log('results : ',houses);
            console.log('generate_houses completed: ', index);
            resolve(index);
        });
    });
};

var getAgency = new Promise((resolve, reject) => {
    Agency.find({},{_id: 1}, function(err, agencies) {
        if (err) {
            console.log(err);
            reject(err);
        }
        resolve(agencies);
    });
});

getAgency
    .then(function(data){
        var agencyIdList = [];
        for(var index=0; index < data.length; index++){
            agencyIdList[index] = data[index]._id.toString();
        }
        return agencyIdList;
    })
    .then(function(agencyIdList){
        // console.log('promise getAgencyIdList finished : ', agencyIdList);
        return Promise.all(loop.map( index => createHouse(index, agencyIdList)));
    })
    .then(function(data){
        console.log('promise all finished - success List : ', data);
        process.exit(0);
    })
    .catch(
    (reason) => {
        console.log('promise failed - error List : ', reason);
        process.exit(0);
    });