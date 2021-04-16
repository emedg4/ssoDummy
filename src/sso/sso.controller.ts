import { Controller, MisdirectedException, Post, Get, Headers, Request } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SsoService } from './sso.service';

@Controller('sso')
export class SsoController {
    constructor (private readonly configService:ConfigService,
                 private readonly ssoService:SsoService){}

    @Post('login')
    async login(@Request()req) {
        if(req.body.logonId == "correcto" && req.body.password == "correcto"){
            const commonResponse: Object = await this.ssoService.getUser();
            console.log(commonResponse)
            return commonResponse;
        }
        else{
            const commonError:Object = await this.ssoService.getError();
            console.log(commonError)
            return commonError;
        }
    }
    @Get('validate')
    async validate(@Headers()Headers) {
        if(Headers.authorization == 'dqwdqw123534512312rthgrtyhjtryyu56'){
            const response: Object = this.ssoService.validate();
            console.log(response)

            return response;
        }
        if(Headers.authorization !== 'dqwdqw123534512312rthgrtyhjtryyu56' && Headers.authorization !== ''){
            const response: Object = this.ssoService.validationInvalid();
            console.log(response)

            return response;
        }
        if(Headers.authorization === ''){
            const response: Object = this.ssoService.validationError();
            console.log(response)

            return response;
        }

    }
}



