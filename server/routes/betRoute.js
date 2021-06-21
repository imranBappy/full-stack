const { betPostController } = require('../controllers/betController')
const isAdmin = require('../middlewares/isAdmin')

const router = require('express').Router()

router.post('/post', isAdmin, betPostController )

module.exports = router