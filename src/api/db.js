var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/connected_cars';

module.exports = {
    search: function (startP, endP, callback) {
        MongoClient.connect(url, function(err, db) {
            if (err) {
                console.log('Unable to connect to the mongoDB server. Error: ', err);
            } else {
                var ss = startP.startLat;
                var sl = startP.startLon;
                var ee = endP.endLat;
                var el = endP.endLon;
                var r = 0.02;
                /*
                db.collection("connections").find({
                    0.02: { $gt:
                        { $sqrt:
                            { $add: [
                                { $pow: [ { $substract: [ startP.startLat, "start.startLat", 2 ] }, 2 ] },
                                { $pow: [ { $substract: [ startP.startLon, "start.startLon", 2 ] }, 2 ] }
                            ] }
                        }
                    }*/
                db.collection("connections").find({ $where:
                    "("+ss+"-this.start.startLat)^2 + ("+sl+"-this.start.startLon)^2 <= "+r+" && ("+ee+"-this.end.endLat)^2 + ("+el+"-this.end.endLon)^2 <= "+r+""
                }).toArray(function(err, result) {
                    console.log(err)
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