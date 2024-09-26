import { Controller, Get, Post, Body, Res, Delete, Param } from '@nestjs/common';
import { MyFlightsService } from './my-flights.service';
import { Flights } from 'src/schemas/flights.schema';
import { Response } from 'express';
import { CreateFlightDto } from './dto/create-flight.dto';

@Controller('my-flights')
export class MyFlightsController {
  constructor(private readonly myFlightsService: MyFlightsService) {}

  @Post()
  async createFlight(@Body() flight: CreateFlightDto): Promise<Flights> {
    console.log('Received flight data:', flight);
    const createdFlight = await this.myFlightsService.create(flight);
    return createdFlight; 
  }

  @Get()
  async getAllFlights(): Promise<Flights[]> {
    return this.myFlightsService.findAll();
  }

  @Delete(':id')
  async deleteFlight(@Param('id') id: string): Promise<Flights> {
    console.log('Received request to delete flight with ID:', id);
    const deletedFlight = await this.myFlightsService.delete(id);
    return deletedFlight;
  }
}
