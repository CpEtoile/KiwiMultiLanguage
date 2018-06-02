/**
 * Created by chunpeng on 04/02/18.
 */
'use strict'
var http = require('http');
var fs = require('fs');
http.createServer(function(req, res){
    let reqStr = req.url;
    if (reqStr === '/'){
        res.writeHead(200, {'Content-Type':'text/html'});
        var htmlFile = fs.readFileSync(__dirname + '/index.html', 'utf8')
        res.end(`req from ${ reqStr }  Hello world\n ${htmlFile}`);
    }else if(reqStr === '/api'){
        res.writeHead(200, {'Content-Type':'application/json'});
        var myObj = {
            fn: 'Hi it is my first name',
            ln: 'hey this is my last name'
        }
        let jsonStr = JSON.stringify(myObj);
        res.end(jsonStr);
    }else {
        res.writeHead(404, {'Content-Type':'text/html'});
        res.end('It is a wrong request');
    }

    // fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
}).listen(1337, 'localhost');