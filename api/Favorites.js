const router = require('express').Router();
const { Favorite } = require('../db/Models');

//GET all favorites with their associations /favorites
router.get('/', (req, res, next) => {
  Favorite.findAll({
    include: [{ all: true }],
    order: [['userId', 'ASC'], ['rank', 'ASC']],
  })
    .then(favorites => {
      res.send(favorites);
    })
    .catch(next);
});

//GET one favorite with an id /:id
router.get('/:id', (req, res, next) => {
  Favorite.findByPk(req.params.id)
    .then(favorite => {
      res.send(favorite);
    })
    .catch(next);
});

module.exports = router;
