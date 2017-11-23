const express = require('express');
const router = express.Router();
var pool = require('./MySql');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('andjelabog');
  pool.getConnection(function(err,connection){
    console.log("connected");
    pool.query("SELECT * FROM user", function (err, result, fields) {
      if (err) throw err;
      rez = JSON.stringify(result);
      console.log(JSON.parse(rez));
    });
    connection.release();
  });
});

module.exports = router;