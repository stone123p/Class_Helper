var express = require('express');
var UserDB = require('./lib/userDB');
var bodyParser = require('body-parser')
var http = require('http');
var xml = require('xml');
var path = require('path');

var app=express();
var port = process.env.PORT || 3000;
var url='http://localhost:'+port;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/rmuser/:name',function(req, res){
  UserDB.remove({name:req.params.name},function(err){
    if(err){
      console.log(err);
    }else{
      console.log('User deleted');
    }
  });
});
app.get('/userdata/:key',function(req,res){
  UserDB.find(function(err,cats){
    res.send(cats.filter(function(c){
      return c.username+"&"+c.password==req.params.key
    }));
  });

});
app.get('/adduser/:name/:username/:password/:id',function(req, res,next){
  var newUser = UserDB({
    name: req.params.name,
    username: req.params.username,
    password: req.params.password,
    id:req.params.id,
    email:''
  });

  newUser.save(function(err) {
      if (err){
        console.log(err);
      }else{
        console.log('User created!');
      }
  });
});

app.get('/listusers',function(req, res,next){
  UserDB.find(function(err,cats){
    cats.forEach(function(c){console.log(c);});
  });
});
app.post('/login',function (req, res) {
  UserDB.find(function(err,Users){ 
    var can_enter_user=Users.filter(d=>{
      return(req.body.key==(d.username+"&"+d.password));
    });
    res.send({
      can_enter:can_enter_user.length>0,
      redirect: '/users?id='+(can_enter_user.length>0?can_enter_user[0].id:-1)+
        "&state=bbs"
    });
    res.end();
  });

});

app.get('/users',function (req, res) {
  res.render('profile',{"data":12});
});

app.listen(port);
console.log('Running server on port:' + port);
