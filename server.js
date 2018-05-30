// Return a function
const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

var app = express();
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

// set http route handler
app.get('/', (req,res) => {
  //res.send('<h1>Hello Express</h1>');
  // res.send({
  //   name: 'Andrew',
  //   likes: [
  //     'Biking',
  //     'Basketball'
  //   ]
  // })
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    currentYear: new Date().getFullYear(),
    welcomeMessage: 'Welcome Dave!!'
  })
});

app.get('/about', (req, res) => {
  //res.send('About Page');
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

// Testing


// /bad - request failed - send back
//json with errorMessage

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});



// bind app to port on the machine
app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
