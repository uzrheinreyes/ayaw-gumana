const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let blogSchema = new Schema({
    title: {
        type: String
    },
    desc: {
        type: String
    },
    mkdown: {
        type: String
    },
}, {
    collection: 'blogs'
})

module.exports = mongoose.model('blog', blogSchema)