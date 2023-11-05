import mongoose from 'mongoose'
import variables from '../config/env.varibles.js'

const mongooseConnect = async()=> {
    try {
        await mongoose.connect(`mongodb+srv://zonapedidos:Juanjo2031@zonacomun.f6snu.mongodb.net/zonacomun`)
        console.log("Succes conected to db")
        
    } catch (error) {
        console.log ("Failed to connect")
    }
}

export default mongooseConnect 
