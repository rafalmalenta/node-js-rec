const { array, object, string, number, date, InferType } = require('yup');
const genreSchema = require('./genreSchema')

const userSchema = object({
    title: string().optional(),
    genres: array().optional().of(genreSchema)
})


module.exports = userSchema;
