class MoviesController{
    getMovies(req, res) {
        console.log(req.body);
        res.send('Hello World!')
    }
}

module.exports = new MoviesController
