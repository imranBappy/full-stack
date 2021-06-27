const { clubPortController } = require('../controllers/clubController');

const router = require('express').Router();

router.post('/add-club', clubPortController )


module.exports = router