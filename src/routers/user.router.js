import {Router} from 'express'
import passport from 'passport'
import UserController from '../controllers/user.controller.js'
import { comprobateAdmin, comprobateLoggueUser, comprobateUser } from '../middlewares/user.middleware.js'

const userController = new UserController()
const user = Router ()

user.post('/login', passport.authenticate('login', { failureRedirect: '/views/loginError'}), userController.showHomebyCategory)
user.post ('/register', passport.authenticate('register' ,{failureRedirect :'/views/register' , failureMessage: true}),async (req,res)=> {res.redirect('/views/login')})

user.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) res.status(400).json({message : 'error'})
        return  res.redirect('/views/login')
    })
})

user.delete ('/'   ,userController.deleteInactiveUsers) 
user.delete (`/:uid` , userController.deleteUser )
user.put(`/` , userController.updateCategory)

export default user