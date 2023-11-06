import services from '../services/index.js'


export default class ContactController {
    addContact = async (req,res)=>{
        let data = req.body
        try {
            await services.contactServices.create(data)
            res.status(200).json ({status : 'success' , message : "Contact created successfully"})
            
        } catch (error) {
            res.status(500).json({status : 'error'})
        }
    }

    showcontactForm = async (req,res)=>{
        res.render('adminViews/altadecontacto')
    }
}