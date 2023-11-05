import mongoose from 'mongoose';

const shipCollection = "ship"

const shipSchema = new mongoose.Schema({
    name : String,
    tuition : String,
    maritimeAgency : mongoose.Schema.Types.ObjectId,

})

const shipModel = mongoose.model(shipCollection,shipSchema)
export default shipModel ;