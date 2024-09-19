"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCase = void 0;
class UseCase {
    constructor(companyRepository) {
        this.companyRepository = companyRepository;
    }
    update(companyId, payload) {
        return this.companyRepository.update(companyId, payload);
    }
    companies() {
        return this.companyRepository.companies();
    }
    show(id) {
        return this.companyRepository.showCompany(id);
    }
    createCompany(name) {
        var _a;
        return (_a = this.companyRepository) === null || _a === void 0 ? void 0 : _a.createCompany(name);
    }
    addEmployees(params) {
        var _a;
        return (_a = this.companyRepository) === null || _a === void 0 ? void 0 : _a.addEmployees(params);
    }
    addWork(params) {
        var _a;
        return (_a = this.companyRepository) === null || _a === void 0 ? void 0 : _a.addWork(params);
    }
    addPayment(params) {
        var _a;
        return (_a = this.companyRepository) === null || _a === void 0 ? void 0 : _a.addPayment(params);
    }
    addBankAccount(params) {
        var _a;
        return (_a = this.companyRepository) === null || _a === void 0 ? void 0 : _a.addBankAccount(params);
    }
}
exports.UseCase = UseCase;
