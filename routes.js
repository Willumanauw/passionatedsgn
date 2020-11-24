const express = require('express');
const router = express.Router();

router.use('/home', express.static('src'))

router.get("/", (req, res) => {
    res.json({
        ok : 'OK',
        message : 'Hallo, semua !'
    })
});

module.exports = router;