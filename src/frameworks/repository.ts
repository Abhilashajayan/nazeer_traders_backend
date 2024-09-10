import { Model } from "mongoose"
import {
  ACCOUNT_PAYLOAD,
  ADD_EMPLOYEE_PAYLOAD,
  ADD_PAYMENT_PAYLOAD,
  ICompany,
  IEmployee,
  IUsecase,
  WORK_PAYLOAD,
} from "../adapters/interfaces"

export class Repository implements IUsecase {
  constructor(private CompanyModel: Model<ICompany>) {}

  // Create a new company
  async createCompany(name: string): Promise<any> {
    try {
      const newCompany = new this.CompanyModel({ name })
      return await newCompany.save()
    } catch (error) {
      throw new Error(`Error creating company: ${error}`)
    }
  }

  // Add an employee to a specific company
  async addEmployees(params: ADD_EMPLOYEE_PAYLOAD): Promise<any> {
    try {
      const company = await this.CompanyModel.findById(params?.companyId)
      if (!company) throw new Error("Company not found")

      const newEmployee = {
        id: "",
        name: params?.employeeName,
        phone: params?.phone,
        work: [],
        accountDetails: {
          accountNumber: "",
          date: new Date(),
          amount: 0,
          ifsc: "",
          proof: "",
          createdAt: new Date(),
        },
        createdAt: new Date(),
      }

      company?.employees?.push(newEmployee)
      return await company.save()
    } catch (error) {
      throw new Error(`Error adding employee: ${error}`)
    }
  }

  // Add work details for an employee in a company
  async addWork(params: WORK_PAYLOAD): Promise<any> {
    try {
      const company = await this.CompanyModel.findById(params?.companyId)
      if (!company) throw new Error("Company not found")

      const employee = company?.employees?.find(
        (emp) => emp.id === params?.employeeId
      )
      if (!employee) throw new Error("Employee not found")

      employee.work.push({
        ...params,
        createdAt: new Date(),
      })

      return await company.save()
    } catch (error) {
      throw new Error(`Error adding work: ${error}`)
    }
  }

  // Add payment details for an employee
  async addPayment(params: ADD_PAYMENT_PAYLOAD): Promise<any> {
    try {
      const company = await this.CompanyModel.findById(params?.companyId)
      if (!company) throw new Error("Company not found")

      const employee = company?.employees?.find(
        (emp) => emp.id === params?.employeeId
      )

      if (!employee) throw new Error("Employee not found")

      employee.accountDetails.date = params?.date
      employee.accountDetails.amount = params?.amount
      employee.accountDetails.proof = params?.proof

      return await company.save()
    } catch (error) {
      throw new Error(`Error adding payment: ${error}`)
    }
  }

  // Add bank account details for an employee
  async addBankAccount(params: ACCOUNT_PAYLOAD): Promise<any> {
    try {
      const company = await this.CompanyModel.findById(params?.companyId)
      if (!company) throw new Error("Company not found")

      const employee = company?.employees?.find(
        (emp) => emp.id === params?.employeeId
      )
      if (!employee) throw new Error("Employee not found")

      employee.accountDetails.accountNumber = params.accountNumber
      employee.accountDetails.ifsc = params.ifsc
      employee.accountDetails.date = new Date() // Add the date when the account was added

      return await company.save()
    } catch (error) {
      throw new Error(`Error adding bank account: ${error}`)
    }
  }
}
