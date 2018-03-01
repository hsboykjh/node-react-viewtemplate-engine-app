const mongoose    = require('mongoose');
const config = require('../config/config'); // get our config file
const House = require('../models/house');

mongoose.connect(config.database); // connect to database
mongoose.Promise = global.Promise;


//insert new fields
const statusList = ['ready','sold','rent'];

var modifyJob = function(){

    //scan all data in a collection.
    House.find({}, function(err, houses) {
        if (err) {
            console.log(err);
        }

        // console.log('results : ',houses);

        // loop and insert or modify some fields
        for(var index=0; index < houses.length; index++){
            console.log('house : ',houses[index]._id.toString());


            var newData = houses[index];
            newData.status = statusList[Math.floor(Math.random() * statusList.length)];
            House.findOneAndUpdate({_id : houses[index]._id}, newData, {upsert:true}, function(err, doc){
                if(err){
                    console.log('err : ', err);
                }else{
                    console.log(`completed ${index} :` , doc);
                }
            });
        }

        console.log('modifyJob completed');
        // process.exit(0);
    });
};

modifyJob();