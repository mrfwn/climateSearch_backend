const restful = require('node-restful')
const mongoose = restful.mongoose

const citySchema = new mongoose.Schema({
    city: { type: String, required: true },
    cityx: { type: String, required: true },
    cityy: { type: String, required: true }
})



module.exports = restful.model('searchCity', citySchema)