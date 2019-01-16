const admin = require('firebase-admin');
const functions = require('firebase-functions');

// Download and install CORS to functions folder - npm install cors
const cors = require('cors')({ origin: true });

exports.getVehicleData = functions.https.onCall((data, context) => {

    console.log('data ' + data);
    console.log('context ' + context);

    console.log('*** Starting getVehicleData');

    var qs = require("querystring");
    var http = require("https");

    var options = {
        "method": "GET",
        "hostname": "api.networkfleet.com",
        "port": null,
        "path": "/locations",
        "headers": {
            "authorization": "Bearer 1e1686fe-7b2e-420e-a081-3ff7a3845b3a",
            "accept": "application/vnd.networkfleet.api-v1+json",
            "content-type": "application/vnd.networkfleet.api-v1+json",
            "cache-control": "no-cache",
            "postman-token": "b7ebd05e-8465-e5d7-1c25-4b8d7d49fcbd"
        }
    };

    //var promise = new Promise(function (resolve, reject) {

    return new Promise(function (resolve, reject) {

        var req = http.request(options, function (res) {
            var chunks = [];

            res.on("data", function (chunk) {
                chunks.push(chunk);
            });

            res.on("end", function () {
                var body = Buffer.concat(chunks);
                resolve(body.toString());
            });
        });

        req.write(qs.stringify({
            grant_type: 'password',
            password: 'OTG1820!',
            username: 'TonySmith'
        }));

        req.end();

    })

    //return promise;

});


exports.getVehicleById = functions.https.onCall((data, context) => {

    //console.log('data ' + data);
    console.log('data ' + data.text);
    //console.log('context ' + context);

    // console.log('*** Starting getVehicleData');

    // var qs = require("querystring");
    // var http = require("https");

    // var options = {
    //     "method": "GET",
    //     "hostname": "api.networkfleet.com",
    //     "port": null,
    //     "path": "/locations",
    //     "headers": {
    //         "authorization": "Bearer 1e1686fe-7b2e-420e-a081-3ff7a3845b3a",
    //         "accept": "application/vnd.networkfleet.api-v1+json",
    //         "content-type": "application/vnd.networkfleet.api-v1+json",
    //         "cache-control": "no-cache",
    //         "postman-token": "b7ebd05e-8465-e5d7-1c25-4b8d7d49fcbd"
    //     }
    // };

    // //var promise = new Promise(function (resolve, reject) {

    // return new Promise(function (resolve, reject) {

    //     var req = http.request(options, function (res) {
    //         var chunks = [];

    //         res.on("data", function (chunk) {
    //             chunks.push(chunk);
    //         });

    //         res.on("end", function () {
    //             var body = Buffer.concat(chunks);
    //             resolve(body.toString());
    //         });
    //     });

    //     req.write(qs.stringify({
    //         grant_type: 'password',
    //         password: 'OTG1820!',
    //         username: 'TonySmith'
    //     }));

    //     req.end();

    // })

    //return promise;

});