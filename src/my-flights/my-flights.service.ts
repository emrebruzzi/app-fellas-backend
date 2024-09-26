import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Flights } from 'src/schemas/flights.schema';


@Injectable()
export class MyFlightsService {
  constructor(
    @InjectModel(Flights.name)
    private flightModel: Model<Flights>,
  ) {}

  async findAll(): Promise<Flights[]> {
    try {
      const flights = await this.flightModel.find();
      console.log('Flights retrieved successfully');
      return flights;
    } catch (error) {
      console.error('Error retrieving flights:', error);
      throw new Error('Error retrieving flights: ' + error.message);
    }
  }

  async create(flight: Flights): Promise<Flights> {
    try {
      const res = await this.flightModel.create(flight);
      console.log('Flight created successfully:', res);
      return res;
    } catch (error) {
      console.error('Error creating flight:', error);
      throw new Error('Error creating flight: ' + error.message);
    }
  }

  async delete(flightId: string): Promise<Flights> {
    try {
      const deletedFlight = await this.flightModel.findByIdAndDelete(flightId);
      if (!deletedFlight) {
        throw new Error('Flight not found');
      }
      console.log('Flight deleted successfully:', deletedFlight);
      return deletedFlight;
    } catch (error) {
      console.error('Error deleting flight:', error);
      throw new Error('Error deleting flight: ' + error.message);
    }
  }
}
