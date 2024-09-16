"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyEntity = exports.EmployeeEntity = exports.PaymentEntity = exports.AccountEntity = exports.Work = void 0;
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
    accountNumber, ifsc, createdAt) {
        this.accountNumber = accountNumber;
        this.ifsc = ifsc;
        this.createdAt = createdAt;
    }
}
exports.AccountEntity = AccountEntity;
class PaymentEntity {
    constructor(date, amount, proof, createdAt) {
        this.date = date;
        this.amount = amount;
        this.proof = proof;
        this.createdAt = createdAt;
    }
}
exports.PaymentEntity = PaymentEntity;
class EmployeeEntity {
    constructor(
    // public employeeId: string,
    name, phone, work, accountDetails, payments, createdAt) {
        this.name = name;
        this.phone = phone;
        this.work = work;
        this.accountDetails = accountDetails;
        this.payments = payments;
        this.createdAt = createdAt;
    }
}
exports.EmployeeEntity = EmployeeEntity;
class CompanyEntity {
    constructor(
    // public _id:string,
    name, employees) {
        this.name = name;
        this.employees = employees;
    }
}
exports.CompanyEntity = CompanyEntity;
