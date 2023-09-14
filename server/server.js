//this file is the main entry point to the app

//load environment variables. SERVICES LIKE HEROKU OR DETA STREAM MIGHT HAVE THEIR OWN WAY TO LOAD VAIRABLES. That's why we need the if statement
if (process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

//importing dependencies
const express = require("express");
const cors = require("cors");
const connectToDb = require("./config/connectToDb");
const cookieParser = require("cookie-parser");
const notesController = require("./controllers/notesController");
const usersController = require("./controllers/usersController");
const requireAuth = require("./middleware/requireAuth");

//create express app
const app = express();

//COnfigure express app
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: true,
        credentials: true,
    })
);

//connect to our databse (in the config folder)
connectToDb();

//routing
app.post("/signup", usersController.signup);
app.post("/login", usersController.login);
app.get("/logout", usersController.logout);
app.get('/notes', requireAuth, notesController.fetchNotes);
app.get("/check-auth", requireAuth, usersController.checkAuth);

app.get('/notes/:id', requireAuth, notesController.fetchNote);

app.post("/notes", requireAuth, notesController.createNote);

app.put('/notes/:id', requireAuth, notesController.updateNote);

app.delete("/notes/:id", requireAuth, notesController.deleteNote);

//start server
app.listen(process.env.PORT);