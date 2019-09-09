const searchCity = require('./searchCity')
const errorHandler = require('../common/errorHandler')

searchCity.methods(['get', 'post', 'put', 'delete'])
searchCity.updateOptions({new: true, runValidators: true})
searchCity.after('post', errorHandler).after('put', errorHandler)

searchCity.route('count', (req, res, next) => {
    searchCity.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

module.exports = searchCity