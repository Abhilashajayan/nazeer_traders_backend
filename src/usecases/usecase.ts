import {
  ACCOUNT_PAYLOAD,
  ADD_EMPLOYEE_PAYLOAD,
  ADD_PAYMENT_PAYLOAD,
  IUsecase,
  WORK_PAYLOAD,
} from "../adapters/interfaces"
import { CompanyEntity } from "../entities/entity"
import { Repository } from "../frameworks/repository"

export class UseCase implements IUsecase {
  constructor(private companyRepository: Repository) {}
  
  update(companyId : string, payload: any): Promise<any> {
    return this.companyRepository.update(companyId,payload)
  }
  companies(): Promise<CompanyEntity[]> {
      return this.companyRepository.companies()
  }
  show(id:string): Promise<CompanyEntity> {
      return this.companyRepository.showCompany(id)
  }
  createCompany(name: string): Promise<any> {
    return this.companyRepository?.createCompany(name)
  }
  // addEmployees(params: ADD_EMPLOYEE_PAYLOAD): Promise<any> {
  //   return this.companyRepository?.addEmployees(params)
  // }
  // addWork(params: WORK_PAYLOAD): Promise<any> {
  //   return this.companyRepository?.addWork(params)
  // }
  // addPayment(params: ADD_PAYMENT_PAYLOAD): Promise<any> {
  //   return this.companyRepository?.addPayment(params)
  // }
  // addBankAccount(params: ACCOUNT_PAYLOAD): Promise<any> {
  //   return this.companyRepository?.addBankAccount(params)
  // }
}
