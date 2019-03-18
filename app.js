const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

//logging for the middleware
app.use(morgan('dev'));

//appends the api in front of each route grabbed from the api folder /api
app.use('/api', require('./api'));

//Direct traffic to the sigle page that we server up
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

//Directs the traffic looking for bundle.js to the public folder where it is created
app.use(express.static(path.join(__dirname, 'public')));

//Erorr handling
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message || 'Internal server error');
});

module.exports = app;
