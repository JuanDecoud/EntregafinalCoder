import services from '../services/index.js'

export default class AgencyController  {
    showAgencyForm = (req,res)=>{
        res.render ('adminViews/altaagencia')
    }

    addAgency = async (req,res)=>{
        let data = req.body
        try {
           await services.agencyService.create(data)
           res.status(200).json({message: 'success' , data :data})

        } catch (error) {
            res.status(404).json({message: "Error agregando Agencia"})
        }
    }
}