// require express as express
// require path as path
// require fs as fs

// cache the express module as 'app'

// cache the client directory as 'clientPath' using path.join
const clientPath = path.join(__dirname, '..', 'client');
// use the static middleware to serve the client folder

// get the '/' endpoint
// test it with a basic 200 and end response
// then send the index.html file
// use error handling to catch sendFile errors

// get the '/about' endpoint and serve an about page

// cache a PORT to process.envPORT || 3000
// listen on the PORT server
// log that the server is runnig