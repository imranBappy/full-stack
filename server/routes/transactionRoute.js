const { transactionPortController } = require('../controllers/transactionController');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = require('express').Router();

router.post('/', isAuthenticated, transactionPortController )
// router.get('/')

module.exports = router;
