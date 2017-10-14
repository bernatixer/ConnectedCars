var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/connected_cars';

module.exports = {
    map: function (callback) {
        MongoClient.connect(url, function(err, db) {
            if (err) {
                console.log('Unable to connect to the mongoDB server. Error: ', err);
                callback(err, null);
            } else {
                db.collection("connections").find({}).toArray(function(err, result) {
                    callback(err, result);
                    db.close();
                });
            }
        });
    },
    search: function (startP, endP, callback) {
        MongoClient.connect(url, function(err, db) {
            if (err) {
                console.log('Unable to connect to the mongoDB server. Error: ', err);
                callback(err, null);
            } else {
                var ss = startP.startLat;
                var sl = startP.startLon;
                var ee = endP.endLat;
                var el = endP.endLon;
                var r = 0.02;

                var cursor = db.collection("connections");
                var found = [];

                db.collection("connections").find({}).toArray(function(err, result) {
                    for (var i=0; i<result.length; ++i) {
                        var doc = result[i];
                        var sum1 = (Math.pow((ss-doc.start.startLat), 2) + Math.pow((sl-doc.start.startLon), 2)) <= r;
                        var sum2 = (Math.pow((ee-doc.end.endLat), 2) + Math.pow((el-doc.end.endLon), 2)) <= r;
                        if (sum1 && sum2) found.push(doc);
                    }
                    callback(err, found);
                    db.close();
                });


                /*cursor.find({}).forEach( function(doc) {

                    var sum1 = (Math.pow((ss-doc.start.startLat), 2) + Math.pow((sl-doc.start.startLon), 2)) <= r;
                    var sum2 = (Math.pow((ee-doc.end.endLat), 2) + Math.pow((el-doc.end.endLon), 2)) <= r;
                    if (sum1 && sum2) found.push(doc);
                    if (!cursor.hasNext) {
                        console.log("holis");
                        callback(err, found);
                        db.close();
                    }

                });*/
            }
        });
    },
    push: function (name, email, start, end) {
        MongoClient.connect(url, function(err, db) {
            if (err) {
                console.log('Unable to connect to the mongoDB server. Error: ', err);
                callback(err, null);
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