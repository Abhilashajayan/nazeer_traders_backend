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
      const { companyId, name, phone } = req.body
      const updatedCompany = await this.useCase.addEmployees({
        companyId,
        name,
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
  // show all Employees
  async showAllEmployees(req: Request, res: Response) {
    try {
      const { id } = req.params
      const allEmployees = await this.useCase.showAllEmployees(id)
      res.status(200).json(allEmployees)
    } catch (error) {
      res.status(500).send("Error while showing employees")
      console.log("Error while showing employees => ", error)
    }
  }

  // Fetch a single employee by ID
  async showEmployee(req: Request, res: Response) {
    try {
      const employeeId = req.params.id
      const employee = await this.useCase.showEmployee(employeeId)
      res.status(200).json(employee)
    } catch (error) {
      res.status(500).send("Error while fetching employee")
      console.log("Error while fetching employee => ", error)
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
      const { workId, date, count, rate, total } = req.body
      const updatedWork = await this.useCase.updateWork({
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

  // show all works of an employee
  async showAllWorks(req: Request, res: Response) {
    try {
      const { id } = req.params
      const allWorks = await this.useCase.showWorks(id)
      res.status(200).json(allWorks)
    } catch (error) {
      res.status(500).send("Error while showing work")
      console.log("Error while showing work => ", error)
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
      const { paymentId, date, amount } = req.body
      const proofImage = req.file as Express.Multer.File
      const updatedPayment = await this.useCase.updatePayment({
        paymentId,
        date,
        amount,
        proof: proofImage && proofImage.filename,
      })
      res.status(200).json(updatedPayment)
    } catch (error) {
      res.status(500).send("Error while updating payment")
      console.log("Error while updating payment => ", error)
    }
  }

  // show all payments of an employee
  async showAllPayments(req: Request, res: Response) {
    try {
      const { id } = req.params
      const allPayments = await this.useCase.showPayments(id)
      res.status(200).json(allPayments)
    } catch (error) {
      res.status(500).send("Error while showing payement")
      console.log("Error while  showing payement=> ", error)
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

  // show all payments of an employee
  async showAccount(req: Request, res: Response) {
    try {
      const { id } = req.params
      const account = await this.useCase.showAccount(id)
      res.status(200).json(account)
    } catch (error) {
      res.status(500).send("Error while showing payement")
      console.log("Error while  showing payement=> ", error)
    }
  }

  // Add Bank Account for Employee
  async deleteCompany(req: Request, res: Response) {
    try {
      const { id } = req.params
      const company = await this.useCase.deleteCompany(id)
      res.status(200).json(company)
    } catch (error) {
      res.status(500).send("Error while deleting bank account")
      console.log("Error while deleting bank account => ", error)
    }
  }
  // Add Bank Account for Employee
  async deleteEmployee(req: Request, res: Response) {
    try {
      const { id } = req.params
      const company = await this.useCase.deleteEmployee(id)
      res.status(200).json(company)
    } catch (error) {
      res.status(500).send("Error while deleting employee")
      console.log("Error while deleting employee => ", error)
    }
  }
  // Add Bank Account for Employee
  async deleteWork(req: Request, res: Response) {
    try {
      const { id } = req.params
      const company = await this.useCase.deleteWork(id)
      res.status(200).json(company)
    } catch (error) {
      res.status(500).send("Error while deleting work")
      console.log("Error while deleting work => ", error)
    }
  }
  // Add Bank Account for Employee
  async deletePayment(req: Request, res: Response) {
    try {
      const { id } = req.params
      const company = await this.useCase.deletePayment(id)
      res.status(200).json(company)
    } catch (error) {
      res.status(500).send("Error while deleting payment")
      console.log("Error while deleting payment => ", error)
    }
  }
}
