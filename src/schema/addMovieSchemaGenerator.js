const { string, number, object, string } = require('yup');
const genresSchemaGenerator = require('./genreSchemaGenerator');
const { JsonDB, Config } = require('node-json-db');

let db = new JsonDB(new Config("data/db", true, false, '/'));

async function addMovieSchemaGenerator(){
    let genres = await db.getData('/genres');    
    const genresschema = genresSchemaGenerator(genres);   
    return object({    
        title: string().optional(),
        year: number().required(),
        runtime: number().required(),
        director: string().max(255).required(),
        actors: string().optional(),
        plot: string().optional(),
        posterUrl: string().optional(),
        genres: genresSchema.required(),
    })
}

module.exports = addMovieSchemaGenerator;
