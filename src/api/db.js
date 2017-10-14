var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/connected_cars';

module.exports = {
    search: function (startP, endP, callback) {
        MongoClient.connect(url, function(err, db) {
            if (err) {
                console.log('Unable to connect to the mongoDB server. Error: ', err);
            } else {
                var query = { start: startP, end: endP };
                console.log(query);
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
                db.collection("connections").find({ $where: "(obj.startP.startLat-this.start.startLat)^2 + (obj.startP.startLon-this.start.startLon)^2 < 2" }
                ).toArray(function(err, result) {
                    console.log(err)
                    console.log(result)
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