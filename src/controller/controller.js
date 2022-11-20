const getMoviesSchema = require('../schema/getMovieSchema');

class MoviesController{
    async getMovies(req, res) {
        try{
            const x = await getMoviesSchema.validate(req.body);
        }
        catch(error){
            console.log(error)
        }
        console.log(req.body);
    res.send("fds");
    }
}

module.exports = new MoviesController
