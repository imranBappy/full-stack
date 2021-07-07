const router = require('express').Router();
const { 
    betPostController , 
    betGetController,
    userBetStatusUpdateController
} = require('../controllers/usersBetController');
const isAuthenticated = require('../middlewares/isAuthenticated');

router.post('/adduserbet',isAuthenticated, betPostController)
router.get('/', isAuthenticated, betGetController);
router.patch('/result-status-update', isAuthenticated, userBetStatusUpdateController);


module.exports = router