"use strict";
require("mocha");
var itsInvalid_1 = require("../itsInvalid");
var describeMemberProp_1 = require("../describeMemberProp");
var agentSchema_1 = require("../helpers/agentSchema");
var factory_1 = require("../factory");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    itsInvalid_1.default({
        objectType: 'Group',
        name: 'Test',
        member: [],
    }, 'contains no members', test);
    describeMemberProp_1.default(factory_1.agent, test);
    agentSchema_1.default(test);
};