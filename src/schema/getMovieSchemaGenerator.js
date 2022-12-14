const { array, object, string } = require('yup');
const genresSchemaGenerator = require('./genreSchemaGenerator');
const { JsonDB, Config } = require('node-json-db');

let db = new JsonDB(new Config("data/db", true, false, '/'));

async function getMovieSchemaGenerator(){
    let genres = await db.getData('/genres');    
    const schema = genresSchemaGenerator(genres);   
    return object({    
        title: string().optional(),
        genres: array().optional().min(1).of(schema)
    })
}

module.exports = getMovieSchemaGenerator;
