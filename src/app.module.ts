import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import {UserEntity} from "./user/entites/user.entity";


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',//process.env.DB_HOST,
      port: 3306, //parseInt(process.env.DB_PORT),
      username: 'root', //process.env.DB_USERNAME,
      password: '',// process.env.DB_PASSWORD,
      database: 'ranim',//process.env.DB_NAME,
      autoLoadEntities: true,
      entities: [UserEntity],
      synchronize: true,
      debug: false
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService]
})
export class AppModule {
}
