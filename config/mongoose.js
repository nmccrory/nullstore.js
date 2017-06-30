var mongoose = require('mongoose');
var fs = require('fs');

mongoose.connect('mongodb://APPSETTING_mlab_user:APPSETTING_mlab_pswd@ds032340.mlab.com:32340/order-management');

var models_path = __dirname + '/../server/models';

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') > 0){
		require(models_path + '/' + file);
	}
})