const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninja");

// Get a list of ninjas from the db
router.get("/ninjas", function (req, res) {
    res.send({ type: "GET" })
});

// Create a new ninja to the db
router.post("/ninjas", function (req, res) {
    var ninja = new Ninja(req.body);
    ninja.save().then(function () {
        // Send request back 
        res.send(ninja);
    });

});

// Update a ninja in the db
router.put("/ninjas/:id", function (req, res) {
    res.send({ type: "PUT" })
});

// Delete a ninja in the db
router.delete("/ninjas/:id", function (req, res) {
    res.send({ type: "DELETE" })
});

module.exports = router