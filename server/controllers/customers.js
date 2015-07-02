var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
module.exports = (function (){
	return {
		show: function(req, res){
			Customer.find({}, function(err, customers){
				if(err){
					console.log('Unable to fetch customers');
				}else{
					console.log('Retrieved customers!');
					res.json(customers);
				}
			})
		},
		addCustomer: function(req, res){
			var customer = new Customer({name: req.body.name, created_at: new Date()});
			customer.save(function(err){
				if(err){
					console.log('customer not added successfully');
				}else{
					console.log('Customer successfully added!');
					res.redirect('/');
				}
			})
		},
		remove: function(id, res){
			Customer.remove({_id: id}, function(err, customer){
				if(err){
					console.log('Unable to remove customer');
				}else{
					console.log('Successfully removed customer');
					res.redirect('/');
				}
			})
		}
	}
})();