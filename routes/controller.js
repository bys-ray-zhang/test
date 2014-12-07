/**
 * New node file
 */
var routes = require('./index');
var user = require('./user');

module.exports = function(app){
	app.use(routes);
	app.use(user);
};
