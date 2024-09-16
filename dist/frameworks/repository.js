"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
const model_1 = require("./model");
class Repository {
    constructor(CompanyModel) {
        this.CompanyModel = CompanyModel;
    }
    update(companyId, updatePayload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { employeeId, work, accountDetails, newEmployee, amount, date, proof, } = updatePayload;
            console.log('the payloadd', updatePayload);
            try {
                let updatedCompany;
                // If an employeeId is provided, update existing employee's work or account details
                if (employeeId) {
                    const updateFields = {};
                    // Check if work exists and push to the work array
                    if (work) {
                        updateFields.$push = { "employees.$.work": work };
                    }
                    if (date && amount) {
                        console.log("paymentsss", date, amount);
                        // updateFields.$push = { "employees.$.payments": payments };
                    }
                    // Check if account details are provided and set them
                    if (accountDetails) {
                        updateFields.$set = { "employees.$.accountDetails": accountDetails };
                    }
                    updatedCompany = yield model_1.CompanyModel.findOneAndUpdate({
                        _id: companyId, // Find the company by companyId
                        "employees._id": employeeId, // Find the employee by employeeId
                    }, updateFields, { new: true, upsert: false });
                    if (!updatedCompany) {
                        throw new Error("Company or Employee not found");
                    }
                }
                // If newEmployee is provided, add the new employee to the company
                if (newEmployee) {
                    updatedCompany = yield model_1.CompanyModel.findOneAndUpdate({
                        _id: companyId, // Find the company by companyId
                    }, {
                        $push: { employees: newEmployee }, // Add the new employee to the employees array
                    }, { new: true, upsert: false });
                    if (!updatedCompany) {
                        throw new Error("Company not found");
                    }
                }
                return updatedCompany;
            }
            catch (error) {
                throw new Error(`Error updating company: ${error}`);
            }
        });
    }
    //get all companies
    companies() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const companies = this.CompanyModel.find();
                return companies;
            }
            catch (error) {
                throw new Error(`Error creating company: ${error}`);
            }
        });
    }
    showCompany(companyId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield this.CompanyModel.findById(companyId);
                if (!company) {
                    throw new Error(`Company not found`);
                }
                return company;
            }
            catch (error) {
                throw new Error(`Error creating company: ${error}`);
            }
        });
    }
    // Create a new company
    createCompany(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newCompany = new this.CompanyModel({ name });
                return yield newCompany.save();
            }
            catch (error) {
                throw new Error(`Error creating company: ${error}`);
            }
            //   }
            //   // Add an employee to a specific company
            //   async addEmployees(params: ADD_EMPLOYEE_PAYLOAD): Promise<any> {
            //     try {
            //       const company = await this.CompanyModel.findById(params?.companyId)
            //       if (!company) throw new Error("Company not found")
            //       const newEmployee = {
            //         id: "",
            //         name: params?.employeeName,
            //         phone: params?.phone,
            //         work: [],
            //         accountDetails: {
            //           accountNumber: "",
            //           ifsc: "",
            //           createdAt: new Date(),
            //         },
            //         payments:[],
            //         createdAt: new Date(),
            //       }
            //       company?.employees?.push(newEmployee)
            //       return await company.save()
            //     } catch (error) {
            //       throw new Error(`Error adding employee: ${error}`)
            //     }
            //   }
            //   // Add work details for an employee in a company
            //   async addWork(params: WORK_PAYLOAD): Promise<any> {
            //     try {
            //       const company = await this.CompanyModel.findById(params?.companyId)
            //       if (!company) throw new Error("Company not found")
            //       const employee = company?.employees?.find(
            //         (emp) => emp.id === params?.employeeId
            //       )
            //       if (!employee) throw new Error("Employee not found")
            //       employee.work.push({
            //         ...params,
            //         createdAt: new Date(),
            //       })
            //       return await company.save()
            //     } catch (error) {
            //       throw new Error(`Error adding work: ${error}`)
            //     }
            //   }
            //   // Add payment details for an employee
            //   async addPayment(params: ADD_PAYMENT_PAYLOAD): Promise<any> {
            //     try {
            //       const company = await this.CompanyModel.findById(params?.companyId)
            //       if (!company) throw new Error("Company not found")
            //       const employee = company?.employees?.find(
            //         (emp) => emp.id === params?.employeeId
            //       )
            //       if (!employee) throw new Error("Employee not found")
            //       employee.payments.push(params?.date)
            //       employee.accountDetails.amount = params?.amount
            //       employee.accountDetails.proof = params?.proof
            //       return await company.save()
            //     } catch (error) {
            //       throw new Error(`Error adding payment: ${error}`)
            //     }
            //   }
            //   // Add bank account details for an employee
            //   async addBankAccount(params: ACCOUNT_PAYLOAD): Promise<any> {
            //     try {
            //       const company = await this.CompanyModel.findById(params?.companyId)
            //       if (!company) throw new Error("Company not found")
            //       const employee = company?.employees?.find(
            //         (emp) => emp.id === params?.employeeId
            //       )
            //       if (!employee) throw new Error("Employee not found")
            //       employee.accountDetails.accountNumber = params.accountNumber
            //       employee.accountDetails.ifsc = params.ifsc
            //       return await company.save()
            //     } catch (error) {
            //       throw new Error(`Error adding bank account: ${error}`)
            //     }
        });
    }
}
exports.Repository = Repository;
