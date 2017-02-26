var http = require('http');
var url = require('url');
var route = require('./route').route;

var port = 8000;
var server = http.createServer(function(req,res){
	res.writeHead(200,{
		'Access-Control-Allow-Origin':'*',
		// 'Access-Control-Allow-Methods':'GET,POST,PUT,DELETE',
	});
	req.addListener('data',function(chunk){
		var postdata = '';
		postdata += chunk;
		console.log(postdata);	
	})
	route(req,res)
})
server.listen(port);
