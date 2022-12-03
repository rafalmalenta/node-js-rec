const { string } = require('yup');

function genreSchemaGenerator(availableGenres){
    return string().oneOf(availableGenres);
}

module.exports = genreSchemaGenerator;
