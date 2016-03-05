var User = require('../models/admin');
var Invoice = require('../models/invoices');
var config = require('../../config');
var secretKey = config.secretKey;
var jsonwebtoken = require('jsonwebtoken');


// Function to create web token
function createToken(user){

	var token = jsonwebtoken.sign({
		_id: user._id,
		name: user.name,
		username: user.username 
	}, secretKey, {
		expiresInMinute: 1440
	});


	return token;
}

// Export API
module.exports = function(app, express){

	var api = express.Router();




// // Get data from the database
// api.get('/users', function(req,res){

// 	User.find({}, function(err, users){

// 		if (err) {

// 			res.send(err);
			
			
// 		} else {
// 			res.json(users);

// 			// res.render("users", json(users));
// 		}

// 	});

// });


// Get invoices data from the database
api.get('/invoices', function(req,res){

	Invoice.find({}, function(err, invoices){

		if (err) {

			res.send(err);
			
			
		} else {
			res.json(invoices);

			// res.render("users", json(users));
		}

	});

});

// Post data to the database
api.post('/new-invoice', function(req, res){


// console.log(req.body.dateassigned);

	var invoice = new Invoice({

  taskName: req.body.taskname,
  taskDescription: req.body.taskdescription,
  platform: req.body.platform,
  clientName: req.body.clientname,
  hours: req.body.hours,
  url: req.body.url,
  workDone: req.body.workdone,
  monthFilter:req.body.monthfilter,
  yearFilter:req.body.yearfilter,
  assignedBy: req.body.assignedby,
  dateAssigned: req.body.dateassigned,
  dateCompleted: req.body.datecompleted,
   comments: req.body.comments


	});

	invoice.save(function(err){
		if (err) {
			res.send(err);
			return
		}

		res.json({message:'Entry saved'});

	});


});

// Test user login
api.post('/login', function(req,res){
	User.findOne({
		username: req.body.username
	}).select('password').exec(function(err, user){

		if (err) throw err;

		if (!user) {
			res.send({message: "User doesn't exist"});
		} else if(user){
			var validPassword = user.comparePassword(req.body.password);

			if (!validPassword) {
				res.send({message: "invalid password"});
			} else {
		// Create token

		var token = createToken(user);
		res.json({
			success:true,
			message: "Successful login",
			token: token
		});

	}
}

});


});


return api;

}

