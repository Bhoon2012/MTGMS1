const mongoose = require('mongoose');

// Table Schema for `tbl_bookings`
const tbl_bookings_schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date_time: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    Accomodation: {
        type: String,
        required: true
    },
});

const Bookings = mongoose.model("tbl_bookings", tbl_bookings_schema);

module.exports = Bookings;