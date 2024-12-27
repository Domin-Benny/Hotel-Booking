"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
var react_1 = __importDefault(require("react"));
var Home_1 = __importDefault(require("./home/Home"));
function Home() {
    return (react_1.default.createElement("main", null,
        react_1.default.createElement(Home_1.default, null)));
}
