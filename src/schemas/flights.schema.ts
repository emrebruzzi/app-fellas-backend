import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsIn, Matches } from "class-validator";

@Schema({ timestamps: true })
export class Flights {
    @Prop({ type: String, required:false  })
    public departureTime?: string;

    @Prop({ type: String, required:false  })
    public arrivalTime?: string;
    
    @Matches(/^\d{1,2}:\d{2}$/, { message: 'flightTime must be in HH:mm format' })
    @Prop({ description: 'Flight duration in HH:mm format', required: false })
    public flightTime?: string;

    @Prop({ required: false })
    public departureAirport?: string;

    @Prop({ required: false })
    public arrivalAirport?: string;

    @Prop({ required: false })
    public flightCode?: string;
}

export const FlightSchema = SchemaFactory.createForClass(Flights);
