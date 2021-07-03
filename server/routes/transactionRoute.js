const { 
    transactionPortController,
    transactionGetController

} = require('../controllers/transactionController');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = require('express').Router();

router.post('/add', isAuthenticated, transactionPortController )
router.get('/', isAuthenticated, transactionGetController )

// router.get('/')

module.exports = router;
