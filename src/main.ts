import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
  //Configuracion del prefijo a nivel servicio
  app.setGlobalPrefix('api');
  await app.listen(app.get('ConfigService').get('app.port'));
}
bootstrap();
