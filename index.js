const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bonjour, ceci est une application Node.js déployée sur Heroku !');
});

app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});
