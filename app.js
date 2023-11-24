/**
 * Board Games Tracking App
 * Author: Ester Jing
 *
 * This Node.js/Express application serves as the backend for managing board games
 * and tracking game sessions.
 */

// Environment configuration
require('dotenv').config();

// Core dependencies
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser');

// Initialize express app
const app = express();

// Route handlers for different parts of the application
const { getHomePage } = require('./routes/index');
const game = require('./routes/game');
const game_session = require('./routes/game_session');

// Set up the application to serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Retrieve application port from environment variables or use default
const port = process.env.PORT || 3000;

// Set up database connection parameters from environment variables or use defaults
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'db',
    user: process.env.DB_USER || 'app',
    password: process.env.DB_PASSWORD || 'wonderful',
    database: process.env.DB_DATABASE || 'miechallenge'
});

// Establish a connection to the database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

// Expose the database connection to the rest of the application
global.db = db;

// Application settings for port and view engine
app.set('port', process.env.PORT || port);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Middleware for parsing incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Define application routes
app.get('/', getHomePage);
app.get('/add-game', game.getAdd);
app.post('/add-game', game.postAdd);
app.get('/edit-game/:id', game.getEdit);
app.post('/edit-game/:id', game.postEdit);
app.get('/add-game-session', game_session.getAdd);
app.post('/add-game-session', game_session.postAdd);

// Start the server and listen on the configured port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
