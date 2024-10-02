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
    public name: string,
    public phone: string,
    public createdAt: Date
  ) {}
}

export class CompanyEntity {
  constructor(
    public name: string,
  ) {}
}
