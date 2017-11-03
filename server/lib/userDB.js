var mongoose = require('mongoose');
var DB_URL = 'mongodb://localhost/user_data';


var userSchema = new mongoose.Schema({
  name:String,
  username:String,
  password:String,
  email:String,
  id:Number

});

mongoose.connect(DB_URL,{server:{auto_reconnect:true}});

mongoose.connection.on('connected',function () {
      console.log('Mongoose connect ' + DB_URL + " success");
});

mongoose.connection.on('error',function (err) {
      console.log('Mongoose connect Error:' + err);
});

mongoose.connection.on('disconnected',function () {
      console.log('Mongoose connect disconnected');
});

var User = mongoose.model('User',userSchema);

module.exports = User;
