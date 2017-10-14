var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/connected_cars';

module.exports = {
    search: function (start, end, callback) {
        MongoClient.connect(url, function(err, db) {
            if (err) {
                console.log('Unable to connect to the mongoDB server. Error: ', err);
            } else {
                var query = { start: start, end: end };
                console.log(query);
                db.collection("connections").find(query).toArray(function(err, result) {
                  if (err) throw err;
                  callback(err, result);
                  db.close();
                });
            }
        });
    },
    push: function (name, email, start, end) {
        MongoClient.connect(url, function(err, db) {
            if (err) {
                console.log('Unable to connect to the mongoDB server. Error: ', err);
            } else {
                var conexio = { name: name, email: email, start: start, end: end };
                db.collection("connections").insertOne(conexio, function(err, res) {
                  if (err) throw err;
                  console.log("Conexio insertada");
                  db.close();
                });
            }
        });
    }
}