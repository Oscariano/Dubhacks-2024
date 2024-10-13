"use strict";

const express = require("express");
const app = express();

const multer = require("multer");
const fs = require("fs").promises;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(multer().none());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.json("hello world");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);