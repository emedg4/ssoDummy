import { Module } from '@nestjs/common';
import { SsoService } from './sso.service';
import { SsoController } from './sso.controller';

@Module({
  providers: [SsoService],
  controllers: [SsoController]
})
export class SsoModule {}
