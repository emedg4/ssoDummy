import { Injectable } from '@nestjs/common';

@Injectable()
export class SsoService {

    public async getUser():Promise<Object>{
       const user:Object = {
            "meta": {
                "status": "SUCCESS",
                "count": 2
            },
            "data": {
                "token": "dqwdqw123534512312rthgrtyhjtryyu56",
                "user": {
                    "middleName": "",
                    "lastName": "Zazueta Treviño",
                    "userId": "53916085",
                    "employeeId": "12345678",
                    "coppelClientID": "0",
                    "firstName": "Josue Alejandro",
                    "WCToken": "45345hjmgh8i76846435frew",
                    "WCTrustedToken": "53916085%2CqhKu3zC82Yz46QuEFjqr6tOCbUM%3D",
                    "personalizationID": "1542322233838-8791"
                }
            }
        }
        return user;    
    }

    public async getError(): Promise<Object>{
        const error:Object = {
            "meta": {
                "status": "FAIL",
                "count": 0,
                "error": {
                    "errorCode": 400,
                    "userMessage": "Inicio de sesión inválido, verifique los datos..."
                }
            },
            "data": null
            } 
        return error;
    }

    public async validate():Promise<Object>{
        const validation: Object = {
            "meta":{
                "status":"SUCCESS",
                "count": Math.round(Math.random()*Math.floor(10)),
            },
            "data":{
                "appId": null,
                "email":"mail@enterprise.com",
                "user": 12345678,
                "userType":0,
                "deviceId":0,
                "pais":"Mex",
                "externo": false,
                "me": null
            }
        }
        return validation;
    }
    
    public async validationError(): Promise<Object>{
        const validationError: Object = {
            "meta":{
               "status": "FAIL",
               "count": 0,
               "error":{
                    "errorCode":401,
                    "userMessage": "Actualmente no tiene una sesion activa o su token es invalido"
               } 
            },
            "data":null
        }
        return validationError;
    }
    public async validationInvalid(): Promise<Object>{
        const validationError: Object = {
            "meta":{
               "status": "FAIL",
               "count": 0,
               "error":{
                    "errorCode":400,
                    "userMessage": "El token proporcionado es invalido"
               } 
            },
            "data":null
        }
        return validationError;
    }
}

