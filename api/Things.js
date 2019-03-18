const router = require('express').Router();
const { Thing } = require('../db/Models');

//GET all things /things
router.get('/', (req, res, next) => {
  Thing.findAll()
    .then(things => {
      res.send(things);
    })
    .catch(next);
});

//GET one thing by the id
router.get('/:id', (req, res, next) => {
  Thing.findByPk(req.params.id)
    .then(thing => {
      res.send(thing);
    })
    .catch(next);
});

module.exports = router;
