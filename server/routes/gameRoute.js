const { 
    gamePostController, 
    gameGetController, 
    gameAllDeleteController ,
    gameUpdateController,
    allGameLoadGetController
} = require('../controllers/gameController');
const isAdmin = require('../middlewares/isAdmin');

const router = require('express').Router()

router.post('/add', isAdmin, gamePostController )
router.get('/get-all', isAdmin, gameGetController )
router.get('/get-game', isAdmin, allGameLoadGetController )

router.patch('/game-update', isAdmin, gameUpdateController)
router.delete('/delete-all',isAdmin, gameAllDeleteController)




module.exports = router;