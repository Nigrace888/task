/*

const express = require('express');
const fs = require('fs');
const { signupController } = require('./auth/signup');

const app = express();
const port = 3000;
const file_path = "./users.json";

app.use(express.json());

function get_users() {
  const data = fs.readFileSync(file_path);
  return JSON.parse(data);
}

app.get('/', (req, res) => {
  res.send("hello class");
});

app.get('/team', (req, res) => {
  res.json(get_users());
});


app.post('/signup', signupController);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
*/

import express from 'express';
import authRoute from './routes/authRoute.js'

const app = express();
const PORT=3000

app.use(express.json());
app.use('/', authRoute)


app.listen(PORT, () => {
  console.log ("server running!!!")
});