var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/connected-cars';

module.exports = {
    search: function (db) {
        var query = { address: "Barcelona" };
        db.collection("connections").find(query).toArray(function(err, result) {
          if (err) throw err;
          return result;
        });
    },
    insert: function (db) {
        var myobj = { name: "Berni", address: "Barcelona" };
        db.collection("connections").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
        });
    },
    connect: function () {
        MongoClient.connect(url, function(err, db) {
            assert.equal(null, err);
            console.log("Connected successfully to server");
            return db;
        });
    }
}