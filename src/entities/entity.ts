import { ObjectId } from "mongoose";

export class Work {
  constructor(
    public date: Date,
    public count: number,
    public rate: number,
    public total: number,
    public createdAt: Date
  ) {}
}

export class AccountEntity {
  constructor(
    // public accountId: string,
    public accountNumber: string,
    public ifsc: string,
    public createdAt: Date
  ) {}
}
export class PaymentEntity {
  constructor(
    public date: Date,
    public amount: number,
    public proof: string | File,
    public createdAt: Date
  ) {}
}

export class EmployeeEntity {
  constructor(
    // public employeeId: string,
    public name: string,
    public phone: string,
    public work: Work[],
    public accountDetails: AccountEntity, 
    public payments: PaymentEntity[], 
    public createdAt: Date
  ) {}
}

export class CompanyEntity {
  constructor(
    // public _id:string,
    public name: string,
    public employees: EmployeeEntity[]
  ) {}
}
