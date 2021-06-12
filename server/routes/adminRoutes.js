const { adminPostController, adminGetController, adminPutController, adminPostLoginController, singleAdminGetController } = require('../controllers/adminController')
const { dashboardGetController } = require('../controllers/dashboard')
const isAdmin = require('../middlewares/isAdmin')

const router = require('express').Router()

router.get('/', isAdmin, dashboardGetController )
router.post('/add',isAdmin, adminPostController )
router.post('/login', adminPostLoginController )
router.get('/all-admin',isAdmin,  adminGetController )
router.get('/single-user/:userId',isAdmin, singleAdminGetController )
router.put('/change',isAdmin, adminPutController )



module.exports = router