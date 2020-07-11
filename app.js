const express = require('express');
const path = require('path');
const cardsRouter = require('./routes/cards.js');
const usersRouter = require('./routes/users.js');
const userIdRouter = require('./routes/userid.js');
const notFoundRouter = require('./routes/notfound.js');

const { PORT = 3000 } = process.env;

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use('/cards', cardsRouter);
app.use('/users', usersRouter);
app.use('/users', userIdRouter);
app.use(/..+/, notFoundRouter);

app.listen(PORT);
