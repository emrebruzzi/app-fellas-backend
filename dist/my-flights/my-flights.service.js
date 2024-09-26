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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyFlightsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const flights_schema_1 = require("../schemas/flights.schema");
let MyFlightsService = class MyFlightsService {
    constructor(flightModel) {
        this.flightModel = flightModel;
    }
    async findAll() {
        try {
            const flights = await this.flightModel.find();
            console.log('Flights retrieved successfully');
            return flights;
        }
        catch (error) {
            console.error('Error retrieving flights:', error);
            throw new Error('Error retrieving flights: ' + error.message);
        }
    }
    async create(flight) {
        try {
            const res = await this.flightModel.create(flight);
            console.log('Flight created successfully:', res);
            return res;
        }
        catch (error) {
            console.error('Error creating flight:', error);
            throw new Error('Error creating flight: ' + error.message);
        }
    }
    async delete(flightId) {
        try {
            const deletedFlight = await this.flightModel.findByIdAndDelete(flightId);
            if (!deletedFlight) {
                throw new Error('Flight not found');
            }
            console.log('Flight deleted successfully:', deletedFlight);
            return deletedFlight;
        }
        catch (error) {
            console.error('Error deleting flight:', error);
            throw new Error('Error deleting flight: ' + error.message);
        }
    }
};
exports.MyFlightsService = MyFlightsService;
exports.MyFlightsService = MyFlightsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(flights_schema_1.Flights.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MyFlightsService);
//# sourceMappingURL=my-flights.service.js.map