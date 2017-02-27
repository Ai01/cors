var http = require('http');
var url = require('url');
var route = require('./route').route;

var port = 8000;
var server = http.createServer(function(req,res){
	res.writeHead(200,{
		//允许的origin。传送cookie的时候不能是*
		'Access-Control-Allow-Origin':'http://127.0.0.1:10000',
		//对非简单请求下面的头设置是必须的
		'Access-Control-Allow-Methods':'GET,POST,PUT,DELETE',
		//如果有cookie是必须的。
		'Access-Control-Allow-Credentials':true,
		//allow-headers子段必须的配套子段
		'Access-Control-Allow-Headers':'X-Custom-Header',
		//max-age
		'Access-Control-Max-Age':1728000,
		//expose headers
		// 'Access-Control-Expose-Headers':'X-Custom-Header',
	});
	req.addListener('data',function(chunk){
		var postdata = '';
		postdata += chunk;
		console.log(postdata);	
	})
	route(req,res)
})
server.listen(port);
