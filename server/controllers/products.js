var mongoose = require('mongoose');
var Product = mongoose.model('Product');
module.exports = (function(){
	return{
		show: function(req, res){
			console.log('we made it to AngConroller');
			Product.find({}, function(err, products){
				if(err){
					console.log('Unable to fetch products');
				}else{
					console.log('Products retrieved!!');
					res.json(products);
				}
			});
		},
		add: function(req, res){
			console.log('Made it to adding from products controller');
			var product = new Product({name: req.body.product_name, quantity: req.body.quantity, img_url: req.body.img_url, description: req.body.description, created_at: new Date()});
			product.save(function(err){
				if(err){
					console.log('unable to add product');
				}else{
					console.log('added product');
					res.redirect('/products');
				}
			})
		}
	}
})();