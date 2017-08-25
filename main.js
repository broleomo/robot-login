const MongoClient = require('mongodb').MongoClient();
// Connection URL
let url = 'mongodb://localhost:27017/directory';
const data = require('./data');
const express = require('express');
const app = express();
const path = require('path');
const mustacheExpress = require('mustache-express');


app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.use(express.static('public'));
app.set('view engine', 'mustache');

const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
// Replace "test" with your database name.
mongoose.connect('mongodb://localhost:27017/directory');
const bcrypt = require('bcryptjs');


app.get('/', (req, res) => {
      res.render('main', data)
    });

// app.get('/users/for-hire',(req,res) => {
//   let info = db.collection("users").find({});
//   res.render('user',{users: id -1);
// })

app.get('/login',(req,res)=>{
  MongoClient.connect(url)
        res.render("login")
    }
  );

app.get('/for-hire',(req,res)=>{
  MongoClient.connect(url)
  .then(function(db){
    return db.collection("users")
    .find({job: null}).toArray(
    function(err,doc){
      console.log(doc);
        res.render("users",{users: doc})
    })
    db.close();
  })
});

// app.get('/employed-robots',(req,res)=>{
//   MongoClient.connect(url)
//   .then(function(db){
//     return db.collection("users")
//     find({job: {$ne: null}}).toArray(
//     function(err,doc){
//       console.log(doc);
//         res.render("users",{users: doc})
//     })
//     db.close();
//   })
// });

app.listen(3000, function(){
  console.log("This is going so well!");
});
