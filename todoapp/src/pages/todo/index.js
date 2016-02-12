var template = require('./template.marko')

var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/nodetest';

var async = require('async');

locals = {};


module.exports = function(req, res) {
    /*var vals= [];
	var data = JSON.parse(localStorage.getItem('list'));
	for(i=0; i<data.list.length; i++){
		if (data.list[i]) 
		vals[i]= data.list[i]
	}
*/




   



    MongoClient.connect(url, function(err, db) {
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
            //HURRAY!! We are connected. :)
           async.parallel([
            function(callback){
            collection = db.collection('list');
            collection.find().toArray(function(err,data){
                if(err) return callback(err);
                locals.data = data
                callback();
            });
            },

            function(callback){
             collection = db.collection('list2');
             collection.find().toArray(function(err,data2){
                 if(err) return callback(err);
                 locals.data2 = data2;
                 callback();

            })
         },

            function(callback){
             collection = db.collection('list3');
             collection.find().toArray(function(err,data3){
                 if(err) return callback(err);
                 locals.data3 = data3;
                 callback();

            })
         },


            ], function(err){
                if(err) return next(err);
                console.log("locals.data" + locals.data2)

                    template.render({
                    list: locals.data,
                    list2: locals.data2,
                    list3: locals.data3,
                    url: "http://localhost:5000/todo/delete/"
                     }, res)


            })



        }

    });

};
