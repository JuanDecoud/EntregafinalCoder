import shipModel from './models/ship.js'

export default  class ShipDao {
    getAll = async ()=> {
        try {
            let result = await shipModel.find().lean()
            return result ;
        } catch (error) {
            console.log(error)
            return null
        }
    }
    getById = async (id)=> {
       try {
        let result = await shipModel.findById(id).lean()
        return result

       } catch (error) {
            console.log(error)
            return null
       }
    }
    create = async (data)=> {
        try {
            let result = await shipModel.create(data)
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }
    update = async (id,data) => {
        try {
            let result = await shipModel.findByIdAndUpdate(id,data,{returnDocument :'after'})
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }
    delete = async (id) => {
        try {
            let result = await shipModel.findByIdAndDelete(id)
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }
}