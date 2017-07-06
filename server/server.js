/**
 * @Author：Xieqian
 * 用nodejs创建服务，解决跨域问题
 */

var http = require('http');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(req,res){
    var urlPath = url.parse(req.url).pathname;
    var qs = querystring.parse(req.url.split('?')[1]);

    var responseHeader;
    if(urlPath === '/jsonp'){   //jsonp跨域
        responseHeader = {
            'Content-Type':'application/json;charset=utf-8'
        };
        var sendData = {
            name:"服务端JSONP",
            type:"JSONP"
        };
        sendData = JSON.stringify(sendData);
        var callback = qs.callback + '(' + sendData + ')';
        res.writeHead(200,responseHeader);
        res.write(callback);
        res.end();
    }else{                      //CORS跨域
        responseHeader = {
            'Content-Type': 'text/plain',
            "Access-Control-Allow-Origin":"http://127.0.0.1:8080"
        };
        res.writeHead(200,responseHeader);
        res.end('Hello world');
    }

}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');