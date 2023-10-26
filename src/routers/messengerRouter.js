import { Router } from 'express';

import messengerModel from '../dao/models/messenger.model.js'
import { comprobateLoggueUser, comprobateUser } from '../middlewares/user.middleware.js';

const messengerRouter = Router()


messengerRouter.get ('/',comprobateLoggueUser,comprobateUser , async (req,res)=>{
    let messages = await messengerModel.find().lean()
    res.render ('messenger' , {messages})
})

export default messengerRouter