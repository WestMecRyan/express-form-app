// require express as express
const express = require('express');
// require path as path
const path = require('path');
// require fs as fs
const fs = require('fs');
// cache the express module as 'app'
const app = express();
// cache the client directory as 'clientPath' using path.join
const clientPath = path.join(__dirname, '..', 'client');
// use the static middleware to serve the client folder
app.use(express.static(clientPath));
// get the '/' endpoint
// test it with a basic 200 and end response
app.get('/', (req, res) => {
    res
        .status(200)
        .send('It works!');
});
app.get('/', (req, res) => {
    res
    // sendFile sets the header content type based on the extension of the file name
        .sendFile('index.html', { root: clientPath }, (err) => { // 3 params , endpoint, path, and arrow function pass an err
            if (err) {
                console.error('error sending file:', err);
                res.status(500).send('error sending file');
            } else {
                res.status(200); // this is set by sendFile
                res.set('Content-Type', 'text/html'); // this is set by sendfile
                console.log('file sent successfully');
            }
        });
});
// then send the index.html file
// use error handling to catch sendFile errors

// practice get the '/about' endpoint and serve an about page

// cache a PORT to process.envPORT || 3000
const PORT = process.env.PORT || 3000;
// listen on the PORT server
// log that the server is runnig
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});