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
			})
		}
	}
})();