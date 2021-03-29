import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SsoModule } from './sso/sso.module';
import configuration from './common/configuration/configuration';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true,
    load: [configuration]
  }), SsoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
