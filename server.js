var express = require('express');
var app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs')


var port = process.env.PORT || 3000;

mongoose.connect('mongodb://kuba:ku22@ds159187.mlab.com:59187/first_database_mongo', {useMongoClient: true}, (err, db) => {
    if (err) return console.log(err)
    app.listen(port, () => {
        console.log("listening on", port)
    })
    app.get('/', (req, res) => {
        db.collection('quotes').find().toArray((err, result) => {
          if (err) return console.log(err)
         
          res.render('index.ejs', {quotes: result})
        })
      });
      app.post('/quotes', (req, res) => {
        db.collection('quotes').save(req.body, (err, result) => {
            if (err) return console.log(err)
    
        console.log('saved to database')
        res.redirect('/')
        })
    })  
});



  