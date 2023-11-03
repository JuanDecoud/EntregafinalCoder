import { Router } from 'express'
import { comprobateLoggueUser , comprobateAdmin, comprobateUser , validateforAddproducts} from '../middlewares/user.middleware.js'

import UserController from '../controllers/user.controller.js'


const viewRouter = Router ()

viewRouter.get ('/login' , (req,res)=>{res.render ('login')})
viewRouter.get ('/register' , (req,res)=>{res.render ('register')})
viewRouter.get ('/loginError', (req,res)=>{res.render ('errors/loginError')})

export default viewRouter