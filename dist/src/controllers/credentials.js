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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewCredential = createNewCredential;
exports.getCredentials = getCredentials;
exports.updateCredential = updateCredential;
exports.deleteCredential = deleteCredential;
var credentialService_1 = require("../services/credentialService");
var jwtvalidation_1 = require("../middlewares/jwtvalidation");
function createNewCredential(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userTokenData, newCrendential, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, jwtvalidation_1.userData)(req.headers.authorization)];
                case 1:
                    userTokenData = _a.sent();
                    newCrendential = req.body;
                    return [4 /*yield*/, (0, credentialService_1.createCredentialService)(newCrendential, userTokenData.user.id)];
                case 2:
                    result = _a.sent();
                    res.status(201).send("Nova credencial cadastrada: " + result.title);
                    return [2 /*return*/];
            }
        });
    });
}
function getCredentials(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userTokenData, credential, allCredentials;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, jwtvalidation_1.userData)(req.headers.authorization)];
                case 1:
                    userTokenData = _a.sent();
                    if (!req.params.id) return [3 /*break*/, 3];
                    return [4 /*yield*/, (0, credentialService_1.getCredentialByIdService)(Number(req.params.id))];
                case 2:
                    credential = _a.sent();
                    if (!credential) {
                        throw {
                            type: "Not Found",
                            message: "Credencial inexistente"
                        };
                    }
                    res.status(200).send(credential);
                    return [2 /*return*/];
                case 3: return [4 /*yield*/, (0, credentialService_1.getAllCredentialsService)(userTokenData.user.id)];
                case 4:
                    allCredentials = _a.sent();
                    if (!allCredentials) {
                        throw {
                            type: "Not Found",
                            message: "Usuário sem credencial cadastrada"
                        };
                    }
                    res.status(200).send(allCredentials);
                    return [2 /*return*/];
            }
        });
    });
}
function updateCredential(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userTokenData, credentialId, updateCredentialData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, jwtvalidation_1.userData)(req.headers.authorization)];
                case 1:
                    userTokenData = _a.sent();
                    credentialId = Number(req.params.id);
                    updateCredentialData = req.body;
                    return [4 /*yield*/, (0, credentialService_1.updateCredentialService)(userTokenData.user.id, credentialId, updateCredentialData)];
                case 2:
                    _a.sent();
                    res.status(204).send("Credencial atualizada com sucesso");
                    return [2 /*return*/];
            }
        });
    });
}
function deleteCredential(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var credentialId, userTokenData, allCredentials, credencialIsValid;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    credentialId = Number(req.params.id);
                    return [4 /*yield*/, (0, jwtvalidation_1.userData)(req.headers.authorization)];
                case 1:
                    userTokenData = _a.sent();
                    return [4 /*yield*/, (0, credentialService_1.getAllCredentialsService)(userTokenData.user.id)];
                case 2:
                    allCredentials = _a.sent();
                    credencialIsValid = false;
                    allCredentials.map(function (item) {
                        item.id === credentialId ? credencialIsValid = true : '';
                    });
                    if (!credencialIsValid) {
                        throw {
                            type: "Not Found",
                            message: "Item não encontrado"
                        };
                    }
                    return [4 /*yield*/, (0, credentialService_1.deleteCredentialService)(credentialId)];
                case 3:
                    _a.sent();
                    res.status(204).send("No Content");
                    return [2 /*return*/];
            }
        });
    });
}
