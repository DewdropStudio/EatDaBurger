// initialize Node.js package
var mysql = require("mysql");
var connection;

// if connecting remotely, use JawsDB
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	// creates MySQL server connection
	connection = mysql.createConnection({
	    port: 3306,
	    host: "nwhazdrp7hdpd4a4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	    user: "mpqlxexgbmkag9qp",
	    password: "imh40xr2qh71pkm8",
	    database: "os0ap1aqpksyc0n2"
	});
}

// connects to MySQL server
connection.connect(function(error) {
    if (error) {
      console.error("MYSQL CONNECTION ERROR: " + error);
    }
    console.log("Connected to MySQL server.");
});

// exports connection
module.exports = connection;