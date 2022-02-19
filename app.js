'use strict';

const fs = require('fs');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // 200 status code means OK
    res.status().send(200);
})

var http = require('http');

// Create a server object
http.createServer(function(req, res) {

    // http header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    var url = req.url;

    if (url === '/database.json') {
        console.log("reading again");
        const jsonData = require('./database.json');
        console.log(jsonData);
        res.write(' data loaded');
        res.end();

    } else if (url === '/about') {
        console.log("welcome to Placement Office ");
        res.write(' Welcome to Placement Office');
        res.end();
    } else {
        res.writeHead(200);
        res.write(' OK');
        res.end();

    }
}).listen(8000, function() {

    // The server object listens on port 3000
    console.log("server start at port 8000");
});



let poffice = {
    "poffice":
    [
      {"PID":"1","pname":"Sudheer","Dept":"Stats","Email":"sudheer@university.in","Phone_no":"990254339"},
      {"PID":"2","pname":"Bhavan","Dept":"Computer","Email":"Bhavana@university.in","Phone_no":"99232339"},
      {"PID":"3","pname":"Steve","Dept":"Law","Email":"steve@university.in","Phone_no":"991223339"},
      {"PID":"4","pname":"Sandeep","Dept":"English","Email":"sandeep@university.in","Phone_no":"922254339"},
      {"PID":"5","pname":"andy","Dept":"managarment","Email":"andy@university.in","Phone_no":"912354334"}
    
    ]
};

let data = JSON.stringify(poffice);

fs.writeFile('./database.json', data, (err) => {
    console.log('WRITING...');
    if (err) throw err;
    console.log('Data written to file');
});



fs.readFile('./database.json', (err, data) => {
    console.log('READING...');
    if (err) throw err;
    let poffice = JSON.parse(data);
    console.log(poffice);

});