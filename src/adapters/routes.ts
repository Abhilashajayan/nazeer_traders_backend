import { Router, Request, Response } from "express";
import { Repository } from "../frameworks/repository";
import { CompanyModel } from "../frameworks/model";
import { UseCase } from "../usecases/usecase";
import { Controller } from "./controller";
import { upload } from "./multer";

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

    // Get all Companies
    this.router.get("/api/companies", (req: Request, res: Response) => {
      this.controller.companies(req, res);
    });

    // Get details of a specific company by ID
    this.router.get("/api/companies/:id", (req: Request, res: Response) => {
      this.controller.show(req, res);
    });

    // Update Company
    this.router.put("/api/companies/update", (req: Request, res: Response) => {
      this.controller.updateCompany(req, res);
    });

    // Add Employees to Company
    this.router.post("/api/companies/add-employee", (req: Request, res: Response) => {
      this.controller.addEmployees(req, res);
    });

    // Update Employee
    this.router.put("/api/companies/update-employee", (req: Request, res: Response) => {
      this.controller.updateEmployee(req, res);
    });

    // Add Work for an Employee
    this.router.post("/api/companies/add-work", (req: Request, res: Response) => {
      this.controller.addWork(req, res);
    });

    // Update Work for an Employee
    this.router.put("/api/companies/update-work", (req: Request, res: Response) => {
      this.controller.updateWork(req, res);
    });

    // Add Payment for an Employee
    this.router.post("/api/companies/add-payment", upload.single("proof"), (req: Request, res: Response) => {
      this.controller.addPayment(req, res);
    });

    // Update Payment for an Employee
    this.router.put("/api/companies/update-payment", (req: Request, res: Response) => {
      this.controller.updatePayment(req, res);
    });

    // Add Bank Account for an Employee
    this.router.post("/api/companies/add-bank-account", (req: Request, res: Response) => {
      this.controller.addBankAccount(req, res);
    });
  }
}

export const companyRouter = new CompanyRouter().router;
