const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose");

const routes = require("./routes/api")

// set up express app
const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost/ninjago", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

app.use(bodyParser.json())

// initialize routes
app.use("/api", routes)

// listen for requests
app.listen(process.env.port || 4000, function () {
    console.log("-- Now listening for requests -------------------------");
});