require('marko/node-require').install()

var express = require('express');

var app = express();

app.use(express.static('public'));

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});


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


app.post('/todo/add/', urlencodedParser, function(req, res) {
            if (req.body.newtodo != '') {

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



                            var collection = db.collection('list3');


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

                                        console.log("printing db contents")




                                        collection.find(
                                           
                                        ).toArray(function(err, result) {
                                                if (err) {
                                                    console.log(err);
                                                } else if (result.length) {
                                                    console.log('Found:', result);
                                                } else {
                                                    console.log('No document(s) found with defined "find" criteria!');
                                                }
                                            });


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
                    /*
                    var arrlen = JSON.parse(localStorage.getItem('list')).list.length

                    for (i = 0; i < x.list[arrlen - 1].key; i++) {
                        console.log(x.list[i].key)


                        if (x.list[i].key == req.params.id) {
                            console.log(x.list)
                            console.log("After")
                                //delete(x.list[i])
                                //x.list[i]=null
                            console.log(x.list.indexOf(x.list[i]))
                            x.list.splice((x.list.indexOf(x.list[i])), 1)

                            localStorage.setItem('list', JSON.stringify(x))

                            console.log(x.list)
                            break;
                        }


                    }

                    */
                     MongoClient.connect(url, function(err, db) {
                        if (err) {
                            console.log('Unable to connect to the mongoDB server. Error:', err);
                        } else {
                            //HURRAY!! We are connected. :)
                            console.log('del Connection established to', url);



                            var collection = db.collection('list', function(err, cursor){
                                console.log("under cursor")




                            cursor.remove({_id : ObjectId(req.params.id)}, function(err, data){
                                console.log(ObjectId(req.params.id).toString())
                                console.log("delete")
                                callback();
                                console.log("deleted")
                            });

                            });
                            
        

                                               // db.close();

                                            }
                                        });
                                    //Close connection
                                }
                                function callback()
                                {
                                console.log("exit")
                                res.redirect('/');

                            }

                            });

                






                
                
        


            app.listen(5000, function() {
                console.log("Started server at port 5000")
            });
