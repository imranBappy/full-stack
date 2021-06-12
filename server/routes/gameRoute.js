const { gamePostController, gameGetController, gameAllDeleteController } = require('../controllers/gameController');
const isAdmin = require('../middlewares/isAdmin');

const router = require('express').Router()

router.post('/add', isAdmin, gamePostController )
router.get('/get-all', isAdmin, gameGetController )
router.delete('/delete-all',isAdmin, gameAllDeleteController )




module.exports = router;