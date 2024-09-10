import { Request, Response } from "express";
import { UseCase } from "../usecases/usecase";

export class Controller {
  constructor(private useCase: UseCase) {}

  // Create Company
  async createCompany(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const newCompany = await this.useCase.createCompany(name);
      res.status(201).json(newCompany);
    } catch (error) {
      res.status(500).send("Error while creating company");
      console.log("Error while creating company => ", error);
    }
  }

  // Add Employees
  async addEmployees(req: Request, res: Response) {
    try {
      const { companyId, employeeName, phone } = req.body;
      const updatedCompany = await this.useCase.addEmployees({
        companyId,
        employeeName,
        phone,
      });
      res.status(200).json(updatedCompany);
    } catch (error) {
      res.status(500).send("Error while adding employee");
      console.log("Error while adding employee => ", error);
    }
  }

  // Add Work Details for Employee
  async addWork(req: Request, res: Response) {
    try {
      const { companyId, employeeId, date, count, rate, total } = req.body;
      const updatedWork = await this.useCase.addWork({
        companyId,
        employeeId,
        date,
        count,
        rate,
        total,
      });
      res.status(200).json(updatedWork);
    } catch (error) {
      res.status(500).send("Error while adding work");
      console.log("Error while adding work => ", error);
    }
  }

  // Add Payment for Employee
  async addPayment(req: Request, res: Response) {
    try {
      const { companyId, employeeId, date, amount, proof } = req.body;
      const payment = await this.useCase.addPayment({
        companyId,
        employeeId,
        date,
        amount,
        proof,
      });
      res.status(200).json(payment);
    } catch (error) {
      res.status(500).send("Error while adding payment");
      console.log("Error while adding payment => ", error);
    }
  }

  // Add Bank Account for Employee
  async addBankAccount(req: Request, res: Response) {
    try {
      const { companyId, employeeId, accountNumber, ifsc } = req.body;
      const bankAccount = await this.useCase.addBankAccount({
        companyId,
        employeeId,
        accountNumber,
        ifsc,
      });
      res.status(200).json(bankAccount);
    } catch (error) {
      res.status(500).send("Error while adding bank account");
      console.log("Error while adding bank account => ", error);
    }
  }
}
