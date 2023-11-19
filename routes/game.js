/**
 * Route handling for games in the Board Games Tracking App.
 * Handles adding new games, editing existing games, and rendering their forms.
 */

module.exports = {
    // Render the form to add a new game
    getAdd: (req, res) => {
        res.render('add-game.ejs', {
            title: 'Board Games | Add Game'
        });
    },
    
    // Render the form to edit an existing game
    getEdit: (req, res) => {
        let gameId = req.params.id;
        let query = "SELECT * FROM games WHERE id = ?";
        
        db.query(query, [gameId], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error retrieving game for edit");
            }
            // Pass the game data to the 'edit-game' template
            res.render('edit-game.ejs', {
                title: 'Board Games | Edit Game',
                game: result[0]
            });
        });
    },
    
    // Handle the submission of the form to add a new game
    postAdd: (req, res) => {
        let query = "INSERT INTO games (name, description) VALUES (?, ?)";
        let values = [req.body.name, req.body.description];
        
        db.query(query, values, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error adding new game");
            }
            // Redirect to the homepage after successful addition
            res.redirect('/');
        });
    },
    
    // Handle the submission of the form to update an existing game
    postEdit: (req, res) => {
        let gameId = req.params.id;
        let query = "UPDATE games SET name = ?, description = ? WHERE id = ?";
        let values = [req.body.name, req.body.description, gameId];

        db.query(query, values, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error updating game");
            }
            // Redirect to the homepage after successful update
            res.redirect('/');
        });
    }
};
