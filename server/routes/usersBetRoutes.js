const router = require('express').Router();
const { betPostController } = require('../controllers/usersBetController');
const isAuthenticated = require('../middlewares/isAuthenticated');

router.post('/adduserbet',isAuthenticated, betPostController)
// router.post('/userbets', isAuthenticated, betPostController)

module.exports = router