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
        this.repository = new repository_1.Repository(model_1.CompanyModel);
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
        // Add Work for an Employee
        this.router.post("/api/companies/add-work", (req, res) => {
            this.controller.addWork(req, res);
        });
        // Update Work for an Employee
        this.router.put("/api/companies/update-work", (req, res) => {
            this.controller.updateWork(req, res);
        });
        // Add Payment for an Employee
        this.router.post("/api/companies/add-payment", multer_1.upload.single("proof"), (req, res) => {
            this.controller.addPayment(req, res);
        });
        // Update Payment for an Employee
        this.router.put("/api/companies/update-payment", (req, res) => {
            this.controller.updatePayment(req, res);
        });
        // Add Bank Account for an Employee
        this.router.post("/api/companies/add-bank-account", (req, res) => {
            this.controller.addBankAccount(req, res);
        });
    }
}
exports.CompanyRouter = CompanyRouter;
exports.companyRouter = new CompanyRouter().router;
