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
    constructor(
    // public accountId: string,
    accountNumber, date, amount, ifsc, proof, createdAt) {
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
    constructor(
    // public employeeId: string,
    name, phone, work, accountDetails, createdAt) {
        this.name = name;
        this.phone = phone;
        this.work = work;
        this.accountDetails = accountDetails;
        this.createdAt = createdAt;
    }
}
exports.EmployeeEntity = EmployeeEntity;
class CompanyEntity {
    constructor(
    // public companyId: string,
    name, employees) {
        this.name = name;
        this.employees = employees;
    }
}
exports.CompanyEntity = CompanyEntity;
