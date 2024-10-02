"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyRouter = exports.CompanyRouter = void 0;
const express_1 = require("express");
const repository_1 = require("../frameworks/repository");
const model_1 = require("../frameworks/model");
const usecase_1 = require("../usecases/usecase");
const controller_1 = require("./controller");
const multer_1 = require("./multer");
class CompanyRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.repository = new repository_1.Repository(model_1.CompanyModel, model_1.EmployeeModel, model_1.WorkModel, model_1.PaymentModel, model_1.AccountModel);
        this.usecase = new usecase_1.UseCase(this.repository);
        this.controller = new controller_1.Controller(this.usecase);
        // Create Company
        this.router.post("/api/companies/create", (req, res) => {
            this.controller.createCompany(req, res);
        });
        // Get all Companies
        this.router.get("/api/companies", (req, res) => {
            this.controller.companies(req, res);
        });
        // Get details of a specific company by ID
        this.router.get("/api/companies/:id", (req, res) => {
            this.controller.show(req, res);
        });
        // Update Company
        this.router.put("/api/companies/update", (req, res) => {
            this.controller.updateCompany(req, res);
        });
        // Add Employees to Company
        this.router.post("/api/companies/add-employee", (req, res) => {
            this.controller.addEmployees(req, res);
        });
        // Update Employee
        this.router.put("/api/companies/update-employee", (req, res) => {
            this.controller.updateEmployee(req, res);
        });
        // show all Employees
        this.router.get("/api/companies/:id/employees", (req, res) => {
            this.controller.showAllEmployees(req, res);
        });
        // Add Work for an Employee
        this.router.post("/api/companies/add-work", (req, res) => {
            this.controller.addWork(req, res);
        });
        // Update Work for an Employee
        this.router.put("/api/companies/update-work", (req, res) => {
            this.controller.updateWork(req, res);
        });
        // show all Work for an Employee
        this.router.get("/api/companies/works/:id", (req, res) => {
            this.controller.showAllWorks(req, res);
        });
        // Add Payment for an Employee
        this.router.post("/api/companies/add-payment", multer_1.upload.single("proof"), (req, res) => {
            this.controller.addPayment(req, res);
        });
        // Update Payment for an Employee
        this.router.put("/api/companies/update-payment", multer_1.upload.single("proof"), (req, res) => {
            this.controller.updatePayment(req, res);
        });
        // Update Payment for an Employee
        this.router.get("/api/companies/payments/:id", (req, res) => {
            this.controller.showAllPayments(req, res);
        });
        // Add Bank Account for an Employee
        this.router.post("/api/companies/add-bank-account", (req, res) => {
            this.controller.addBankAccount(req, res);
        });
        // delete  a company
        this.router.delete("/api/companies/:id", (req, res) => {
            this.controller.deleteCompany(req, res);
        });
        // delete employee in a company
        this.router.delete("/api/companies/employees/:id", (req, res) => {
            this.controller.deleteEmployee(req, res);
        });
        // delete work for an Employee
        this.router.delete("/api/companies/works/:id", (req, res) => {
            this.controller.deleteWork(req, res);
        });
        // delete payment in a company
        this.router.delete("/api/companies/payments/:id", (req, res) => {
            this.controller.deletePayment(req, res);
        });
    }
}
exports.CompanyRouter = CompanyRouter;
exports.companyRouter = new CompanyRouter().router;
