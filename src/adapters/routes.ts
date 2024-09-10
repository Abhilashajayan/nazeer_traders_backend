import { Router, Request, Response } from "express";
import { Repository } from "../frameworks/repository";
import { CompanyModel } from "../frameworks/model";
import { UseCase } from "../usecases/usecase";
import { Controller } from "./controller";

export class CompanyRouter {
  router = Router();

  repository = new Repository(CompanyModel);
  usecase = new UseCase(this.repository);
  controller = new Controller(this.usecase);

  constructor() {
    // Create Company
    this.router.post("/api/companies/create", (req: Request, res: Response) => {
      this.controller.createCompany(req, res);
    });

    // Add Employees to Company
    this.router.post("/api/companies/add-employee", (req: Request, res: Response) => {
      this.controller.addEmployees(req, res);
    });

    // Add Work for an Employee
    this.router.post("/api/companies/add-work", (req: Request, res: Response) => {
      this.controller.addWork(req, res);
    });

    // Add Payment for an Employee
    this.router.post("/api/companies/add-payment", (req: Request, res: Response) => {
      this.controller.addPayment(req, res);
    });

    // Add Bank Account for an Employee
    this.router.post("/api/companies/add-bank-account", (req: Request, res: Response) => {
      this.controller.addBankAccount(req, res);
    });
  }
}

export const companyRouter = new CompanyRouter().router;
