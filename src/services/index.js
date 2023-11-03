
import UserDao from "../dao/user.mongo.dao.js"
import UserRepository from "../repositories/user.repository.js";



let userService =new UserRepository(new UserDao())


export default {  userService  } 


