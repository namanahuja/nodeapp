var template = require('./template.marko')
var routes = require('../../base').pages

var common="http://localhost:8000/";

module.exports = function(req, res){
	template.render({
		urls: routes,
		common: common

	},res)
}

 