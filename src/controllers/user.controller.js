import services from "../services/index.js"
import UserDTO from "../dto/user.dto.js"


export default class UserController {


    updateCategory = async (req,res)=>{
        let data = req.body.category
        await services.userService.update()
    }

    userManager = async (req,res)=>{
        try {
            let result = await services.userService.getAll()
            res.render(`userManager` , {result})
        } catch (error) {
            console.log(error)
            res.status(404).json({error : 'error'})
        }
    }
    getCurrentUser = async (req,res)=>{
        try {
            let user = req.session.passport
            if (user){
                let result = await services.userService.getById(req.session.passport.user)
                let userDto = new UserDTO(result)
                if(result){
                    res.status(200).json ({
                        CurrentUser : {
                            userDto
                        }
                    })
                }
                else {res.status(404).json({error : 'No one user is online'})}
            } 
        } catch (error) {
            console.log(error)
            res.status(404).json({error : 'error'})
        }
    }

    getUsers = async (req,res)=>{
        try {
            let result = await services.userService.getAll()
            let userDto = new UserDTO(result)
            console.log (userDto)
            res.status(200).json(result)
        } catch (error) {
            console.log(error)
            res.status(404).json({error : 'error'})
        }
    }

    deleteInactiveUsers = async (req,res)=>{
        try {
            await services.userService.deleteforInactivity()
            res.status(200).json({message :'success'})
        } catch (error) {
            console.log(error)
            res.status(404).json({error : 'error'})
        }
    }

    deleteUser = async (req,res)=>{
        try {
            await services.userService.delete(req.params.uid)
            res.status(200).json({message :'success'})
        } catch (error) {
            console.log(error)
            res.status(404).json({error : 'error'})
        }
    }

}