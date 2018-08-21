var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    port	 : '3306',
    user     : 'root',
    password : 'root',
    database : 'opr_team'
});

connection.connect(function(err) {
    if (err) 
    	throw err;
    else
    	console.log("Connected!");

});

var config = {};

config.admin={};

config.app={};
config.connection={};

config.admin.name="Daniel";
config.admin.email="";
config.app.name="operations_site";
config.app.url="";
config.connection=connection;

module.exports=config