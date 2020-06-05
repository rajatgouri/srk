const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carrierSchema = new Schema({
    firstname: {
        type: String,
        trim: true,
    },
    lasttname: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    address1: {
        type: String,
        required: true,
        trim:true
    },
    business_name: {
        type: String,
        required: true,
        trim: true
    },
    phone1: {
        type: Number,
        required: true,
        trim: true
    },
    phone2: {
        type: Number,
        trim: true
    },
    address2: {
        type: String,
        trim: true
    }

});

module.exports = mongoose.model('Carrier', carrierSchema);