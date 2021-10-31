const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "This is starting point for app" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server has started on ${PORT}`);
});