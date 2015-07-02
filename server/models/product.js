var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
	name: String,
	quantity: Number,
	img_url: String,
	description: String,
	created_at: Date
});

mongoose.model('Product', ProductSchema);