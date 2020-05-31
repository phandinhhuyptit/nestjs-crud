import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module'
import { MongooseModule } from '@nestjs/mongoose';
import  config from './config/configuration'

@Module({
  imports: [ItemsModule,MongooseModule.forRoot(config.mongoURI)]
})
export class AppModule { }