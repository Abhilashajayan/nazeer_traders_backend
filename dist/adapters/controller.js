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
exports.Controller = void 0;
class Controller {
    constructor(useCase) {
        this.useCase = useCase;
    }
    // Create Company
    createCompany(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.body;
                const newCompany = yield this.useCase.createCompany(name);
                res.status(201).json(newCompany);
            }
            catch (error) {
                res.status(500).send("Error while creating company");
                console.log("Error while creating company => ", error);
            }
        });
    }
    updateCompany(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body, req.file);
                const companyId = req.params.id;
                const payload = req.body;
                const proofImage = req.file;
                payload.proof = proofImage;
                const updatedCompany = yield this.useCase.update(companyId, payload);
                res.status(201).json(updatedCompany);
            }
            catch (error) {
                res.status(500).send("Error while updating company");
                console.log("Error while updating company => ", error);
            }
        });
    }
    // get companies
    companies(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const companies = yield this.useCase.companies();
                res.status(201).json(companies);
            }
            catch (error) {
                res.status(500).send("Error while creating company");
                console.log("Error while creating company => ", error);
            }
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const companyId = req.params.id;
                const company = yield this.useCase.show(companyId);
                res.status(201).json(company);
            }
            catch (error) {
                res.status(500).send("Error while creating company");
                console.log("Error while creating company => ", error);
            }
        });
    }
}
exports.Controller = Controller;
