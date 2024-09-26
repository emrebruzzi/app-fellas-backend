import { Module } from '@nestjs/common';
import { MyFlightsService } from './my-flights.service';
import { MyFlightsController } from './my-flights.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FlightSchema } from 'src/schemas/flights.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: 'Flights', schema:FlightSchema}])],
  controllers: [MyFlightsController],
  providers: [MyFlightsService],
})
export class MyFlightsModule {}
