import {
  ACCOUNT_PAYLOAD,
  ADD_EMPLOYEE_PAYLOAD,
  ADD_PAYMENT_PAYLOAD,
  IUsecase,
  WORK_PAYLOAD,
} from "../adapters/interfaces"
import { CompanyEntity, EmployeeEntity } from "../entities/entity"
import { Repository } from "../frameworks/repository"

export class UseCase implements IUsecase {
  constructor(private companyRepository: Repository) {}

  companies(): Promise<CompanyEntity[]> {
    return this.companyRepository.companies()
  }
  show(id: string): Promise<CompanyEntity> {
    return this.companyRepository.showCompany(id)
  }
  createCompany(name: string): Promise<any> {
    return this.companyRepository?.createCompany(name)
  }
  addEmployees(params: ADD_EMPLOYEE_PAYLOAD): Promise<any> {
    return this.companyRepository?.addEmployees(params)
  }
  showAllEmployees(companyId: string): Promise<any> {
    return this.companyRepository?.showAllEmployees(companyId)
  }
  showEmployee(id: string): Promise<EmployeeEntity> {
    return this.companyRepository.showEmployee(id)
  }
  addWork(params: WORK_PAYLOAD): Promise<any> {
    return this.companyRepository?.addWork(params)
  }
  showWorks(employeeId: string): Promise<any> {
    return this.companyRepository?.showWorks(employeeId)
  }
  addPayment(params: ADD_PAYMENT_PAYLOAD): Promise<any> {
    return this.companyRepository?.addPayment(params)
  }
  showPayments(employeeId: string): Promise<any> {
    return this.companyRepository?.showPayments(employeeId)
  }
  addBankAccount(params: ACCOUNT_PAYLOAD): Promise<any> {
    return this.companyRepository?.addBankAccount(params)
  }
  showAccount(employeeId: string): Promise<any> {
    return this.companyRepository?.showAccount(employeeId)
  }
  updateCompany(companyId: string, name: string): Promise<any> {
    return this.companyRepository?.updateCompany(companyId, name)
  }
  updateEmployee(params: any): Promise<any> {
    return this.companyRepository?.updateEmployee(params)
  }
  updateWork(params: any): Promise<any> {
    return this.companyRepository?.updateWork(params)
  }
  updatePayment(params: any): Promise<any> {
    return this.companyRepository?.updatePayment(params)
  }
  deleteCompany(companyId: string): Promise<any> {
    return this.companyRepository?.deleteCompany(companyId)
  }
  deleteEmployee(employeeId: string): Promise<any> {
    return this.companyRepository?.deleteEmployee(employeeId)
  }
  deleteWork(workId: string): Promise<any> {
    return this.companyRepository?.deleteWork(workId)
  }
  deletePayment(paymentId: string): Promise<any> {
    return this.companyRepository?.deletePayment(paymentId)
  }
}
