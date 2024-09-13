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
    public date: Date,
    public amount: number,
    public ifsc: string,
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
    public createdAt: Date
  ) {}
}

export class CompanyEntity {
  constructor(
    // public companyId: string,
    public name: string,
    public employees: EmployeeEntity[]
  ) {}
}
