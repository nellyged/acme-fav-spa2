const router = require('express').Router();
const { User } = require('../db/Models');

//GET all users /users
router.get('/', (req, res, next) => {
  User.findAll()
    .then(users => {
      res.send(users);
    })
    .catch(next);
});

//GET one user by id /users/:id
router.get('/:id', (req, res, next) => {
  User.findByPk(req.params.id)
    .then(user => {
      res.send(user);
    })
    .catch(next);
});

module.exports = router;
