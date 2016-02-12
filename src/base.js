var routes = [
	'home',
	'ahuja',
	'prop'
	];


exports.pages = routes;
module.exports.setup = function(app) {

app.get('/', require('./pages/' + 'root'))

routes.map(function(route){
	app.get('/' + route, require('./pages/' + route))
	})
};

