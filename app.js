const express = require("express");
const app = express();
const path = require("path")

app.listen(2023, console.log("Server running on http://localhost:2023"))

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "src/views/index.html"))
})
app.get("/register", (req,res) => {
    res.sendFile(path.join(__dirname, "src/views/register.html"))
})
app.get("/login", (req,res) => {
    res.sendFile(path.join(__dirname, "src/views/login.html"))
})