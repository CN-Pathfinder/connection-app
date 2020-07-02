if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev')
}

// this checks if you are in dev mode or in production (so in heroku server or local server)
//this file is to identify if the product is in production or not
// so if you are in production go to get the information from prod.js. If not, go to the dev.js folder 
