const express = require('express');
const path = require('path');
const app = express();
var https = require('https');
const http = require('http')
fs = require('fs');


// var key = fs.readFileSync('gopoc-private-key.pem');
// var cert = fs.readFileSync( '9b49890eafe4e63d.crt' );
// var ca = fs.readFileSync( 'gd_bundle-g2-g1.crt' );

// var httpsOptions = {
// key: key,
// cert: cert,
// ca: ca
// };
app.use(express.static(path.join(__dirname + "/dist"), {
    maxAge: 43200000
}));
app.use("*", function(req, res) {
    res.sendFile(path.join(__dirname + "/dist/index.html"));
});
app.get("/a", function(req, res) {
    res.send({a:'aaa'});
});
var server=app.listen(3004,()=>{
	console.log("server conected 3004")
})

// https.createServer(httpsOptions, app).listen(3004, function () {
//     console.log("code works,3004");
// });
