const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();
const port = 3000;

app.use('/', router);
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
})
