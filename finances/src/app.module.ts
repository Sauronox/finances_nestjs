import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    CompaniesModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        console.log(configService.get<string>('MONGODB_URI'))
        return ({
        uri: configService.get<string>('MONGODB_URI'),
        user: configService.get<string>('DB_FINANCE_USER'),
        pass: configService.get<string>('DB_FINANCE_PASSWORD'),
        auth: {authSource: "admin"}
      })},
      inject: [ConfigService],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}