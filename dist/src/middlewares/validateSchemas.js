"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = validateSchema;
function validateSchema(schema) {
    return function (req, res, next) {
        var validate = schema.validate(req.body, {
            abortEarly: false
        });
        if (validate.error) {
            res.status(422).send(validate.error.details.map(function (detail) { return detail.message; }));
            return;
        }
        next();
    };
}
