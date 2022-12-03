const getMoviesSchema = require('../schema/getMovieSchemaGenerator');

class MoviesController{
    async getMovies(req, res) {
        const schema = await getMoviesSchema();
        try{           
            const x = await schema.validate(req.body, {abortEarly: false});
            res.status(400);  
            res.send({});          
        }
        catch(error){            
            res.status(400);
            res.send(error.errors);
        }            
    }
}

module.exports = new MoviesController
