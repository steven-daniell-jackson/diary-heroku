// grab the things we need
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
 
});

// Hasing password field before saving to database
userSchema.pre('save',function(next){

var admin = this;

if (!admin.isModified('password')) return next();

bcrypt.hash(admin.password, null, null, function(err,hash){

  if (err) return next(err);

admin.password = hash;
next();

});

});


userSchema.methods.comparePassword = function(password){
  var user = this;
  return bcrypt.compareSync(password, user.password);
}

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;