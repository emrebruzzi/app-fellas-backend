import { MyFlightsService } from './my-flights.service';
import { Flights } from 'src/schemas/flights.schema';
import { CreateFlightDto } from './dto/create-flight.dto';
export declare class MyFlightsController {
    private readonly myFlightsService;
    constructor(myFlightsService: MyFlightsService);
    createFlight(flight: CreateFlightDto): Promise<Flights>;
    getAllFlights(): Promise<Flights[]>;
    deleteFlight(id: string): Promise<Flights>;
}
