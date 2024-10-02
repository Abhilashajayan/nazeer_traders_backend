import { CompanyEntity } from "../entities/entity"

export type WORK_PAYLOAD = {
  date: Date
  count: number
  rate: number
  total: number
  companyId: string
  employeeId: string
}

export type ADD_PAYMENT_PAYLOAD = {
  date: Date
  amount: number
  proof: string | File
  companyId: string
  employeeId: string
}
export type ADD_EMPLOYEE_PAYLOAD = {
  companyId: string
  name: string
  phone: string
}

export type ACCOUNT_PAYLOAD = {
  companyId: string
  employeeId: string
  accountNumber: string
  ifsc: string
}

export interface IUsecase {
  createCompany(name: string): Promise<any>
  updateCompany(companyId: string, name: string): Promise<any>
  companies(): Promise<CompanyEntity[]>
  addEmployees(params: ADD_EMPLOYEE_PAYLOAD): Promise<any>
  updateEmployee(params: any): Promise<any>
  showAllEmployees(companyId: string): Promise<any>
  addWork(params: WORK_PAYLOAD): Promise<any>
  updateWork(params: any): Promise<any>
  showWorks(employeeId: string): Promise<any>
  addPayment(params: ADD_PAYMENT_PAYLOAD): Promise<any>
  showPayments(employeeId: string): Promise<any>
  updatePayment(params: ADD_PAYMENT_PAYLOAD): Promise<any>
  addBankAccount(params: ACCOUNT_PAYLOAD): Promise<any>
  deleteCompany(companyId: string): Promise<any>
  deleteEmployee(employeeId: string): Promise<any>
  deleteWork(workId: string): Promise<any>
  deletePayment(paymentId: string): Promise<any>
}

export interface IWork {
  companyId: string
  employeeId: string
  date: Date
  count: number
  rate: number
  total: number
  createdAt: Date
}

export interface IPayment {
  companyId: string
  employeeId: string
  date: Date
  amount: number
  proof: string | File
  createdAt: Date
}
export interface IAccount {
  accountNumber: string
  ifsc: string
  createdAt: Date
}

export interface IEmployee {
  companyId: string
  name: string
  phone: string
  createdAt: Date
}

export interface ICompany {
  name: string
}
