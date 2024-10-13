"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyModel = exports.EmployeeModel = exports.PaymentModel = exports.AccountModel = exports.WorkModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
// Work Schema
const WorkSchema = new mongoose_1.Schema({
    companyId: { type: String, required: true },
    employeeId: { type: String, required: true },
    date: { type: Date, required: true },
    count: { type: Number, required: true },
    rate: { type: String, required: true },
    total: { type: String, required: true },
    remarks: { type: String },
    createdAt: { type: Date, default: Date.now },
});
// payment Schema
const PaymentSchema = new mongoose_1.Schema({
    companyId: { type: String, required: true },
    employeeId: { type: String, required: true },
    date: { type: Date },
    amount: { type: String },
    proof: { type: String },
    createdAt: { type: Date, default: Date.now },
});
// Account Schema
const AccountSchema = new mongoose_1.Schema({
    companyId: { type: String, required: true },
    employeeId: { type: String, required: true },
    accountNumber: { type: String },
    ifsc: { type: String },
    createdAt: { type: Date, default: Date.now },
});
// Employee Schema
const EmployeeSchema = new mongoose_1.Schema({
    companyId: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
// Company Schema
const CompanySchema = new mongoose_1.Schema({
    name: { type: String },
});
// Export Mongoose models
exports.WorkModel = mongoose_1.default.model("WorkModel", WorkSchema);
exports.AccountModel = mongoose_1.default.model("AccountModel", AccountSchema);
exports.PaymentModel = mongoose_1.default.model("PaymentModel", PaymentSchema);
exports.EmployeeModel = mongoose_1.default.model("EmployeeModel", EmployeeSchema);
exports.CompanyModel = mongoose_1.default.model("CompanyModel", CompanySchema);
