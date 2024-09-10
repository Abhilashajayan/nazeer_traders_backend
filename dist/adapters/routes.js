"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyRouter = exports.CompanyRouter = void 0;
const express_1 = require("express");
const repository_1 = require("../frameworks/repository");
const model_1 = require("../frameworks/model");
const usecase_1 = require("../usecases/usecase");
const controller_1 = require("./controller");
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
        // Add Employees to Company
        this.router.post("/api/companies/add-employee", (req, res) => {
            this.controller.addEmployees(req, res);
        });
        // Add Work for an Employee
        this.router.post("/api/companies/add-work", (req, res) => {
            this.controller.addWork(req, res);
        });
        // Add Payment for an Employee
        this.router.post("/api/companies/add-payment", (req, res) => {
            this.controller.addPayment(req, res);
        });
        // Add Bank Account for an Employee
        this.router.post("/api/companies/add-bank-account", (req, res) => {
            this.controller.addBankAccount(req, res);
        });
    }
}
exports.CompanyRouter = CompanyRouter;
exports.companyRouter = new CompanyRouter().router;
