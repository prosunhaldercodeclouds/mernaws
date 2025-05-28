const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./Config/db.js");
const AuthRoutes = require("./Routes/AuthRoutes.js")
const cors = require("cors");

const app = express();
dotenv.config();

connectDB();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("Public"));


app.use("/auth", AuthRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(process.env.APP_PORT, () => {
    console.log("Server is running on port " + process.env.APP_PORT);
});