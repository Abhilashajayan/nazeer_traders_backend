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
import { CompanyEntity } from "../entities/entity"
import mongoose from "mongoose"

export class Repository implements IUsecase {
  constructor(private CompanyModel: Model<ICompany>) {}

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
  async addEmployees(params: ADD_EMPLOYEE_PAYLOAD): Promise<any> {
    try {
      const company = await this.CompanyModel.findById(params.companyId)
      if (!company) throw new Error("Company not found")

      const newEmployee = {
        id: "",
        name: params.employeeName,
        phone: params.phone,
        work: [],
        accountDetails: {
          accountNumber: "",
          ifsc: "",
          createdAt: new Date(),
        },
        payments: [],
        createdAt: new Date(),
      }

      company.employees.push(newEmployee)
      return await company.save()
    } catch (error) {
      throw new Error(`Error adding employee: ${error}`)
    }
  }

  // Update an employee by ID
  async updateEmployee(params: any): Promise<any> {
    try {
      console.log("employee params", params)

      const company = await this.CompanyModel.findById(params.companyId)
      if (!company) throw new Error("Company not found")

      const employeeId = new mongoose.Types.ObjectId(params.employeeId)

      const employee = company?.employees?.find((emp: any) =>
        emp._id.equals(employeeId)
      )
      if (!employee) throw new Error("Employee not found")

      employee.name = params.name || employee.name
      employee.phone = params.phone || employee.phone

      return await company.save()
    } catch (error) {
      throw new Error(`Error updating employee: ${error}`)
    }
  }

  // Add work for an employee
  async addWork(params: WORK_PAYLOAD): Promise<any> {
    try {
      const company = await this.CompanyModel.findById(params.companyId)
      if (!company) throw new Error("Company not found")

      const employee = company?.employees?.find((emp: any) =>
        emp._id.equals(params?.employeeId)
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

  // Update work details for an employee
  async updateWork(params: any): Promise<any> {
    try {
      // console.log(params)

      const company = await this.CompanyModel.findById(params.companyId)
      if (!company) throw new Error("Company not found")

      const employeeId = new mongoose.Types.ObjectId(params.employeeId)

      const employee = company?.employees?.find((emp: any) =>
        emp._id.equals(employeeId)
      )

      if (!employee) throw new Error("Employee not found")

      const work = employee?.work?.find(
        (work: any) => work._id.toString() === params?.workId
      )
      if (!work) throw new Error("Work not found")

      work.date = params.date || work.date
      work.count = params.count || work.count
      work.rate = params.rate || work.rate
      work.total = params.total || work.total

      return await company.save()
    } catch (error) {
      throw new Error(`Error updating work: ${error}`)
    }
  }

  // Add payment details for an employee
  async addPayment(params: ADD_PAYMENT_PAYLOAD): Promise<any> {
    try {
      const company = await this.CompanyModel.findById(params?.companyId)
      if (!company) throw new Error("Company not found")

      const employee: any = company?.employees?.find(
        (emp: any) => emp.id === params?.employeeId
      )

      if (!employee) throw new Error("Employee not found")

      employee.payments.push({
        ...params,
        createdAt: new Date(),
      })
      return await company.save()
    } catch (error) {
      throw new Error(`Error adding payment: ${error}`)
    }
  }

  async updatePayment(params: any): Promise<any> {
    try {
      const company = await this.CompanyModel.findById(params.companyId)
      if (!company) throw new Error("Company not found")

      const employee: any = company?.employees?.find(
        (emp: any) => emp.id === params?.employeeId
      )
      if (!employee) throw new Error("Employee not found")

      const payment: any = employee?.payments?.find(
        (payment: any) => payment._id === params?.paymentId
      )
      if (!payment) throw new Error("Payment not found")

      payment.amount = params.amount || payment.amount
      payment.date = params.date || payment.date
      payment.proof = params.proof || payment.proof

      return await company.save()
    } catch (error) {
      throw new Error(`Error updating payment: ${error}`)
    }
  }

  // Add or update bank account details for an employee
  async addBankAccount(params: ACCOUNT_PAYLOAD): Promise<any> {
    try {
      const company = await this.CompanyModel.findById(params.companyId)
      if (!company) throw new Error("Company not found")

      const employee: any = company?.employees?.find(
        (emp: any) => emp.id === params?.employeeId
      )
      if (!employee) throw new Error("Employee not found")

      employee.accountDetails.accountNumber = params.accountNumber
      employee.accountDetails.ifsc = params.ifsc

      return await company.save()
    } catch (error) {
      throw new Error(`Error updating bank account: ${error}`)
    }
  }
}
