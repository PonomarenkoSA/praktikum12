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
      let index = false;
      for (let i = 0; i < users.length; i += 1) {
        if (users[i]._id === id) {
          index = i;
          break;
        }
      }
      if (index) {
        res.send(users[index]);
      } else {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
    })
    .catch(() => {
      res.status(500).send({ message: 'Error getting data' });
    });
});

module.exports = userIdRouter;
