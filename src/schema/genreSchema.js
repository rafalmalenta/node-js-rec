const { array,object, string, number, date, InferType } = require('yup');

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
]

let genreSchema = string().oneOf(genresHardCoded);


module.exports = genreSchema;
