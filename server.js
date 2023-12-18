const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");

const offline_connection_string = "mongodb+srv://rNe96TTcpnd1ZETq:rNe96TTcpnd1ZETq@mtgms.fzzvwcs.mongodb.net/";
const port = 3000;
const database_name = "MTGMS";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(express.json());
app.use(cors());

const Bookings = require(__dirname + "/models/Bookings");

mongoose.connect(offline_connection_string + database_name, {})
    .then(() => {
        console.log("Database connected...");
    })
    .catch((err) => {
        console.error("Error connecting to the database:", err);
    });

app.get("/index.html", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/booking.html", function (req, res) {
    res.sendFile(__dirname + "/booking.html");
});

app.get("/contact.html", function (req, res) {
    res.sendFile(__dirname + "/contact.html");
});

app.get("/destination.html", function (req, res) {
    res.sendFile(__dirname + "/destination.html");
});

app.get("/team.html", function (req, res) {
    res.sendFile(__dirname + "/team.html");
});

app.get("/testimonial.html", function (req, res) {
    res.sendFile(__dirname + "/testimonial.html");
});

app.get("/service.html", function (req, res) {
    res.sendFile(__dirname + "/service.html");
});

app.get("/about.html", function (req, res) {
    res.sendFile(__dirname + "/about.html");
});

app.get("/404.html", function (req, res) {
    res.sendFile(__dirname + "/404.html");
});

app.get("/package.html", function (req, res) {
    res.sendFile(__dirname + "/package.html");
});

// Insert Data to `tbl_bookings`
app.post("/insert_booking", async (req, res) => {
    const booking_name = req.body.booking_name;
    const booking_email = req.body.booking_email;
    const booking_date_time = req.body.booking_date_time;
    const booking_destination = req.body.booking_destination;
    const booking_message = req.body.booking_message;

    const Booking = new Bookings({
        name: booking_name,
        email: booking_email,
        date_time: booking_date_time,
        destination: booking_destination,
        Accomodation: booking_message,
    });

    try {
        await Booking.save();

        res.redirect("/booking.html?booking_success=true");
    }
    catch (err) {
        console.log(err);
    }
});

app.listen(port, () => {
    console.log("Server is running on port " + port + "...");
});