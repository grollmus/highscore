import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { GlobalExceptionFilter } from 'filter/global-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    origin: '*',
    allowedHeaders: '*',
  });
  await app.listen(3000);
}
bootstrap();
