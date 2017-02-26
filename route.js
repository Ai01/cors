var update = require('./parseAsk/update').update;
var remove = require('./parseAsk/remove').remove;
var create = require('./parseAsk/create').create;
var get = require('./parseAsk/get').get;


function route(req,res){
	switch(req.method){
		case 'POST':
			update(req,res);
		case 'DELETE':
			remove(req,res);
		case 'PUT':
			create(req,res);
		case 'GET':
		default:
			get(req,res);
	}
}

exports.route = route;