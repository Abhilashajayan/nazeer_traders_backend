import mongoose, { Schema, Document } from "mongoose"
import { ICompany } from "../adapters/interfaces"

// Work Schema
const WorkSchema: Schema = new Schema({
  date: { type: Date, required: true },
  count: { type: Number, required: true },
  rate: { type: String, required: true },
  total: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})

// Account Schema
const AccountSchema: Schema = new Schema({
  //   accountId: { type: String, required: true },
  accountNumber: { type: String },
  date: { type: Date },
  amount: { type: String },
  ifsc: { type: String },
  proof: { type: String },
  createdAt: { type: Date, default: Date.now },
})

// Employee Schema
const EmployeeSchema: Schema = new Schema({
  //   employeeId: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  work: { type: [WorkSchema] },
  accountDetails: { type: AccountSchema },
  createdAt: { type: Date, default: Date.now },
})

// Company Schema
const CompanySchema: Schema = new Schema({
  name: { type: String, required: true },
  employees: { type: [EmployeeSchema] },
})

// Export Mongoose models
export const WorkModel = mongoose.model("WorkModel", WorkSchema)
export const AccountModel = mongoose.model("AccountModel", AccountSchema)
export const EmployeeModel = mongoose.model("EmployeeModel", EmployeeSchema)
export const CompanyModel = mongoose.model<ICompany>(
  "CompanyModel",
  CompanySchema
)
