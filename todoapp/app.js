require('marko/node-require').install()

var express = require('express');

var app = express();

app.use(express.static('public'));

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});

var async = require('async');

var ObjectId = require('mongodb').ObjectID;






var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/nodetest';

// Use connect method to connect to the Server






if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./listdata');
}

try {
    x = JSON.parse(localStorage.getItem('list'));

} catch (e) {
    x = {
        list: []
    };
    localStorage.setItem('list', JSON.stringify(x))
}

app.get('/', require('./src/pages/todo'))


app.post('/todo/add/:id', urlencodedParser, function(req, res) {
    if (req.body.newtodo != '') {
console.log(req.body+ "add");

        /* var arrlen = JSON.parse(localStorage.getItem('list')).list.length
        var newkey = arrlen + 1;
        x.list.push({
            val: req.body.newtodo,
            key: newkey
        });
        localStorage.setItem('list', JSON.stringify(x))
    */


        // Use connect method to connect to the Server
        MongoClient.connect(url, function(err, db) {
            if (err) {
                console.log('Unable to connect to the mongoDB server. Error:', err);
            } else {
                //HURRAY!! We are connected. :)
                console.log('add Connection established to ', url);



                var colno = req.params.id;
                if (colno == 1) colno = ''
                var collection = db.collection('list' + colno);


                var insert = {
                    val: req.body.newtodo
                };
                //Create some users

                // Insert some users
                collection.insert(insert, function(err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);








                        // db.close();

                    }
                });
                //Close connection
            }
        });

    }
    res.redirect('/');
})





app.get('/todo/delete/:id', function(req, res) {
    if (req.params.id != '') {


        MongoClient.connect(url, function(err, db) {
            if (err) {
                console.log('Unable to connect to the mongoDB server. Error:', err);
            } else {
                //HURRAY!! We are connected. :)
                console.log('del Connection established to', url);

                db.collection('list', function(err, cursor) {

                    cursor.remove({ _id: ObjectId(req.params.id) }, function(err, data) {

                        callback1();

                    });

                });

                function callback1() {
                    db.collection('list2', function(err, cursor) {

                        cursor.remove({ _id: ObjectId(req.params.id) }, function(err, data) {

                            callback2();

                        });

                    });
                }

                function callback2() {
                    db.collection('list3', function(err, cursor) {

                        cursor.remove({ _id: ObjectId(req.params.id) }, function(err, data) {

                            callback();

                        });

                    });
                }











                // db.close();

            }
        });
        //Close connection
    }

    function callback() {

        res.redirect('/');

    }

});





app.post('/todo/update', urlencodedParser, function(req, res) {
   
console.log(req.body.updatetext+ "post");
localStorage.setItem('updatelist', req.body.updatetext)

    MongoClient.connect(url, function(err, db) {
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
            a = JSON.parse(localStorage.getItem('updatelist')).list
            var i = 0 ;
            var collection = db.collection('list');

            var q = async.queue(function(doc, callback) {
                // code for your update
                collection.update({
                     _id: doc._id
                }, {
                    $set: { val: a[i++] }
                }, callback);
            }, Infinity);

            var cursor = collection.find();
            cursor.each(function(err, doc) {
                if (err) throw err;
                if (doc) q.push(doc); // dispatching doc to async.queue
            });

            q.drain = function() {
                if (cursor.isClosed()) {
                    console.log('all items have been processed');
                   // db.close();

                }
            }


        }
    });
     res.redirect('../')
});







app.listen(5000, function() {
    console.log("Started server at port 5000")
});
