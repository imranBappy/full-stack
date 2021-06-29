const { registerPostController,allUserGetController, loginPostController, changePasswordPutController, singleUserGetController } = require('../controllers/userController');
const isAuthenticated = require('../middlewares/isAuthenticated');
const isAdmin = require('../middlewares/isAdmin')
const router = require('express').Router()

router.post('/register', registerPostController );

router.post('/login', loginPostController );
router.put('/login', isAuthenticated, changePasswordPutController)
router.get('/single-user/:userId',isAuthenticated, singleUserGetController)
router.get('/',isAdmin, allUserGetController)




module.exports = router