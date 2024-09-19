"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCase = void 0;
class UseCase {
    constructor(companyRepository) {
        this.companyRepository = companyRepository;
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
    updateCompany(companyId, name) {
        var _a;
        return (_a = this.companyRepository) === null || _a === void 0 ? void 0 : _a.updateCompany(companyId, name);
    }
    updateEmployee(params) {
        var _a;
        return (_a = this.companyRepository) === null || _a === void 0 ? void 0 : _a.updateEmployee(params);
    }
    updateWork(params) {
        var _a;
        return (_a = this.companyRepository) === null || _a === void 0 ? void 0 : _a.updateWork(params);
    }
    updatePayment(params) {
        var _a;
        return (_a = this.companyRepository) === null || _a === void 0 ? void 0 : _a.updatePayment(params);
    }
}
exports.UseCase = UseCase;
