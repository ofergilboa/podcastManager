const mongoose = require('mongoose')
const Schema = mongoose.Schema

const podcastSchema = new Schema({
    title: String,
    id: String,
    picture: String,
})

const Podcast = mongoose.model("Podcast", podcastSchema)


module.exports.Podcast = Podcast