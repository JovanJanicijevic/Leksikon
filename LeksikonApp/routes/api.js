const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('jovansom');
  res.send('andjelabog');
});

module.exports = router;