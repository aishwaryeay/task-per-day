const express = require('express');
const session = require('express-session');
const redisClient = require('./redis');

const app = express();

app.use(
  session({
    store: new (require('connect-redis')(session))({
      client: redisClient,
    }),
    secret: 'long-random-key', 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, 
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});