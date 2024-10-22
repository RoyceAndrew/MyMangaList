import express from "express";
import pg from "pg";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const db = new pg.Pool({
    user: "postgres",
    password: "raja321darah",
    port: 5433,
    host: "localhost",
    database: "MyMangaList"
})

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

let nav = "ASC"

app.get("/", async (req, res) => {
    const imgurl = "https://uploads.mangadex.org/covers/"
    const result = await db.query("SELECT * FROM manga ORDER BY rank " + nav)
    const manga = result.rows
    res.render("manga.ejs", {manga: manga, img: imgurl})
})

app.get("/about", (req, res) => {
    res.render("about.ejs")
})

app.post("/reverse", async (req, res) => {
    if (nav == "ASC") {
    nav = "DESC"
    } else {
        nav = "ASC"
    }
    
    const page = req.body.page;
    if (page == 'manga') {
        res.redirect("/")
    } else if (page === "search") {
        const searchQuery = req.body.searchQuery;
        res.redirect(`/search?search=${encodeURIComponent(searchQuery)}`);
    }
    
})

app.get("/search", async (req, res) => {
    try {
        const imgurl = "https://uploads.mangadex.org/covers/";
        const input = req.query.search;
        const result = await db.query("SELECT * FROM manga WHERE LOWER(title) LIKE '%' || $1 || '%' ORDER BY rank " + nav, [input.toLowerCase()]);
        const search = result.rows;
        if (req.xhr) {
            res.json(search);
        } else {
            res.render("search.ejs", { search: search, img: imgurl, searchQuery: input });
        }
    } catch(err) {
        console.log(err);
        res.status(500).send('Error during search');
    }
})

app.post("/review", async (req, res) => {
    const imgurl = "https://uploads.mangadex.org/covers/"
    const rank = req.body.rank
    const result = await db.query(`SELECT * FROM manga WHERE rank = ${rank}`)
    const review = result.rows[0]
    res.render("review.ejs", {review: review, img: imgurl});
})

app.listen(port, (req, res) => {
    console.log(`You listened on port ${port}`)
})