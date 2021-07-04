const { 
    betTitlePostController, 
    resultAddPostController, 
    allBetGetController ,
    titleAllDeleteController, 
    betAllDeleteController, 
    singleBetGetController,
    resultUpdateController,
    betSingleGetController,
    betUpdateController
} = require('../controllers/betController')
const isAdmin = require('../middlewares/isAdmin')

const router = require('express').Router()

router.post('/post-title', isAdmin, betTitlePostController,  );
router.post('/add-bet', isAdmin, resultAddPostController);
router.get('/get-all-bet', isAdmin, allBetGetController);
router.get('/get-single-bet', isAdmin, singleBetGetController );
router.get('/single-bet-get', isAdmin, betSingleGetController );
router.delete('/title-all-delete', titleAllDeleteController)
router.delete('/delete-all-bet', betAllDeleteController)
router.put('/result-update', isAdmin, resultUpdateController );
router.put('/bet-update', isAdmin, betUpdateController );

module.exports = router