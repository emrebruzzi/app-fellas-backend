import { Model } from 'mongoose';
import { Flights } from 'src/schemas/flights.schema';
export declare class MyFlightsService {
    private flightModel;
    constructor(flightModel: Model<Flights>);
    findAll(): Promise<Flights[]>;
    create(flight: Flights): Promise<Flights>;
    delete(flightId: string): Promise<Flights>;
}
