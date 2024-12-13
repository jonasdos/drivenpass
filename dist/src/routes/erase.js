"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var erase_1 = require("../controllers/erase");
var express_1 = require("express");
var jwtvalidation_1 = require("../middlewares/jwtvalidation");
var eraseRouter = (0, express_1.Router)();
eraseRouter.delete("/erase", jwtvalidation_1.jwtvalidation, erase_1.eraseAcount);
exports.default = eraseRouter;
