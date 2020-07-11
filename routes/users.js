const usersRouter = require('express').Router();
const fsPromises = require('fs').promises;
const path = require('path');

usersRouter.get('/', (req, res) => {
  const usersPath = path.join(__dirname, '../data/users.json');
  fsPromises
    .readFile(usersPath, { encodinng: 'utf8' })
    .then((data) => {
      const users = JSON.parse(data);
      res.send(users);
    })
    .catch(() => {
      res.status(500).send({ message: 'Error getting data' });
    });
});

module.exports = usersRouter;
