import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  const configService = app.get(ConfigService);
  console.log(configService.get('DB_HOST'));
  console.log(configService.get('DB_PORT'));
  console.log(configService.get('DB_AUTH_USER'));
  console.log(configService.get('DB_AUTH_PASSWORD'));
  console.log(configService.get('DB_AUTH_NAME'));
  await app.listen(3001);
}
bootstrap();
