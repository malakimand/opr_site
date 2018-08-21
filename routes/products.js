const express = require('express');
const router = express.Router();
const config = require('../config.js');

router.get('/', function(req, res, next) {
  // GET/product / route
  config.connection.query("select * from product", function(err,rows) {
  	if(err) throw err;
  	res.send({allProducts:rows});
  })
  
});


module.exports = router;