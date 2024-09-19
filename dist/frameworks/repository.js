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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class Repository {
    constructor(CompanyModel) {
        this.CompanyModel = CompanyModel;
    }
    companies() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const companies = yield this.CompanyModel.find();
                return companies;
            }
            catch (error) {
                throw new Error(`Error fetching companies: ${error}`);
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
                throw new Error(`Error fetching company: ${error}`);
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
    // Update a company by ID
    updateCompany(companyId, name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield this.CompanyModel.findByIdAndUpdate(companyId, { name }, { new: true });
                if (!company)
                    throw new Error("Company not found");
                return company;
            }
            catch (error) {
                throw new Error(`Error updating company: ${error}`);
            }
        });
    }
    // Add an employee to a company
    addEmployees(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield this.CompanyModel.findById(params.companyId);
                if (!company)
                    throw new Error("Company not found");
                const newEmployee = {
                    id: "",
                    name: params.employeeName,
                    phone: params.phone,
                    work: [],
                    accountDetails: {
                        accountNumber: "",
                        ifsc: "",
                        createdAt: new Date(),
                    },
                    payments: [],
                    createdAt: new Date(),
                };
                company.employees.push(newEmployee);
                return yield company.save();
            }
            catch (error) {
                throw new Error(`Error adding employee: ${error}`);
            }
        });
    }
    // Update an employee by ID
    updateEmployee(params) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                console.log("employee params", params);
                const company = yield this.CompanyModel.findById(params.companyId);
                if (!company)
                    throw new Error("Company not found");
                const employeeId = new mongoose_1.default.Types.ObjectId(params.employeeId);
                const employee = (_a = company === null || company === void 0 ? void 0 : company.employees) === null || _a === void 0 ? void 0 : _a.find((emp) => emp._id.equals(employeeId));
                if (!employee)
                    throw new Error("Employee not found");
                employee.name = params.name || employee.name;
                employee.phone = params.phone || employee.phone;
                return yield company.save();
            }
            catch (error) {
                throw new Error(`Error updating employee: ${error}`);
            }
        });
    }
    // Add work for an employee
    addWork(params) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const company = yield this.CompanyModel.findById(params.companyId);
                if (!company)
                    throw new Error("Company not found");
                const employee = (_a = company === null || company === void 0 ? void 0 : company.employees) === null || _a === void 0 ? void 0 : _a.find((emp) => emp._id.equals(params === null || params === void 0 ? void 0 : params.employeeId));
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
    // Update work details for an employee
    // async updateWork(params: any): Promise<any> {
    //   try {
    //     // console.log(params)
    //     const company = await this.CompanyModel.findById(params.companyId)
    //     if (!company) throw new Error("Company not found")
    //     const employeeId = new mongoose.Types.ObjectId(params.employeeId)
    //     const employee = company?.employees?.find((emp: any) =>
    //       emp._id.equals(employeeId)
    //     )
    //     if (!employee) throw new Error("Employee not found")
    //     const work = employee?.work?.find(
    //       (work: any) => work._id.toString() === params?.workId
    //     )
    //     if (!work) throw new Error("Work not found")
    //     work.date = params.date || work.date
    //     work.count = params.count || work.count
    //     work.rate = params.rate || work.rate
    //     work.total = params.total || work.total
    //     return await company.save()
    //   } catch (error) {
    //     throw new Error(`Error updating work: ${error}`)
    //   }
    // }
    updateWork(params) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const { companyId, employeeId, workId, date, count, rate, total } = params;
                // Data Validation (Optional but recommended)
                // You can use a library like Joi to validate the incoming data
                // ... validation logic here ...
                // Find the company using its ID
                const company = yield this.CompanyModel.findById(companyId);
                if (!company) {
                    throw new Error("Company not found");
                }
                // Efficient Employee Search using `find` with destructuring and Mongoose ObjectID conversion
                const employeeIdObjectId = new mongoose_1.default.Types.ObjectId(employeeId);
                const employee = company.employees.find((emp) => emp._id.equals(employeeIdObjectId));
                if (!employee) {
                    throw new Error("Employee not found");
                }
                // Find work using optional chaining and default value (if workId is not provided)
                const work = (_a = employee.work) === null || _a === void 0 ? void 0 : _a.find((wrk) => wrk.id === (params === null || params === void 0 ? void 0 : params.workId));
                // Update work details using optional chaining and nullish coalescing
                if (work) {
                    work.date = date !== null && date !== void 0 ? date : work === null || work === void 0 ? void 0 : work.date;
                    work.count = count !== null && count !== void 0 ? count : work === null || work === void 0 ? void 0 : work.count;
                    work.rate = rate !== null && rate !== void 0 ? rate : work === null || work === void 0 ? void 0 : work.rate;
                    work.total = total !== null && total !== void 0 ? total : work === null || work === void 0 ? void 0 : work.total;
                }
                // Ensure company is saved (assuming it's modified)
                yield company.save();
                return company; // Return the updated company object (optional)
            }
            catch (error) {
                console.error("Error updating work:", error); // Log specific error details
                throw new Error(`Error updating work: ${error.message}`); // Improve error propagation
            }
        });
    }
    // Add payment details for an employee
    addPayment(params) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const company = yield this.CompanyModel.findById(params === null || params === void 0 ? void 0 : params.companyId);
                if (!company)
                    throw new Error("Company not found");
                // const employeeId = new mongoose.Types.ObjectId(params.employeeId)
                // const employee = company?.employees?.find((emp: any) => emp._id.equals(employeeId))
                const employee = (_a = company === null || company === void 0 ? void 0 : company.employees) === null || _a === void 0 ? void 0 : _a.find((emp) => emp._id === params.employeeId);
                if (!employee)
                    throw new Error("Employee not found");
                employee.payments.push(Object.assign(Object.assign({}, params), { createdAt: new Date() }));
                return yield company.save();
            }
            catch (error) {
                throw new Error(`Error adding payment: ${error}`);
            }
        });
    }
    updatePayment(params) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                const company = yield this.CompanyModel.findById(params.companyId);
                if (!company)
                    throw new Error("Company not found");
                const employee = (_a = company === null || company === void 0 ? void 0 : company.employees) === null || _a === void 0 ? void 0 : _a.find((emp) => emp.id === (params === null || params === void 0 ? void 0 : params.employeeId));
                if (!employee)
                    throw new Error("Employee not found");
                const payment = (_b = employee === null || employee === void 0 ? void 0 : employee.payments) === null || _b === void 0 ? void 0 : _b.find((payment) => payment._id === (params === null || params === void 0 ? void 0 : params.paymentId));
                if (!payment)
                    throw new Error("Payment not found");
                payment.amount = params.amount || payment.amount;
                payment.date = params.date || payment.date;
                payment.proof = params.proof || payment.proof;
                return yield company.save();
            }
            catch (error) {
                throw new Error(`Error updating payment: ${error}`);
            }
        });
    }
    // Add or update bank account details for an employee
    addBankAccount(params) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const company = yield this.CompanyModel.findById(params.companyId);
                if (!company)
                    throw new Error("Company not found");
                const employee = (_a = company === null || company === void 0 ? void 0 : company.employees) === null || _a === void 0 ? void 0 : _a.find((emp) => emp.id === (params === null || params === void 0 ? void 0 : params.employeeId));
                if (!employee)
                    throw new Error("Employee not found");
                employee.accountDetails.accountNumber = params.accountNumber;
                employee.accountDetails.ifsc = params.ifsc;
                return yield company.save();
            }
            catch (error) {
                throw new Error(`Error updating bank account: ${error}`);
            }
        });
    }
}
exports.Repository = Repository;
