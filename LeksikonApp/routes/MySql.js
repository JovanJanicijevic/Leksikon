var mysql = require('mysql');

var con = mysql.createPool({
    connectionLimit: 100,
    host: "localhost",
    user: "root",
    password: "",
    database: "leksikondb"
  });

  module.exports = con;