export declare class Flights {
    departureTime?: string;
    arrivalTime?: string;
    flightTime?: string;
    departureAirport?: string;
    arrivalAirport?: string;
    flightCode?: string;
}
export declare const FlightSchema: import("mongoose").Schema<Flights, import("mongoose").Model<Flights, any, any, any, import("mongoose").Document<unknown, any, Flights> & Flights & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Flights, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Flights>> & import("mongoose").FlatRecord<Flights> & {
    _id: import("mongoose").Types.ObjectId;
}>;
