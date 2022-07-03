"use strict";

const express = require("express");
const PORT = process.env.PORT || 8080;
const app = new express();

app.get("/", (req, res) => {
    res.status(200).send("i'm working!!!");
});

app.listen(PORT, () => {
    console.log(`server is working on ${PORT}`);
});