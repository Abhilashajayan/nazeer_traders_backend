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
  employeeName: string
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
  update(companyId:string,payload: any): Promise<any>
  companies(): Promise<CompanyEntity[]>
  addEmployees(params: ADD_EMPLOYEE_PAYLOAD): Promise<any>
  addWork(params: WORK_PAYLOAD): Promise<any>
  addPayment(params: ADD_PAYMENT_PAYLOAD): Promise<any>
  addBankAccount(params: ACCOUNT_PAYLOAD): Promise<any>
}

export interface IWork {
  date: Date
  count: number
  rate: number
  total: number
  createdAt: Date
}

export interface IAccount {
  accountNumber: string
  date: Date
  amount: number
  ifsc: string
  proof: string | File
  createdAt: Date
}

export interface IEmployee {
  id: string
  name: string
  phone: string
  work: IWork[]
  accountDetails: IAccount
  createdAt: Date
}

export interface ICompany {
  // companyId?: string
  name: string
  employees: IEmployee[]
}
