var template = require('./template.marko')

var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/nodetest';




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
            console.log('Connection established to', url);



            var collection = db.collection('list');

            collection.find( function(err, cursor) {
                cursor.toArray(callback);
            })


        }

    });




    function callback(err, listdata) {
        template.render({
            list: listdata,
            url: "http://localhost:5000/todo/delete/"
        }, res)
    }
}
