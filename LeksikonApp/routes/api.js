const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api wo  rks');
  res.send('andjelabog');
});

module.exports = router;