import { Request, Response } from "express"
import { UseCase } from "../usecases/usecase"

export class Controller {
  constructor(private useCase: UseCase) {}

  // Create Company
  async createCompany(req: Request, res: Response) {
    try {
      const { name } = req.body
      const newCompany = await this.useCase.createCompany(name)
      res.status(201).json(newCompany)
    } catch (error) {
      res.status(500).send("Error while creating company")
      console.log("Error while creating company => ", error)
    }
  }

  // Update Company
  async updateCompany(req: Request, res: Response) {
    try {
      const { companyId, name } = req.body
      const updatedCompany = await this.useCase.updateCompany(companyId, name)
      res.status(200).json(updatedCompany)
    } catch (error) {
      res.status(500).send("Error while updating company")
      console.log("Error while updating company => ", error)
    }
  }

  // Fetch all companies
  async companies(req: Request, res: Response) {
    try {
      const companies = await this.useCase.companies()
      res.status(200).json(companies)
    } catch (error) {
      res.status(500).send("Error while fetching companies")
      console.log("Error while fetching companies => ", error)
    }
  }

  // Fetch a single company by ID
  async show(req: Request, res: Response) {
    try {
      const companyId = req.params.id
      const company = await this.useCase.show(companyId)
      res.status(200).json(company)
    } catch (error) {
      res.status(500).send("Error while fetching company")
      console.log("Error while fetching company => ", error)
    }
  }

  // Add Employees
  async addEmployees(req: Request, res: Response) {
    try {
      const { companyId, employeeName, phone } = req.body
      const updatedCompany = await this.useCase.addEmployees({
        companyId,
        employeeName,
        phone,
      })
      res.status(200).json(updatedCompany)
    } catch (error) {
      res.status(500).send("Error while adding employee")
      console.log("Error while adding employee => ", error)
    }
  }

  // Update Employee
  async updateEmployee(req: Request, res: Response) {
    try {
      const { companyId, employeeId, name, phone } = req.body
      const updatedEmployee = await this.useCase.updateEmployee({
        companyId,
        employeeId,
        name,
        phone,
      })
      res.status(200).json(updatedEmployee)
    } catch (error) {
      res.status(500).send("Error while updating employee")
      console.log("Error while updating employee => ", error)
    }
  }

  // Add Work Details for Employee
  async addWork(req: Request, res: Response) {
    try {
      const { companyId, employeeId, date, count, rate, total } = req.body
      const updatedWork = await this.useCase.addWork({
        companyId,
        employeeId,
        date,
        count,
        rate,
        total,
      })
      res.status(200).json(updatedWork)
    } catch (error) {
      res.status(500).send("Error while adding work")
      console.log("Error while adding work => ", error)
    }
  }

  // Update Work Details for Employee
  async updateWork(req: Request, res: Response) {
    try {
      const { companyId, employeeId, workId, date, count, rate, total } = req.body
      const updatedWork = await this.useCase.updateWork({
        companyId,
        employeeId,
        workId,
        date,
        count,
        rate,
        total,
      })
      res.status(200).json(updatedWork)
    } catch (error) { 
      res.status(500).send("Error while updating work")
      console.log("Error while updating work => ", error)
    }
  }

  // Add Payment for Employee
  async addPayment(req: Request, res: Response) {
    try {
      const { companyId, employeeId, date, amount } = req.body
      const proofImage = req.file as Express.Multer.File // Access the uploaded file
      const payment = await this.useCase.addPayment({
        companyId,
        employeeId,
        date,
        amount,
        proof: proofImage.filename,
      })
      res.status(200).json(payment)
    } catch (error) {
      res.status(500).send("Error while adding payment")
      console.log("Error while adding payment => ", error)
    }
  }

  // Update Payment for Employee
  async updatePayment(req: Request, res: Response) {
    try {
      const { companyId, employeeId, paymentId, date, amount } = req.body
      const proofImage = req.file as Express.Multer.File
      const updatedPayment = await this.useCase.updatePayment({
        companyId,
        employeeId,
        paymentId,
        date,
        amount,
        proof: proofImage && proofImage.filename 
      })
      res.status(200).json(updatedPayment)
    } catch (error) {
      res.status(500).send("Error while updating payment")
      console.log("Error while updating payment => ", error)
    }
  }

  // Add Bank Account for Employee
  async addBankAccount(req: Request, res: Response) {
    try {
      const { companyId, employeeId, accountNumber, ifsc } = req.body
      const bankAccount = await this.useCase.addBankAccount({
        companyId,
        employeeId,
        accountNumber,
        ifsc,
      })
      res.status(200).json(bankAccount)
    } catch (error) {
      res.status(500).send("Error while adding bank account")
      console.log("Error while adding bank account => ", error)
    }
  }
}
