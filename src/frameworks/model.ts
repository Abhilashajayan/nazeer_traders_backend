import mongoose, { Schema, Document } from "mongoose"
import { IAccount, ICompany, IEmployee, IPayment, IWork } from "../adapters/interfaces"

// Work Schema
const WorkSchema: Schema = new Schema({
  companyId: { type: String, required: true },
  employeeId: { type: String, required: true },
  date: { type: Date, required: true },
  count: { type: Number, required: true },
  rate: { type: String, required: true },
  total: { type: String, required: true },
  remarks: { type: String },
  createdAt: { type: Date, default: Date.now },
})

// payment Schema
const PaymentSchema: Schema = new Schema({
  companyId: { type: String, required: true },
  employeeId: { type: String, required: true },
  date: { type: Date },
  amount: { type: String },
  proof: { type: String },
  createdAt: { type: Date, default: Date.now },
})

// Account Schema
const AccountSchema: Schema = new Schema({
  companyId: { type: String, required: true },
  employeeId: { type: String, required: true },
  accountNumber: { type: String },
  ifsc: { type: String },
  createdAt: { type: Date, default: Date.now },
})

// Employee Schema
const EmployeeSchema: Schema = new Schema({
  companyId: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})

// Company Schema
const CompanySchema: Schema = new Schema({
  name: { type: String },
})

// Export Mongoose models
export const WorkModel = mongoose.model<IWork>("WorkModel", WorkSchema)
export const AccountModel = mongoose.model<IAccount>("AccountModel", AccountSchema)
export const PaymentModel = mongoose.model<IPayment>("PaymentModel", PaymentSchema)
export const EmployeeModel = mongoose.model<IEmployee>("EmployeeModel", EmployeeSchema)
export const CompanyModel = mongoose.model<ICompany>(
  "CompanyModel",
  CompanySchema
)
