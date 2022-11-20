const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/', router);

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
})
