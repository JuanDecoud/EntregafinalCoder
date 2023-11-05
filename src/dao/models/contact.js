import mongoose from 'mongoose';

const contactCollection = "contact"


const contactSchema = new mongoose.Schema({
    name : "String",
    lastName : "String",
    cel : "String",

})


const contactModel = mongoose.model(contactCollection,contactSchema)

export default contactModel