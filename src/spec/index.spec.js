"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const { expect } = require('chai');
var chai_1 = require("chai");
var index_1 = __importDefault(require("../index"));
describe('testJH', function () {
    it('should equal test', function () {
        chai_1.expect(index_1.default()).to.equal('Test');
    });
});
