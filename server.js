//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/portafolio-personal'));

// For all GET requests, send back index.html so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
  });

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);