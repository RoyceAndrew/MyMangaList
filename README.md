# MyMangaList Documentation

## Overview

**MyMangaList** is a web application designed to provide users with a comprehensive platform for managing and tracking their manga collections. The project is built using **Express**, **Node.js**, **EJS**, **AJAX**, **jQuery**, and **PostgreSQL**, and utilizes the **Mangadex API** to fetch manga data. This application is inspired by **MyAnimeList.net**, aiming to offer a similar user experience tailored for manga enthusiasts.

## Features

- **User-Friendly Interface:** Intuitive layout for easy navigation and interaction.
- **Dynamic Content:** Uses AJAX and jQuery for smooth content updates without full page reloads.

## Installation

To get started with **MyMangaList**, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/RoyceAndrew/MyMangaList.git

2. **Navigate into the project directory:**

   ```bash
   cd MyMangaList

3. **Install dependencies:**

   ```bash
   npm install

4. **Install nodemon globally for development:**

   ```bash
   npm install -g nodemon

5. **Install PostgreSQL client globally:**

   ```bash
   npm install -g pg

6. **Set up PostgreSQL:**

    - Use pgAdmin to create your database.
    - Execute the SQL commands in queries.sql to set up the necessary tables.
    - Import the data from data.for.sql.csv into the created tables.

## Usage
To run the application, use the following command:

  ```bash
  nodemon index.js
```
Once the server is running, navigate to http://localhost:3000 in your browser to access the MyMangaList application.

## Contributing

Contributions to enhance the functionality and performance of MyMangaList are welcome! Please fork the repository, create a feature branch, and submit a pull request with your changes.

## Acknowledgments

- [Express.js](https://expressjs.com) for the web framework.
  
- [Node.js](https://nodejs.org) for the server-side runtime.
  
- [EJS](https://ejs.co) for templating.
  
- [AJAX](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX) and [jQuery](https://jquery.com)  for asynchronous data fetching and DOM manipulation.
  
- [PostgreSQL](https://www.postgresql.org) for the database.
  
- [Mangadex API](https://mangadex.org/) for manga data.

