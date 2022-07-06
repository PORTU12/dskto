import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './config.module';

@Module({
  imports: [ConfigurationModule.register({db_url: 'http://localhost:27017'})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
