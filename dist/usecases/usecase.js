"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCase = void 0;
class UseCase {
    constructor(rideRepository) {
        this.rideRepository = rideRepository;
    }
    createCompany(name) {
        var _a;
        return (_a = this.rideRepository) === null || _a === void 0 ? void 0 : _a.createCompany(name);
    }
    addEmployees(params) {
        var _a;
        return (_a = this.rideRepository) === null || _a === void 0 ? void 0 : _a.addEmployees(params);
    }
    addWork(params) {
        var _a;
        return (_a = this.rideRepository) === null || _a === void 0 ? void 0 : _a.addWork(params);
    }
    addPayment(params) {
        var _a;
        return (_a = this.rideRepository) === null || _a === void 0 ? void 0 : _a.addPayment(params);
    }
    addBankAccount(params) {
        var _a;
        return (_a = this.rideRepository) === null || _a === void 0 ? void 0 : _a.addBankAccount(params);
    }
}
exports.UseCase = UseCase;
