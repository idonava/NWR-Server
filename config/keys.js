if (process.env.NODE_DEV === 'production') {
    //we are in production - return the prod set of keys.    
    moudle.exports = require('./prod');

}
else {
    //we are in development - return the dev keys!
    moudle.exports = require('./dev');
}