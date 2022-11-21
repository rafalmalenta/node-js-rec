const { string, number, object, string } = require('yup');
const genresSchemaGenerator = require('./genreSchemaGenerator');

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

const genresSchema = genresSchemaGenerator(genresHardCoded);

const userSchema = object({    
    title: string().optional(),
    year: number().required(),
    runtime: number().required(),
    director: string().max(255).required(),
    actors: string().optional(),
    plot: string().optional(),
    posterUrl: string().optional(),
    genres: genresSchema.required(),
})


