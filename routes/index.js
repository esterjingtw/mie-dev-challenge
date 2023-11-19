/**
 * Route handling for the homepage of the Board Games Tracking App.
 * Retrieves and displays a list of games and their most recent play sessions.
 */

module.exports = {
    // Retrieve and render the homepage with the list of games
    getHomePage: (req, res) => {
        // SQL query to select all games and their most recent session dates
        let query = `
            SELECT games.*, MAX(game_sessions.play_date) as last_play_date
            FROM games
            LEFT JOIN game_sessions ON games.id = game_sessions.game_id
            GROUP BY games.id
            ORDER BY last_play_date DESC;
        `;

        db.query(query, (err, games) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error retrieving games for homepage");
            }
            // Pass the games and session data to the 'index' template
            res.render('index.ejs', {
                title: 'Board Games | Home',
                games: games 
            });
        });
    }
};
