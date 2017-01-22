"use strict";
var itsInvalid_1 = require("../itsInvalid");
var itsValid_1 = require("../itsValid");
var validData = {
    'en-GB': 'test',
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    itsInvalid_1.default({
        '-': 'test'
    }, 'containing invalid keys', test);
    itsInvalid_1.default({
        'en-GB': 10
    }, 'containing invalid values', test);
    itsValid_1.default(validData, test);
};