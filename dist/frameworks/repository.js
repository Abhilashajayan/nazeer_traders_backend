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
    constructor(CompanyModel, EmployeeModel, WorkModel, PaymentModel, AccountModel) {
        this.CompanyModel = CompanyModel;
        this.EmployeeModel = EmployeeModel;
        this.WorkModel = WorkModel;
        this.PaymentModel = PaymentModel;
        this.AccountModel = AccountModel;
    }
    companies() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const companies = yield this.CompanyModel.find();
                return companies;
            }
            catch (error) {
                throw new Error(`Error fetching companies: ${error}`);
            }
        });
    }
    showCompany(companyId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield this.CompanyModel.findById(companyId);
                if (!company) {
                    throw new Error(`Company not found`);
                }
                return company;
            }
            catch (error) {
                throw new Error(`Error fetching company: ${error}`);
            }
        });
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
    // Update a company by ID
    updateCompany(companyId, name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield this.CompanyModel.findByIdAndUpdate(companyId, { name }, { new: true });
                if (!company)
                    throw new Error("Company not found");
                return company;
            }
            catch (error) {
                throw new Error(`Error updating company: ${error}`);
            }
        });
    }
    showEmployee(employeeId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employee = yield this.EmployeeModel.findById(employeeId);
                if (!employee) {
                    throw new Error(`Employee not found`);
                }
                return employee;
            }
            catch (error) {
                throw new Error(`Error fetching employee: ${error}`);
            }
        });
    }
    // Add an employee to a company
    addEmployees(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newEmployee = new this.EmployeeModel(params);
                return yield newEmployee.save();
            }
            catch (error) {
                throw new Error(`Error adding employee: ${error}`);
            }
        });
    }
    // Update an employee by ID
    updateEmployee(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updateEmployeeParams = {
                    name: params.name,
                    phone: params.phone,
                };
                const employee = yield this.EmployeeModel.findByIdAndUpdate(params.employeeId, updateEmployeeParams, { new: true }).exec();
                return employee;
            }
            catch (error) {
                throw new Error(`Error updating employee: ${error}`);
            }
        });
    }
    showAllEmployees(companyId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("company id ", companyId);
                const allEmp = yield this.EmployeeModel.find({ companyId: companyId });
                console.log("all employees", allEmp);
                return allEmp;
            }
            catch (error) {
                throw new Error(`Error showing employees: ${error}`);
            }
        });
    }
    // Add work for an employee
    addWork(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const work = new this.WorkModel(params);
                return yield work.save();
            }
            catch (error) {
                throw new Error(`Error adding work: ${error}`);
            }
        });
    }
    showWorks(employeeId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allWorks = yield this.WorkModel.find({ employeeId: employeeId });
                return allWorks;
            }
            catch (error) {
                throw new Error(`Error showing work: ${error}`);
            }
        });
    }
    updateWork(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatePayload = {
                    date: params === null || params === void 0 ? void 0 : params.date,
                    count: params === null || params === void 0 ? void 0 : params.count,
                    rate: params === null || params === void 0 ? void 0 : params.rate,
                    total: params === null || params === void 0 ? void 0 : params.total,
                };
                const updateWork = yield this.WorkModel.findByIdAndUpdate(params === null || params === void 0 ? void 0 : params.workId, updatePayload, { new: true }).exec();
                return updateWork;
            }
            catch (error) {
                throw new Error(`Error updating work: ${error}`);
            }
        });
    }
    // Add payment details for an employee
    addPayment(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newPayment = new this.PaymentModel(params);
                return newPayment.save();
            }
            catch (error) {
                throw new Error(`Error adding payment: ${error}`);
            }
        });
    }
    updatePayment(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatePayload = {
                    date: params === null || params === void 0 ? void 0 : params.date,
                    amount: params === null || params === void 0 ? void 0 : params.amount,
                    proof: params === null || params === void 0 ? void 0 : params.proof,
                };
                const payment = yield this.PaymentModel.findByIdAndUpdate(params === null || params === void 0 ? void 0 : params.paymentId, updatePayload, { new: true });
                return payment;
            }
            catch (error) {
                throw new Error(`Error updating payment: ${error}`);
            }
        });
    }
    showPayments(employeeId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allPayments = yield this.PaymentModel.find({
                    employeeId: employeeId,
                });
                return allPayments;
            }
            catch (error) {
                throw new Error(`Error fetching payments: ${error}`);
            }
        });
    }
    // Add or update bank account details for an employee
    addBankAccount(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { employeeId, accountNumber, companyId, ifsc } = params;
                const bankDetails = {
                    companyId,
                    employeeId,
                    accountNumber,
                    ifsc,
                };
                const account = yield this.AccountModel.findByIdAndUpdate(employeeId, bankDetails, { new: true, upsert: true });
                return account;
            }
            catch (error) {
                throw new Error(`Error updating bank account: ${error}`);
            }
        });
    }
    showAccount(employeeId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const account = yield this.AccountModel.findOne({
                    employeeId: employeeId,
                });
                return account;
            }
            catch (error) {
                throw new Error(`Error fetching payments: ${error}`);
            }
        });
    }
    // Delete company
    deleteCompany(companyId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield this.CompanyModel.findByIdAndDelete(companyId);
                return company;
            }
            catch (error) {
                throw new Error(`Error deleting company account: ${error}`);
            }
        });
    }
    // Delete company
    deleteEmployee(employeeId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield this.EmployeeModel.findByIdAndDelete(employeeId);
                return company;
            }
            catch (error) {
                throw new Error(`Error deleting employee: ${error}`);
            }
        });
    }
    // Delete companya
    deleteWork(workId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield this.WorkModel.findByIdAndDelete(workId);
                return company;
            }
            catch (error) {
                throw new Error(`Error deleting work: ${error}`);
            }
        });
    }
    // Delete company
    deletePayment(paymentId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield this.PaymentModel.findByIdAndDelete(paymentId);
                return company;
            }
            catch (error) {
                throw new Error(`Error deleting payment: ${error}`);
            }
        });
    }
}
exports.Repository = Repository;
