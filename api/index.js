const router = require('express').Router();

//Users router
router.use('/users', require('./Users'));

//Things router
router.use('/things', require('./Things'));

//Favorites router
router.use('/favorites', require('./Favorites'));

module.exports = router;
