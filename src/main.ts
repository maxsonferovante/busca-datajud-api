import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { loadEnvFile } from 'process';

loadEnvFile();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
  .addServer(
    'http://localhost:3000',
    'Desenvolvimento'
  )
  .addServer(
    process.env.PRODUCTION_URL,
    'Produção'
  )
  .setTitle('Datajud API - Busca Processos Judiciais')
  .setDescription('API para busca de processos judiciais, que utiliza a API Pública do CNJ para abstrair a busca de dados de processos judiciais de todas as Justiças (Estadual, Federal, Militar, Eleitoral, Trabalhista e Tribunais Superiores) do Brasil.')
  .setVersion('1.0')
  .setContact('Maxson Almeida', 'https://www.linkedin.com/in/maxson-almeida/', 'maxsonferovante@gmail.com')

  .setLicense('MIT', 'https://opensource.org/licenses/MIT')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
