const { string } = require('yup');

function genreSchemaGenerator(array){
    return string().oneOf(array);
}

module.exports = genreSchemaGenerator;
