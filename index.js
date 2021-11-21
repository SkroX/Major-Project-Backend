const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require('cors');

const serviceAccount = require("./config/fbServiceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://fbauthdemo-2a451.firebaseio.com"
});

const app = express();

//Body Parsing
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Basic Route
app.get("/", (req, res) => {
    res.json({ message: "This is starting point for app" });
});

//routes
// require('./routes/auth.routes')(app);

//Set port and serve app: Backend Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server has started on ${PORT}`);
});