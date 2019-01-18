const admin = require('firebase-admin');
const functions = require('firebase-functions');

// Download and install CORS to functions folder - npm install cors
const cors = require('cors')({ origin: true });

// exports.getVehicleData = functions.https.onCall((data, context) => {

//     console.log('data ' + data);
//     console.log('context ' + context);

//     console.log('*** Starting getVehicleData');

//     var qs = require("querystring");
//     var http = require("https");

//     var options = {
//         "method": "GET",
//         "hostname": "api.networkfleet.com",
//         "port": null,
//         "path": "/locations",
//         "headers": {
//             "authorization": "Bearer 1e1686fe-7b2e-420e-a081-3ff7a3845b3a",
//             "accept": "application/vnd.networkfleet.api-v1+json",
//             "content-type": "application/vnd.networkfleet.api-v1+json",
//             "cache-control": "no-cache",
//             "postman-token": "b7ebd05e-8465-e5d7-1c25-4b8d7d49fcbd"
//         }
//     };

//     //var promise = new Promise(function (resolve, reject) {

//     return new Promise(function (resolve, reject) {

//         var req = http.request(options, function (res) {
//             var chunks = [];

//             res.on("data", function (chunk) {
//                 chunks.push(chunk);
//             });

//             res.on("end", function () {
//                 var body = Buffer.concat(chunks);
//                 resolve(body.toString());
//             });
//         });

//         req.write(qs.stringify({
//             grant_type: 'password',
//             password: 'OTG1820!',
//             username: 'TonySmith'
//         }));

//         req.end();

//     })

//     //return promise;

// });


// exports.getVehicleById = functions.https.onCall((data, context) => {

//     console.log('data ' + data);
//     console.log('data ' + data.text);
//     console.log('context ' + context);

//     console.log('*** Starting getVehicleData');

//     var qs = require("querystring");
//     var http = require("https");

//     var options = {
//         "method": "GET",
//         "hostname": "api.networkfleet.com",
//         "port": null,
//         "path": "/locations",
//         "headers": {
//             "authorization": "Bearer 1e1686fe-7b2e-420e-a081-3ff7a3845b3a",
//             "accept": "application/vnd.networkfleet.api-v1+json",
//             "content-type": "application/vnd.networkfleet.api-v1+json",
//             "cache-control": "no-cache",
//             "postman-token": "b7ebd05e-8465-e5d7-1c25-4b8d7d49fcbd"
//         }
//     };

//     //var promise = new Promise(function (resolve, reject) {

//     return new Promise(function (resolve, reject) {

//         var req = http.request(options, function (res) {
//             var chunks = [];

//             res.on("data", function (chunk) {
//                 chunks.push(chunk);
//             });

//             res.on("end", function () {
//                 var body = Buffer.concat(chunks);
//                 resolve(body.toString());
//             });
//         });

//         req.write(qs.stringify({
//             grant_type: 'password',
//             password: 'OTG1820!',
//             username: 'TonySmith'
//         }));

//         req.end();

//     })

//     return promise;

// });


exports.getToken = functions.https.onCall((data, context) => {

    console.log('*** Starting getToken');

    var qs = require("querystring");
    var http = require("https");

    var options = {
        "method": "POST",
        "hostname": "auth.networkfleet.com",
        "port": null,
        "path": "/token",
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "authorization": "Basic VG9ueVNtaXRoOk9URzE4MjAh",
            "cache-control": "no-cache",
            "postman-token": "5e27f65d-ee3a-1911-63d3-911367452f3b"
        }
    };

    return new Promise(function (resolve, reject) {

        var req = http.request(options, function (res) {
            var chunks = [];

            res.on("data", function (chunk) {
                chunks.push(chunk);
            });

            res.on("end", function () {
                var body = Buffer.concat(chunks);
                console.log("body.toString()", body.toString());
                resolve(body.toString());
            });
        });

        req.write(qs.stringify({
            grant_type: 'password',
            password: 'OTG1820!',
            username: 'TonySmith'
        }));
        req.end();

    }).then(function (apiData) {
        return new Promise(function (resolve, reject) {

            console.log("apiData", apiData);

            var API = JSON.parse(apiData)
            console.log("API", API);
            console.log("API.access_token", API.access_token);

            var options = {
                "method": "GET",
                "hostname": "api.networkfleet.com",
                "port": null,
                "path": "/locations",
                "headers": {
                    "authorization": "Bearer " + API.access_token,
                    "accept": "application/vnd.networkfleet.api-v1+json",
                    "content-type": "application/vnd.networkfleet.api-v1+json",
                    "cache-control": "no-cache",
                    "postman-token": "b7ebd05e-8465-e5d7-1c25-4b8d7d49fcbd"
                }
            };
            var req = http.request(options, function (res) {
                var chunks = [];

                res.on("data", function (chunk) {
                    chunks.push(chunk);
                });

                res.on("end", function () {
                    var body = Buffer.concat(chunks);
                    console.log(body.toString());
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
    })
});