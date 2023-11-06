
import UserDao from "../dao/user.mongo.dao.js"
import UserRepository from "../repositories/user.repository.js";



import ContactDao from "../dao/contact.mongo.dao.js";
import ConctacRepository from "../repositories/contact.repository.js";

import ShipDao from "../dao/ship.mong.dao.js";
import ShipRepository from "../repositories/ship.repository.js"

import AgencyRepository from "../repositories/agency.repository.js"
import AgencyDao from "../dao/agency.mongo.dao.js";



let userService =new UserRepository(new UserDao())
let contactServices = new ConctacRepository(new ContactDao())
let shipServices = new ShipRepository(new ShipDao())
let  agencyService = new AgencyRepository(new AgencyDao())


export default {  userService ,contactServices,shipServices , agencyService } 

