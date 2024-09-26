"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightSchema = exports.Flights = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const class_validator_1 = require("class-validator");
let Flights = class Flights {
};
exports.Flights = Flights;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: false }),
    __metadata("design:type", String)
], Flights.prototype, "departureTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: false }),
    __metadata("design:type", String)
], Flights.prototype, "arrivalTime", void 0);
__decorate([
    (0, class_validator_1.Matches)(/^\d{1,2}:\d{2}$/, { message: 'flightTime must be in HH:mm format' }),
    (0, mongoose_1.Prop)({ description: 'Flight duration in HH:mm format', required: false }),
    __metadata("design:type", String)
], Flights.prototype, "flightTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Flights.prototype, "departureAirport", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Flights.prototype, "arrivalAirport", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Flights.prototype, "flightCode", void 0);
exports.Flights = Flights = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Flights);
exports.FlightSchema = mongoose_1.SchemaFactory.createForClass(Flights);
//# sourceMappingURL=flights.schema.js.map