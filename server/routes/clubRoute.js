const router = require('express').Router();
const isAdmin = require('../middlewares/isAdmin')
const isAuthenticated = require('../middlewares/isAuthenticated');
const {
    clubPortController,
    rankingClubGetController,
    clubGetController
 } = require('../controllers/clubController');



router.post('/add-club', isAdmin, clubPortController );
router.get('/get-ranking-club' , rankingClubGetController );
router.get('/get-all-club', clubGetController );



module.exports = router