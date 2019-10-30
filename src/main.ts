import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Grollmus')
    .setVersion('1.0')
    .addTag('player')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    origin: '*',
    allowedHeaders: '*',
  });
  await app.listen(3000);
}
bootstrap();
