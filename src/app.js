import messengerModel from './dao/models/messenger.model.js'
import initializePassport from "./config/passport.config.js";
import api from './config/app.config.js';
import mongooseConnect from './config/mongodb.config.js';

initializePassport()
api.initializeAPP()
mongooseConnect()

const io = api.app.get('socketio')

io.on('connection' , (socket)=>{
    console.log("New Client Connected")
    socket.on ('productList' , async result =>{
        io.emit('updateProducts' , result)
    })
    socket.on ('messages',async data=>{
        await messengerModel.create({userMail :data.userMail , messege : data.messege})
        io.emit('updateMessages' , await messengerModel.find().lean())
    }) 
})


