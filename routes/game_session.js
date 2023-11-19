/**
 * Route handling for game sessions in the Board Games Tracking App.
 * Handles displaying the form to add game sessions and posting new sessions.
 */

module.exports = {
    // Render the form to add a new game session
    getAdd: (req, res) => {
        let query = "SELECT * FROM games"; // Query to select all games
        db.query(query, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Database error");
            }
            // Pass the list of games to the 'add-game-session' template
            res.render('add-game-session.ejs', {
                title: 'Board Games | Add Game Session',
                games: result
            });
        });
    },
    
    // Handle the submission of the form to add a new game session
    postAdd: (req, res) => {
        // SQL query to insert a new game session into the database
        let query = "INSERT INTO game_sessions (game_id, play_date) VALUES (?, ?)";
        let values = [req.body.game_id, req.body.play_date];
        
        db.query(query, values, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error adding game session");
            }
            // Redirect to the homepage after successful insertion
            res.redirect('/');
        });
    }
};
