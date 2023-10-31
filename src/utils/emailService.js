import nodemailer from 'nodemailer'
import Mailgen from "mailgen"
import variables from "../config/env.varibles.js"

export default class Email {
     inactivityEmail = (userEmail)=>{
        let config = {
            service:`gmail`,
            auth : {
                user : variables.email,
                pass : variables.epassword
            }
        }
        let transporter = nodemailer.createTransport(config)
        let mailgenerator = new Mailgen({
            theme: "default",
            product: {
                name: "Mailgen",
                link: "https://mailgen.js.org"
            }
        })

        let content = {
            body: {
                intro : `your account has been deleted for inactivity`,
                
            }
        }

        let mail = mailgenerator.generate(content)

        let message = {
            from: variables.email,
            to: userEmail,
            subject: "Atention from e-commerce",
            html: mail
        }

        transporter.sendMail(message)
        .then(() => console.log("success"))
        .catch(err => console.log(err))
        

    }

    premiumProductnotification = (productName , userEmail)=>{

        let config = {
            service:`gmail`,
            auth : {
                user : variables.email,
                pass : variables.epassword
            }
        }
        let transporter = nodemailer.createTransport(config)
        let mailgenerator = new Mailgen({
            theme: "default",
            product: {
                name: "Mailgen",
                link: "https://mailgen.js.org"
            }
        })

        let content = {
            body: {
                intro : `Your Product ${productName} has been eliminated from Admin`,
            }
        }

        let mail = mailgenerator.generate(content)

        let message = {
            from: variables.email,
            to: userEmail,
            subject: "Atention from e-commerce",
            html: mail
        }
        

        transporter.sendMail(message)
        .then(() => console.log("success"))
        .catch(err => console.log(err))
        
    }
}