const express = require("express")
const mongoose = require('mongoose')
const app = express();

const start = async () => {
    // conenction to mongodb
    try {
        await mongoose.connect("mongodb://localhost:27017", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('COnnected to mongodb')
    } catch (error) {
        console.log('Connection to mongodb failed', error)
    }
}

start()

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

//routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))
// server configurations
app.listen(3000, () => console.log("Server started Listening on port:3000"))