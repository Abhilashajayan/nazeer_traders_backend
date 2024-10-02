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
    // Update Company
    updateCompany(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { companyId, name } = req.body;
                const updatedCompany = yield this.useCase.updateCompany(companyId, name);
                res.status(200).json(updatedCompany);
            }
            catch (error) {
                res.status(500).send("Error while updating company");
                console.log("Error while updating company => ", error);
            }
        });
    }
    // Fetch all companies
    companies(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const companies = yield this.useCase.companies();
                res.status(200).json(companies);
            }
            catch (error) {
                res.status(500).send("Error while fetching companies");
                console.log("Error while fetching companies => ", error);
            }
        });
    }
    // Fetch a single company by ID
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const companyId = req.params.id;
                const company = yield this.useCase.show(companyId);
                res.status(200).json(company);
            }
            catch (error) {
                res.status(500).send("Error while fetching company");
                console.log("Error while fetching company => ", error);
            }
        });
    }
    // Add Employees
    addEmployees(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { companyId, name, phone } = req.body;
                const updatedCompany = yield this.useCase.addEmployees({
                    companyId,
                    name,
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
    // Update Employee
    updateEmployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { companyId, employeeId, name, phone } = req.body;
                const updatedEmployee = yield this.useCase.updateEmployee({
                    companyId,
                    employeeId,
                    name,
                    phone,
                });
                res.status(200).json(updatedEmployee);
            }
            catch (error) {
                res.status(500).send("Error while updating employee");
                console.log("Error while updating employee => ", error);
            }
        });
    }
    // show all Employees
    showAllEmployees(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const allEmployees = yield this.useCase.showAllEmployees(id);
                res.status(200).json(allEmployees);
            }
            catch (error) {
                res.status(500).send("Error while showing employees");
                console.log("Error while showing employees => ", error);
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
    // Update Work Details for Employee
    updateWork(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { workId, date, count, rate, total } = req.body;
                const updatedWork = yield this.useCase.updateWork({
                    workId,
                    date,
                    count,
                    rate,
                    total,
                });
                res.status(200).json(updatedWork);
            }
            catch (error) {
                res.status(500).send("Error while updating work");
                console.log("Error while updating work => ", error);
            }
        });
    }
    // show all works of an employee
    showAllWorks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const allWorks = yield this.useCase.showWorks(id);
                res.status(200).json(allWorks);
            }
            catch (error) {
                res.status(500).send("Error while showing work");
                console.log("Error while showing work => ", error);
            }
        });
    }
    // Add Payment for Employee
    addPayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { companyId, employeeId, date, amount } = req.body;
                const proofImage = req.file; // Access the uploaded file
                const payment = yield this.useCase.addPayment({
                    companyId,
                    employeeId,
                    date,
                    amount,
                    proof: proofImage.filename,
                });
                res.status(200).json(payment);
            }
            catch (error) {
                res.status(500).send("Error while adding payment");
                console.log("Error while adding payment => ", error);
            }
        });
    }
    // Update Payment for Employee
    updatePayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { paymentId, date, amount } = req.body;
                const proofImage = req.file;
                const updatedPayment = yield this.useCase.updatePayment({
                    paymentId,
                    date,
                    amount,
                    proof: proofImage && proofImage.filename,
                });
                res.status(200).json(updatedPayment);
            }
            catch (error) {
                res.status(500).send("Error while updating payment");
                console.log("Error while updating payment => ", error);
            }
        });
    }
    // show all payments of an employee
    showAllPayments(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const allPayments = yield this.useCase.showPayments(id);
                res.status(200).json(allPayments);
            }
            catch (error) {
                res.status(500).send("Error while showing payement");
                console.log("Error while  showing payement=> ", error);
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
    // Add Bank Account for Employee
    deleteCompany(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const company = yield this.useCase.deleteCompany(id);
                res.status(200).json(company);
            }
            catch (error) {
                res.status(500).send("Error while deleting bank account");
                console.log("Error while deleting bank account => ", error);
            }
        });
    }
    // Add Bank Account for Employee
    deleteEmployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const company = yield this.useCase.deleteEmployee(id);
                res.status(200).json(company);
            }
            catch (error) {
                res.status(500).send("Error while deleting employee");
                console.log("Error while deleting employee => ", error);
            }
        });
    }
    // Add Bank Account for Employee
    deleteWork(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const company = yield this.useCase.deleteWork(id);
                res.status(200).json(company);
            }
            catch (error) {
                res.status(500).send("Error while deleting work");
                console.log("Error while deleting work => ", error);
            }
        });
    }
    // Add Bank Account for Employee
    deletePayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const company = yield this.useCase.deletePayment(id);
                res.status(200).json(company);
            }
            catch (error) {
                res.status(500).send("Error while deleting payment");
                console.log("Error while deleting payment => ", error);
            }
        });
    }
}
exports.Controller = Controller;
