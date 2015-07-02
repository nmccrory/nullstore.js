var customers = require('../server/controllers/customers.js');
var orders = require('../server/controllers/orders.js');
module.exports = function(app){
	app.get('/customers', function(req, res){
		customers.show(req, res);
	});
	app.post('/addC', function(req, res){
		console.log(req.body);
		customers.addCustomer(req, res);
	});
	app.get('/getorders', function(req, res){
		orders.show(req, res);
	});
	app.post('/addorder', function(req, res){
		orders.add(req, res);
	});
	app.get('/destroy/:id', function(req, res){
		customers.remove(req.params.id, res);
	})
}