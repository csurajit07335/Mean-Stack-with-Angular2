 const express = require('express');
 const http = require('http');
 const bodyParser = require('body-parser');

 const app = express(); 
 const mongoose = require('mongoose');
 const config = require('./config/database'); 
 const path = require('path');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
mongoose.Promise = global.Promise;
 
 mongoose.connect(config.uri,(err)=> {

 	if(err) {

 		 console.log('Could not connect to DB ',err);

 	}

 	else {
       //console.log(config.crypto);
 		console.log('Connected to DB: ' +config.db);
 	}
 });

 app.use(express.static(__dirname + '/client/dist/'));

 app.get('*',(req,res) =>{
 //res.send('<h1>hello world</h1>');
 res.sendFile(path.join(__dirname + '/client/dist/index.html'));
 });

 app.listen(8080,() => {

 console.log('Listening to port 8080');
 });