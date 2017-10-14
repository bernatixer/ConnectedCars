import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { App } from './components/App';

const app = new Express();
const server = new Server(app);

// Conect to DB
var mongo = require('./api/db.js');

// use ejs templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/api/push/:name/:email/:outLat,:outLon/:inLat,:inLon', (req, res) => {
    var start = { startLat: req.params.outLat, startLon: req.params.outLon };
    var end = { endLat: req.params.inLat, endLon: req.params.inLon };
    mongo.push(req.params.name, req.params.email, start, end);
    res.redirect('/');
});

app.get('/api/search/:outLat,:outLon/:inLat,:inLon', (req, res) => {
    var start = { startLat: req.params.outLat, startLon: req.params.outLon };
    var end = { endLat: req.params.inLat, endLon: req.params.inLon };
    mongo.search(start, end, function(err, result) {
        if (err) {
            console.log('Failed');
        } else {
            console.log(result);
        }
        res.redirect('/');
    });
});

app.get('/api/push', (req, res) => {
    /*var name = req.body.name;
    var email = req.body.email;
    var pSortida = req.body.email;
    var p = req.body.email;*/
    // fer el push
    mongo.insert();
    res.redirect('/');
});

// universal routing and rendering
app.get('*', (req, res) => {
    let markup = '';
    let status = 200;

    if (process.env.UNIVERSAL) {
        const context = {};
        markup = renderToString(
            <Router location={req.url} context={context}>
                <App />
            </Router>
        );

        // context.url will contain the URL to redirect to if a <Redirect> was used
        if (context.url) {
            return res.redirect(302, context.url);
        }

        if (context.is404) {
            status = 404;
        }
    }

    return res.status(status).render('index', { markup });
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.info(
        `
      Server running on http://localhost:${port} [${env}]
      Universal rendering: ${process.env.UNIVERSAL ? 'enabled' : 'disabled'}
    `
    );
});
