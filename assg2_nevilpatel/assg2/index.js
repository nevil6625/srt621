const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require('mongoose');
const bookController = require('./controllers/bookController');

const app = express();


mongoose.connect("mongodb+srv://nevilpatel:nevilpatel@srt621.sqcxn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useUnifiedTopology: true })
    .then(() => console.log('DB Connected'));
mongoose.connection.on('error', (err) => console.log(`DB connection error: ${err.message}`));


app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs',
}));

app.set('view engine', '.hbs');

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.redirect("/home");
});

app.get("/home", bookController.getBooks);

app.get("/books/:bookNumber", bookController.getBook);

app.get("/AddNewBook", bookController.addBookView);

app.post("/AddNewBook", bookController.addBook);

app.get("/DeleteABook", bookController.deleteBookView);

app.get("/DeleteABook/:bookNumber", bookController.deleteBook);

app.use((req, res) => {
    res.status(404).send("Page Not Found");
});

app.listen(process.env.PORT || 3000, function () {
    console.log("app listening on: " + 3000)
});