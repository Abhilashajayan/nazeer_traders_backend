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
    showAllEmployees(companyId) {
        var _a;
        return (_a = this.companyRepository) === null || _a === void 0 ? void 0 : _a.showAllEmployees(companyId);
    }
    addWork(params) {
        var _a;
        return (_a = this.companyRepository) === null || _a === void 0 ? void 0 : _a.addWork(params);
    }
    showWorks(employeeId) {
        var _a;
        return (_a = this.companyRepository) === null || _a === void 0 ? void 0 : _a.showWorks(employeeId);
    }
    addPayment(params) {
        var _a;
        return (_a = this.companyRepository) === null || _a === void 0 ? void 0 : _a.addPayment(params);
    }
    showPayments(employeeId) {
        var _a;
        return (_a = this.companyRepository) === null || _a === void 0 ? void 0 : _a.showPayments(employeeId);
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
    deleteCompany(companyId) {
        var _a;
        return (_a = this.companyRepository) === null || _a === void 0 ? void 0 : _a.deleteCompany(companyId);
    }
    deleteEmployee(employeeId) {
        var _a;
        return (_a = this.companyRepository) === null || _a === void 0 ? void 0 : _a.deleteEmployee(employeeId);
    }
    deleteWork(workId) {
        var _a;
        return (_a = this.companyRepository) === null || _a === void 0 ? void 0 : _a.deleteWork(workId);
    }
    deletePayment(paymentId) {
        var _a;
        return (_a = this.companyRepository) === null || _a === void 0 ? void 0 : _a.deletePayment(paymentId);
    }
}
exports.UseCase = UseCase;
