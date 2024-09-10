"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
class Repository {
    constructor(CompanyModel) {
        this.CompanyModel = CompanyModel;
    }
    // Create a new company
    createCompany(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newCompany = new this.CompanyModel({ name });
                return yield newCompany.save();
            }
            catch (error) {
                throw new Error(`Error creating company: ${error}`);
            }
        });
    }
    // Add an employee to a specific company
    addEmployees(params) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield this.CompanyModel.findById(params === null || params === void 0 ? void 0 : params.companyId);
                if (!company)
                    throw new Error("Company not found");
                const newEmployee = {
                    id: "",
                    name: params === null || params === void 0 ? void 0 : params.employeeName,
                    phone: params === null || params === void 0 ? void 0 : params.phone,
                    work: [],
                    accountDetails: {
                        accountNumber: "",
                        date: new Date(),
                        amount: 0,
                        ifsc: "",
                        proof: "",
                        createdAt: new Date(),
                    },
                    createdAt: new Date(),
                };
                (_a = company === null || company === void 0 ? void 0 : company.employees) === null || _a === void 0 ? void 0 : _a.push(newEmployee);
                return yield company.save();
            }
            catch (error) {
                throw new Error(`Error adding employee: ${error}`);
            }
        });
    }
    // Add work details for an employee in a company
    addWork(params) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield this.CompanyModel.findById(params === null || params === void 0 ? void 0 : params.companyId);
                if (!company)
                    throw new Error("Company not found");
                const employee = (_a = company === null || company === void 0 ? void 0 : company.employees) === null || _a === void 0 ? void 0 : _a.find((emp) => emp.id === (params === null || params === void 0 ? void 0 : params.employeeId));
                if (!employee)
                    throw new Error("Employee not found");
                employee.work.push(Object.assign(Object.assign({}, params), { createdAt: new Date() }));
                return yield company.save();
            }
            catch (error) {
                throw new Error(`Error adding work: ${error}`);
            }
        });
    }
    // Add payment details for an employee
    addPayment(params) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield this.CompanyModel.findById(params === null || params === void 0 ? void 0 : params.companyId);
                if (!company)
                    throw new Error("Company not found");
                const employee = (_a = company === null || company === void 0 ? void 0 : company.employees) === null || _a === void 0 ? void 0 : _a.find((emp) => emp.id === (params === null || params === void 0 ? void 0 : params.employeeId));
                if (!employee)
                    throw new Error("Employee not found");
                // Assuming payment details are added to work or account
                // You can modify this based on your actual data model.
                // For example, you can attach proof and amount to accountDetails or work details.
                // Example (if attaching to work):
                employee.accountDetails.date = params === null || params === void 0 ? void 0 : params.date;
                employee.accountDetails.amount = params === null || params === void 0 ? void 0 : params.amount;
                employee.accountDetails.proof = params === null || params === void 0 ? void 0 : params.proof;
                return yield company.save();
            }
            catch (error) {
                throw new Error(`Error adding payment: ${error}`);
            }
        });
    }
    // Add bank account details for an employee
    addBankAccount(params) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield this.CompanyModel.findById(params === null || params === void 0 ? void 0 : params.companyId);
                if (!company)
                    throw new Error("Company not found");
                const employee = (_a = company === null || company === void 0 ? void 0 : company.employees) === null || _a === void 0 ? void 0 : _a.find((emp) => emp.id === (params === null || params === void 0 ? void 0 : params.employeeId));
                if (!employee)
                    throw new Error("Employee not found");
                employee.accountDetails.accountNumber = params.accountNumber;
                employee.accountDetails.ifsc = params.ifsc;
                employee.accountDetails.date = new Date(); // Add the date when the account was added
                return yield company.save();
            }
            catch (error) {
                throw new Error(`Error adding bank account: ${error}`);
            }
        });
    }
}
exports.Repository = Repository;
