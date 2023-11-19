# add mysql/mariadb table definitions

CREATE TABLE games (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE game_sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    game_id INT,
    play_date DATE,
    FOREIGN KEY (game_id) REFERENCES games(id)
);

# add sample data
INSERT INTO games (name, description) VALUES ('Chess', 'A classic strategy game'), ('Monopoly', 'A board game about buying and trading properties');
