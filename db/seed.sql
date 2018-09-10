DROP DATABASE IF EXISTS pwned;
CREATE DATABASE pwned;

\c pwned;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR,
  email VARCHAR,
  UNIQUE (email)
);

INSERT INTO users (first_name, email)
VALUES ('Doe', 'doe@testemail.com');