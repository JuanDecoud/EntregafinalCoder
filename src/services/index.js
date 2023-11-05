
import UserDao from "../dao/user.mongo.dao.js"
import UserRepository from "../repositories/user.repository.js";

import AgencyDao from "../dao/company.mongo.dao.js";
import AgencyRepository from "../repositories/agency.repository.js";

import ContactDao from "../dao/contact.mongo.dao.js";
import ConctacRepository from "../repositories/contact.repository.js";

import ShipDao from "../dao/ship.mong.dao.js";
import ShipRepository from "../repositories/ship.repository.js"

import CompanyDao from "../dao/company.mongo.dao.js";
import CompanyRepository from "../repositories/company.repository.js"


let userService =new UserRepository(new UserDao())
let agencyServices = new AgencyRepository(new AgencyDao())
let contactServices = new ConctacRepository(new ContactDao())
let shipServices = new ShipRepository(new ShipDao())
let companyDao = new CompanyRepository(new CompanyDao())

export default {  userService , agencyServices,contactServices,shipServices,companyDao } 

