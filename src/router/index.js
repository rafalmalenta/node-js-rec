const exp = require('constants');
const app = require('express');
const MoviesController = require('../controller/controller');

const router = app.Router();

router.post('/', MoviesController.getMovies )

module.exports = router;
