export class Work {
  constructor(
    public date: Date,
    public count: number,
    public rate: string,
    public total: string,
    public createdAt: Date
  ) {}
}

export class AccountEntity {
  constructor(
    public accountId: string,
    public accountNumber: string,
    public date: string,
    public amount: string,
    public ifsc: string,
    public proof: string,
    public createdAt: Date
  ) {}
}

export class EmployeeEntity {
  constructor(
    public employeeId: string,
    public name: string,
    public phone: string,
    public work: Work[],
    public accountDetails: AccountEntity, 
    public createdAt: Date
  ) {}
}

export class CompanyEntity {
  constructor(
    public companyId: string,
    public name: string,
    public employees: EmployeeEntity[]
  ) {}
}
