//? +++++++++++++++++++  mongoose +++++++++++++++++++
const { string } = require("joi");
const { Schema, model } = require("mongoose");

const contactSchema = Schema({
    name: String,
    email: String,
    phone: String,
    favorite: Boolean
});

//? Создаём МОДЕЛЬ:
const Contact = model("contact", contactSchema);

module.exports = Contact;


//? _____________________  mongoose _____________________