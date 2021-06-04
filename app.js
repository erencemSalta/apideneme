var express = require('express');
var app = express();
var fs = require("fs");
var multer = require('multer');
const upload = multer({
  dest: 'images'
});
var bodyParser = require('body-parser');

app.use(bodyParser.json())

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.post('/uploadFile', upload.single('upload'), (req, res) => {
  res.send()

});

app.post('/addUser', function(req, res) {
   console.log(req.body);
   res.send("test");
});

var server = app.listen(8088, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
