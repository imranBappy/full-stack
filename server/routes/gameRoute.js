const { 
    gamePostController, 
    gameGetController, 
    gameAllDeleteController ,
    gameUpdateController
} = require('../controllers/gameController');
const isAdmin = require('../middlewares/isAdmin');

const router = require('express').Router()

router.post('/add', isAdmin, gamePostController )
router.get('/get-all', isAdmin, gameGetController )
router.patch('/game-update', isAdmin, gameUpdateController)
router.delete('/delete-all',isAdmin, gameAllDeleteController)




module.exports = router;