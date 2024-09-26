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
exports.MyFlightsController = void 0;
const common_1 = require("@nestjs/common");
const my_flights_service_1 = require("./my-flights.service");
const create_flight_dto_1 = require("./dto/create-flight.dto");
let MyFlightsController = class MyFlightsController {
    constructor(myFlightsService) {
        this.myFlightsService = myFlightsService;
    }
    async createFlight(flight) {
        console.log('Received flight data:', flight);
        const createdFlight = await this.myFlightsService.create(flight);
        return createdFlight;
    }
    async getAllFlights() {
        return this.myFlightsService.findAll();
    }
    async deleteFlight(id) {
        console.log('Received request to delete flight with ID:', id);
        const deletedFlight = await this.myFlightsService.delete(id);
        return deletedFlight;
    }
};
exports.MyFlightsController = MyFlightsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_flight_dto_1.CreateFlightDto]),
    __metadata("design:returntype", Promise)
], MyFlightsController.prototype, "createFlight", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MyFlightsController.prototype, "getAllFlights", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MyFlightsController.prototype, "deleteFlight", null);
exports.MyFlightsController = MyFlightsController = __decorate([
    (0, common_1.Controller)('my-flights'),
    __metadata("design:paramtypes", [my_flights_service_1.MyFlightsService])
], MyFlightsController);
//# sourceMappingURL=my-flights.controller.js.map