import mongoose from 'mongoose'
import variables from '../config/env.varibles.js'

const mongooseConnect = async()=> {
    try {
        await mongoose.connect(`${variables.dbUrl1}${variables.dbUser}:${variables.dbPassword}${variables.dbUrl2}/${variables.dbName}`)
        console.log("Succes conected to db")
        
    } catch (error) {
        console.log ("Failed to connect")
    }
}

export default mongooseConnect 
