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
exports.Controller = void 0;
class Controller {
    constructor(useCase) {
        this.useCase = useCase;
    }
    // Create Company
    createCompany(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.body;
                const newCompany = yield this.useCase.createCompany(name);
                res.status(201).json(newCompany);
            }
            catch (error) {
                res.status(500).send("Error while creating company");
                console.log("Error while creating company => ", error);
            }
        });
    }
    updateCompany(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const companyId = req.params.id;
                const payload = req.body;
                const updatedCompany = yield this.useCase.update(companyId, payload);
                res.status(201).json(updatedCompany);
            }
            catch (error) {
                res.status(500).send("Error while updating company");
                console.log("Error while updating company => ", error);
            }
        });
    }
    // get companies
    companies(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const companies = yield this.useCase.companies();
                res.status(201).json(companies);
            }
            catch (error) {
                res.status(500).send("Error while creating company");
                console.log("Error while creating company => ", error);
            }
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const companyId = req.params.id;
                const company = yield this.useCase.show(companyId);
                res.status(201).json(company);
            }
            catch (error) {
                res.status(500).send("Error while creating company");
                console.log("Error while creating company => ", error);
            }
        });
    }
    // Add Employees
    addEmployees(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { companyId, employeeName, phone } = req.body;
                const updatedCompany = yield this.useCase.addEmployees({
                    companyId,
                    employeeName,
                    phone,
                });
                res.status(200).json(updatedCompany);
            }
            catch (error) {
                res.status(500).send("Error while adding employee");
                console.log("Error while adding employee => ", error);
            }
        });
    }
    // Add Work Details for Employee
    addWork(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { companyId, employeeId, date, count, rate, total } = req.body;
                const updatedWork = yield this.useCase.addWork({
                    companyId,
                    employeeId,
                    date,
                    count,
                    rate,
                    total,
                });
                res.status(200).json(updatedWork);
            }
            catch (error) {
                res.status(500).send("Error while adding work");
                console.log("Error while adding work => ", error);
            }
        });
    }
    // Add Payment for Employee
    addPayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { companyId, employeeId, date, amount, proof } = req.body;
                const payment = yield this.useCase.addPayment({
                    companyId,
                    employeeId,
                    date,
                    amount,
                    proof,
                });
                res.status(200).json(payment);
            }
            catch (error) {
                res.status(500).send("Error while adding payment");
                console.log("Error while adding payment => ", error);
            }
        });
    }
    // Add Bank Account for Employee
    addBankAccount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { companyId, employeeId, accountNumber, ifsc } = req.body;
                const bankAccount = yield this.useCase.addBankAccount({
                    companyId,
                    employeeId,
                    accountNumber,
                    ifsc,
                });
                res.status(200).json(bankAccount);
            }
            catch (error) {
                res.status(500).send("Error while adding bank account");
                console.log("Error while adding bank account => ", error);
            }
        });
    }
}
exports.Controller = Controller;
