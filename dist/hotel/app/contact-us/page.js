"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = page;
var react_1 = __importDefault(require("react"));
var Contact_1 = __importDefault(require("./Contact"));
function page() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Contact_1.default, null)));
}
