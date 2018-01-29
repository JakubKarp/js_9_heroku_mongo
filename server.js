var express = require('express');
var app = express();



app.set('view engine', 'ejs')


var port = process.env.PORT || 3000;




app.get('/', (req, res) => {
    
    res.render('helo.ejs')

  });

  app.listen(port, () => {
    console.log('listening on 3000')
  })