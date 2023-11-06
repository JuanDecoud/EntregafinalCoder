import mongoose from 'mongoose';

let agencyCollection = "agency"

const agencySchema = new mongoose.Schema({
    name : String ,
    cuit : String ,
    email : String,
    contacts : {
        type : [
            {
                contact : {
                    _id : false ,
                    idContact : mongoose.Schema.Types.ObjectId
                }

            }

        ],
        default : []
    }

})

const agencyModel =  mongoose.model(agencyCollection, agencySchema)

export default agencyModel ;