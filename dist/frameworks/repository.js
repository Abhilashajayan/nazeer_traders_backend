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
            const { employeeId, work, accountDetails, newEmployee } = updatePayload;
            try {
                let updatedCompany;
                // If an employeeId is provided, update existing employee's work or account details
                if (employeeId) {
                    const updateFields = {};
                    // Check if work exists and push to the work array
                    if (work) {
                        updateFields.$push = { "employees.$.work": work };
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
                //   console.log(companyId);
                //   console.log(updatePayload);
                //   const updatedCompany = await CompanyModel.findOneAndUpdate(
                //     {
                //       _id: companyId, // Find the company by companyId
                //       "employees._id": employeeId, // Find the employee by employeeId
                //     },
                //     {
                //       $push: {
                //         "employees.$.work": work, // Append the work object to the employee's work array
                //       },
                //     },
                //     { new: true, upsert: false } // Return the updated document
                //   );
                //   console.log('updated company',updatedCompany);
                //  if (!updatedCompany) {
                //     throw new Error(`Company or Employee not found`);
                //   }
                //   return updatedCompany;
                // Destructure payload to extract keys if they exist
                // const { employeeId, work, accountDetails, newEmployee } = updatePayload;
                // const updateQuery: any = {};
                // if (employeeId && work) {
                //   // If updating work for a specific employee, push new work to their work array
                //   updateQuery["employees.$.work"] = { $push: { work } };
                // }
                // if (employeeId && accountDetails) {
                //   // If updating account details for a specific employee, update their account details
                //   updateQuery["employees.$.accountDetails"] = accountDetails;
                // }
                // if (newEmployee) {
                //   // If adding a new employee, push a new employee to the company
                //   updateQuery["employees"] = { $push: newEmployee };
                // }
                // // Apply the update based on the constructed query
                // const updatedCompany = await this.CompanyModel.findOneAndUpdate(
                //   { _id: companyId, ...(employeeId ? { "employees._id": employeeId } : {}) }, // Check for employee if provided
                //   { $set: updateQuery },
                //   { new: true, upsert: false } // Return updated document
                // );
                // if (!updatedCompany) {
                //   throw new Error(`Company or Employee not found`);
                // }
                // return updatedCompany;
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
        });
    }
    // Add an employee to a specific company
    addEmployees(params) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield this.CompanyModel.findById(params === null || params === void 0 ? void 0 : params.companyId);
                if (!company)
                    throw new Error("Company not found");
                const newEmployee = {
                    id: "",
                    name: params === null || params === void 0 ? void 0 : params.employeeName,
                    phone: params === null || params === void 0 ? void 0 : params.phone,
                    work: [],
                    accountDetails: {
                        accountNumber: "",
                        date: new Date(),
                        amount: 0,
                        ifsc: "",
                        proof: "",
                        createdAt: new Date(),
                    },
                    createdAt: new Date(),
                };
                (_a = company === null || company === void 0 ? void 0 : company.employees) === null || _a === void 0 ? void 0 : _a.push(newEmployee);
                return yield company.save();
            }
            catch (error) {
                throw new Error(`Error adding employee: ${error}`);
            }
        });
    }
    // Add work details for an employee in a company
    addWork(params) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield this.CompanyModel.findById(params === null || params === void 0 ? void 0 : params.companyId);
                if (!company)
                    throw new Error("Company not found");
                const employee = (_a = company === null || company === void 0 ? void 0 : company.employees) === null || _a === void 0 ? void 0 : _a.find((emp) => emp.id === (params === null || params === void 0 ? void 0 : params.employeeId));
                if (!employee)
                    throw new Error("Employee not found");
                employee.work.push(Object.assign(Object.assign({}, params), { createdAt: new Date() }));
                return yield company.save();
            }
            catch (error) {
                throw new Error(`Error adding work: ${error}`);
            }
        });
    }
    // Add payment details for an employee
    addPayment(params) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield this.CompanyModel.findById(params === null || params === void 0 ? void 0 : params.companyId);
                if (!company)
                    throw new Error("Company not found");
                const employee = (_a = company === null || company === void 0 ? void 0 : company.employees) === null || _a === void 0 ? void 0 : _a.find((emp) => emp.id === (params === null || params === void 0 ? void 0 : params.employeeId));
                if (!employee)
                    throw new Error("Employee not found");
                employee.accountDetails.date = params === null || params === void 0 ? void 0 : params.date;
                employee.accountDetails.amount = params === null || params === void 0 ? void 0 : params.amount;
                employee.accountDetails.proof = params === null || params === void 0 ? void 0 : params.proof;
                return yield company.save();
            }
            catch (error) {
                throw new Error(`Error adding payment: ${error}`);
            }
        });
    }
    // Add bank account details for an employee
    addBankAccount(params) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield this.CompanyModel.findById(params === null || params === void 0 ? void 0 : params.companyId);
                if (!company)
                    throw new Error("Company not found");
                const employee = (_a = company === null || company === void 0 ? void 0 : company.employees) === null || _a === void 0 ? void 0 : _a.find((emp) => emp.id === (params === null || params === void 0 ? void 0 : params.employeeId));
                if (!employee)
                    throw new Error("Employee not found");
                employee.accountDetails.accountNumber = params.accountNumber;
                employee.accountDetails.ifsc = params.ifsc;
                employee.accountDetails.date = new Date(); // Add the date when the account was added
                return yield company.save();
            }
            catch (error) {
                throw new Error(`Error adding bank account: ${error}`);
            }
        });
    }
}
exports.Repository = Repository;
