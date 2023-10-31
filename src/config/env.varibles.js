import dotenv from 'dotenv'
dotenv.config()
 export default class variables {
    static dbUrl1 = process.env.URL_FIRST
    static dbUrl2=process.env.URL_FINAL
    static dbPassword = process.env.DB_PASSWORD
    static dbUser = process.env.DB_USER
    static port = process.env.PORT_SERVER
    static dbName=process.env.DB_NAME
    static email=process.env.MAIL_ADDRESS
    static epassword=process.env.MAIL_PASSWORD

}