import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, CompaniesModule,MongooseModule.forRoot('mongodb://localhost:27017')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
