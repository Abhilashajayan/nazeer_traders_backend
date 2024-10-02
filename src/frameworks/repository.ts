import { Model } from "mongoose"
import {
  ACCOUNT_PAYLOAD,
  ADD_EMPLOYEE_PAYLOAD,
  ADD_PAYMENT_PAYLOAD,
  IAccount,
  ICompany,
  IEmployee,
  IPayment,
  IUsecase,
  IWork,
  WORK_PAYLOAD,
} from "../adapters/interfaces"
import { CompanyEntity } from "../entities/entity"

export class Repository implements IUsecase {
  constructor(
    private CompanyModel: Model<ICompany>,
    private EmployeeModel: Model<IEmployee>,
    private WorkModel: Model<IWork>,
    private PaymentModel: Model<IPayment>,
    private AccountModel: Model<IAccount>
  ) {}

  async companies(): Promise<CompanyEntity[]> {
    try {
      const companies = await this.CompanyModel.find()
      return companies
    } catch (error) {
      throw new Error(`Error fetching companies: ${error}`)
    }
  }

  async showCompany(companyId: string): Promise<CompanyEntity> {
    try {
      const company = await this.CompanyModel.findById(companyId)
      if (!company) {
        throw new Error(`Company not found`)
      }
      return company
    } catch (error) {
      throw new Error(`Error fetching company: ${error}`)
    }
  }

  // Create a new company
  async createCompany(name: string): Promise<any> {
    try {
      const newCompany = new this.CompanyModel({ name })
      return await newCompany.save()
    } catch (error) {
      throw new Error(`Error creating company: ${error}`)
    }
  }

  // Update a company by ID
  async updateCompany(companyId: string, name: string): Promise<any> {
    try {
      const company = await this.CompanyModel.findByIdAndUpdate(
        companyId,
        { name },
        { new: true }
      )
      if (!company) throw new Error("Company not found")
      return company
    } catch (error) {
      throw new Error(`Error updating company: ${error}`)
    }
  }

  // Add an employee to a company
  async addEmployees(params: any): Promise<any> {
    try {
      const newEmployee = new this.EmployeeModel(params)
      return await newEmployee.save()
    } catch (error) {
      throw new Error(`Error adding employee: ${error}`)
    }
  }

  // Update an employee by ID
  async updateEmployee(params: any): Promise<any> {
    try {
      const updateEmployeeParams = {
        name: params.name,
        phone: params.phone,
      }

      const employee = await this.EmployeeModel.findByIdAndUpdate(
        params.employeeId,
        updateEmployeeParams,
        { new: true }
      ).exec()

      return employee
    } catch (error) {
      throw new Error(`Error updating employee: ${error}`)
    }
  }

  async showAllEmployees(companyId: string): Promise<any> {
    try {
      console.log("company id ", companyId)

      const allEmp = await this.EmployeeModel.find({ companyId: companyId })

      console.log("all employees", allEmp)

      return allEmp
    } catch (error) {
      throw new Error(`Error showing employees: ${error}`)
    }
  }

  // Add work for an employee
  async addWork(params: WORK_PAYLOAD): Promise<any> {
    try {
      const work = new this.WorkModel(params)
      return await work.save()
    } catch (error) {
      throw new Error(`Error adding work: ${error}`)
    }
  }

  async showWorks(employeeId: string): Promise<any> {
    try {
      const allWorks = await this.WorkModel.find({ employeeId: employeeId })
      return allWorks
    } catch (error) {
      throw new Error(`Error showing work: ${error}`)
    }
  }

  async updateWork(params: any): Promise<any> {
    try {
      const updatePayload = {
        date: params?.date,
        count: params?.count,
        rate: params?.rate,
        total: params?.total,
      }

      const updateWork = await this.WorkModel.findByIdAndUpdate(
        params?.workId,
        updatePayload,
        { new: true }
      ).exec()

      return updateWork
    } catch (error) {
      throw new Error(`Error updating work: ${error}`)
    }
  }

  // Add payment details for an employee
  async addPayment(params: ADD_PAYMENT_PAYLOAD): Promise<any> {
    try {
      const newPayment = new this.PaymentModel(params)
      return newPayment.save()
    } catch (error) {
      throw new Error(`Error adding payment: ${error}`)
    }
  }

  async updatePayment(params: any): Promise<any> {
    try {
      const updatePayload = {
        date: params?.date,
        amount: params?.amount,
        proof: params?.proof,
      }

      const payment = await this.PaymentModel.findByIdAndUpdate(
        params?.paymentId,
        updatePayload,
        { new: true }
      )

      return payment
    } catch (error) {
      throw new Error(`Error updating payment: ${error}`)
    }
  }

  async showPayments(employeeId: string): Promise<any> {
    try {
      const allPayments = await this.PaymentModel.find({
        employeeId: employeeId,
      })
      return allPayments
    } catch (error) {
      throw new Error(`Error fetching payments: ${error}`)
    }
  }

  // Add or update bank account details for an employee
  async addBankAccount(params: ACCOUNT_PAYLOAD): Promise<any> {
    try {
      const { employeeId, accountNumber, companyId, ifsc } = params

      const bankDetails = {
        companyId,
        employeeId,
        accountNumber,
        ifsc,
      }

      const account = await this.AccountModel.findByIdAndUpdate(
        employeeId,
        bankDetails,
        { new: true, upsert: true }
      )

      return account
    } catch (error) {
      throw new Error(`Error updating bank account: ${error}`)
    }
  }

  // Delete company
  async deleteCompany(companyId: string): Promise<any> {
    try {
      const company = await this.CompanyModel.findByIdAndDelete(companyId)
      return company
    } catch (error) {
      throw new Error(`Error deleting company account: ${error}`)
    }
  }
  // Delete company
  async deleteEmployee(employeeId: string): Promise<any> {
    try {
      const company = await this.EmployeeModel.findByIdAndDelete(employeeId)
      return company
    } catch (error) {
      throw new Error(`Error deleting employee: ${error}`)
    }
  }
  // Delete company
  async deleteWork(workId: string): Promise<any> {
    try {
      const company = await this.WorkModel.findByIdAndDelete(workId)
      return company
    } catch (error) {
      throw new Error(`Error deleting work: ${error}`)
    }
  }
  // Delete company
  async deletePayment(paymentId: string): Promise<any> {
    try {
      const company = await this.PaymentModel.findByIdAndDelete(paymentId)
      return company
    } catch (error) {
      throw new Error(`Error deleting payment: ${error}`)
    }
  }
}
