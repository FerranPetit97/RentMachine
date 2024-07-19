import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import ApiRouter from './api.router';

async function bootstrap() {
  // para producción esto del cors debe estar en false
  const app = await NestFactory.create(AppModule, { cors: true });
  // app.use('/', ApiRouter);
  await app.listen(3000);
}
bootstrap();
