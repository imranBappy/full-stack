const router = require('express').Router();
const isAuthenticated = require('../middlewares/isAuthenticated');
const {
    clubPortController,
    rankingClubGetController,
    clubGetController,
    clubUpdatePutController
 } = require('../controllers/clubController');



router.post('/add-club', isAuthenticated, clubPortController );
router.get('/get-ranking-club' , rankingClubGetController );
router.get('/get-all-club', clubGetController );
router.put('/update', isAuthenticated, clubUpdatePutController );


module.exports = router