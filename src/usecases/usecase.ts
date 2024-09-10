import {
  ACCOUNT_PAYLOAD,
  ADD_EMPLOYEE_PAYLOAD,
  ADD_PAYMENT_PAYLOAD,
  IUsecase,
  WORK_PAYLOAD,
} from "../adapters/interfaces"
import { Repository } from "../frameworks/repository"

export class UseCase implements IUsecase {
  constructor(private rideRepository: Repository) {}

  createCompany(name: string): Promise<any> {
    return this.rideRepository?.createCompany(name)
  }
  addEmployees(params: ADD_EMPLOYEE_PAYLOAD): Promise<any> {
    return this.rideRepository?.addEmployees(params)
  }
  addWork(params: WORK_PAYLOAD): Promise<any> {
    return this.rideRepository?.addWork(params)
  }
  addPayment(params: ADD_PAYMENT_PAYLOAD): Promise<any> {
    return this.rideRepository?.addPayment(params)
  }
  addBankAccount(params: ACCOUNT_PAYLOAD): Promise<any> {
    return this.rideRepository?.addBankAccount(params)
  }
}
