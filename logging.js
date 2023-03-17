// import express (after npm install express)
const express = require('express');
// create new express app and save it as "app"
const app = express();

// server configuration
const PORT = 3000;

// Importing module Date
const date = require('date-and-time')
const now  =  new Date();
// Formatting the date and time
const value = date.format(now,'YYYY/MM/DD HH:mm:ss');


// Simple request time logger
app.use((req, res, next) => {
   console.log( value + [": Webserver Activity occured"]);

   // This function call tells that more processing is
   // required for the current request and is in the next middleware
//    function/route handler.
   next();  
});


// create a route for the app
app.get('/', function (req, res) {
    res.send('Hello World');
  });

  
// make the server listen to requests
app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
  });