//  Add your code here
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    name: {
        type: String
    },
    occupation: {
        type: String
    },
    catchPhrase: {
        type: String
    },
    movie: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    }]
})

const Celebrity = mongoose.model('Celebrity', schema)

module.exports = Celebrity
