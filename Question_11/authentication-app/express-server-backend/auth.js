const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const data = {
  "mohd": {
    "password": "gujju"
  },
  "varaliya": {
    "password": "mohammed"
  },
  "userName": {
    "password": "Password"
  },
  "johndoe": {
    "password": "qwerty"
  }
}

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  console.log(`Received request with username ${username} and password ${password}`);

  if (!data[username]) {
    res.status(401).send('Invalid username');
    return;
  }

  if (!req.body.username || !req.body.password) {
    res.status(400).send('Invalid request');
    return;
  }
  

  if (data[username].password === password) {
    res.send('Login successful');
  } else {
    res.status(401).send('Login failed');
  }
});

app.listen(3000, () => {
  console.log('Express server running on port http://localhost:3000');
});
