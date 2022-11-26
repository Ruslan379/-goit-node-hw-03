//? +++++++++++++++++++  mongoose +++++++++++++++++++
const { Contact } = require("../../models/contact.js");


//-----------------------------------------------------------------------------
const getAllContacts = async (req, res, next) => {
    const contacts = await Contact.find({});

    res.status(200).json({
        status: "success",
        code: 200,
        data: { contacts }
    });
};

module.exports = getAllContacts;
//? _____________________  mongoose _____________________





// const contactsOperations = require("../../models/contacts")


// //-----------------------------------------------------------------------------
// const getAllContacts = async (req, res, next) => {
//     const contacts = await contactsOperations.listContacts()

//     res.status(200).json({
//         status: "success",
//         code: 200,
//         data: { contacts }
//     })
// }

// module.exports = getAllContacts