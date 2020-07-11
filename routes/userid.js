const userIdRouter = require('express').Router();
const fsPromises = require('fs').promises;
const path = require('path');

userIdRouter.get('/:id', (req, res) => {
  const usersPath = path.join(__dirname, '../data/users.json');
  const { id } = req.params;
  fsPromises
    .readFile(usersPath, { encodinng: 'utf8' })
    .then((data) => {
      const users = JSON.parse(data);
      const userEx = users.find((user) => user._id === id);
      if (userEx) {
        res.send(userEx);
      } else {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
    })
    .catch(() => {
      res.status(500).send({ message: 'Error getting data' });
    });
});

module.exports = userIdRouter;
