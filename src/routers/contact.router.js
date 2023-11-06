import { Router } from 'express'
import { comprobateAdmin, comprobateLoggueUser } from '../middlewares/user.middleware.js'
import ContactController from '../controllers/contactController.js'
let contactController = new ContactController()

const contactRouter = Router ()

contactRouter.post('/' , comprobateLoggueUser,comprobateAdmin, contactController.addContact)


export default contactRouter