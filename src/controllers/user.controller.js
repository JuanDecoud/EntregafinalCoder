import services from "../services/index.js"
import UserDTO from "../dto/user.dto.js"
import AccountType from '../config/accountStatus.js'


export default class UserController {

    showHomebyCategory = async (req,res)=>{
        let userID = req.session.passport.user 
        try {
            let user = await services.userService.getById(userID)
            if (user.category == AccountType.admin) {res.render('adminViews/homeAdmin')}
            else if (user.category === AccountType.comercial) {res.render('homeComercial' )}
            else {res.render('homeCliente')}
        } catch (error) {
            res.status(404).json({message: error.message})
        }
    }

    showaddOrderform = async (req,res)=>{
        let userID = req.session.passport.user 
        try {
            let user = await services.userService.getById(userID)
           
            if (user.category == AccountType.admin) {
                user.isadmin =true
                res.render('ingresarPedido' , {user})
            }
            else if (user.category === AccountType.comercial) {
            }
            else {
                user.isclient=true
                res.render('ingresarPedido',{user})
            }
        } catch (error) {
            res.status(404).json({message: error.message})
        }

    }


    updateCategory = async (req,res)=>{
        try {
            
            let data = {
                category : req.body.category
            }
            let id = req.body.userid
            await services.userService.update(id, data)
            res.redirect(`/views/userManager`)

        } catch (error) {
            console.log(error)
            res.status(404).json({error : 'error'})
        }
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

   showInactiveUsers = async (req,res)=>{
        try {
            let result = await services.userService.fyndInactiveUsers()
            res.render(`inactiveUsers` , {result})
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