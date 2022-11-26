//? +++++++++++++++++++  mongoose +++++++++++++++++++
const { string } = require("joi");
const { Schema, model } = require("mongoose");

// const contactSchema = Schema({
//     name: String,
//     email: String,
//     phone: String,
//     favorite: Boolean,
// });

const contactSchema = Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
});

//? Создаём МОДЕЛЬ:
const Contact = model("contact", contactSchema);

module.exports = Contact;


//? _____________________  mongoose _____________________