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
    constructor(accountNumber, ifsc, createdAt) {
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
    constructor(name, phone, createdAt) {
        this.name = name;
        this.phone = phone;
        this.createdAt = createdAt;
    }
}
exports.EmployeeEntity = EmployeeEntity;
class CompanyEntity {
    constructor(name) {
        this.name = name;
    }
}
exports.CompanyEntity = CompanyEntity;
