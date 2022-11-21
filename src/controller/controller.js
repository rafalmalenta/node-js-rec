const getMoviesSchema = require('../schema/getMovieSchema');

class MoviesController{
    async getMovies(req, res) {
        const schema = await getMoviesSchema();
        try{
           
            const x = await schema.validate(req.body);
        }
        catch(error){
            console.log(error)
        }
        console.log(req.body);
    res.send("fds");
    }
}

module.exports = new MoviesController
