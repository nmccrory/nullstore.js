var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = (function(){
	return{
		show: function(req, res){
			Order.find({}, function(err, orders){
				if(err){
					console.log('Could not fetch orders');
				}else{
					console.log('Orders successfully retrieved!');
					res.json(orders);
				}
			})
		},
		add: function(req, res){
			var order = new Order({customer_name: req.body.customer_name, product: req.body.product, quantity: req.body.quantity, placed_at: new Date()});
			order.save(function(err){
				if(err){
					console.log('Unable to place order.');
				}else{
					console.log('Order placed!');
					res.redirect('/');
				}
			})
		}
	}
})();