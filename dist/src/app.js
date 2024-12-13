"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var dotenv_1 = __importDefault(require("dotenv"));
var errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
var login_1 = __importDefault(require("./routes/login"));
var credentials_1 = __importDefault(require("./routes/credentials"));
var erase_1 = __importDefault(require("./routes/erase"));
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/health", function (req, res) {
    res.status(200).send("I'm, OK!");
});
app.use(login_1.default);
app.use(credentials_1.default);
app.use(erase_1.default);
app.use(errorHandler_1.default);
app.listen(process.env.PORT, function () {
    console.log("Servidor rodando na porta: ".concat(process.env.PORT));
});
