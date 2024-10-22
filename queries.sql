CREATE TABLE manga (
    id SERIAL PRIMARY KEY,
    rank INT NOT NULL,
    title TEXT NOT NULL,
    score TEXT,
    img TEXT,
    genres TEXT,
    author TEXT,
    review TEXT,
    synopsis TEXT
)