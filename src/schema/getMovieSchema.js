const { array, object, string } = require('yup');
const genresSchema = require('./genreSchemaGenerator')

const genresHardCoded = [
    "Comedy",
    "Fantasy",
    "Crime",
    "Drama",
    "Music",
    "Adventure",
    "History",
    "Thriller",
    "Animation",
    "Family",
    "Mystery",
    "Biography",
    "Action",
    "Film-Noir",
    "Romance",
    "Sci-Fi",
    "War",
    "Western",
    "Horror",
    "Musical",
    "Sport"
];

const schema = genresSchema(genresHardCoded);

const userSchema = object({    
    title: string().optional(),
    genres: array().optional().min(1).of(schema)
})

module.exports = userSchema;
