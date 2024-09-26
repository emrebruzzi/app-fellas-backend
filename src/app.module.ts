import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MyFlightsModule } from './my-flights/my-flights.module';
import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal:true,
      
      
    }),
    
    MongooseModule.forRoot(process.env.DB_URL),
    MyFlightsModule,
  ],
})
export class AppModule {}
