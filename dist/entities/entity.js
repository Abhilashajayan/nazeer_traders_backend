"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyEntity = exports.EmployeeEntity = exports.AccountEntity = exports.Work = void 0;
class Work {
    constructor(date, count, rate, total, createdAt) {
        this.date = date;
        this.count = count;
        this.rate = rate;
        this.total = total;
        this.createdAt = createdAt;
    }
}
exports.Work = Work;
class AccountEntity {
    constructor(accountId, accountNumber, date, amount, ifsc, proof, createdAt) {
        this.accountId = accountId;
        this.accountNumber = accountNumber;
        this.date = date;
        this.amount = amount;
        this.ifsc = ifsc;
        this.proof = proof;
        this.createdAt = createdAt;
    }
}
exports.AccountEntity = AccountEntity;
class EmployeeEntity {
    constructor(employeeId, name, phone, work, accountDetails, createdAt) {
        this.employeeId = employeeId;
        this.name = name;
        this.phone = phone;
        this.work = work;
        this.accountDetails = accountDetails;
        this.createdAt = createdAt;
    }
}
exports.EmployeeEntity = EmployeeEntity;
class CompanyEntity {
    constructor(companyId, name, employees) {
        this.companyId = companyId;
        this.name = name;
        this.employees = employees;
    }
}
exports.CompanyEntity = CompanyEntity;
