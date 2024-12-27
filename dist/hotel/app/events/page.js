"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Page;
var react_1 = __importDefault(require("react"));
var Events_venue_1 = __importDefault(require("./Events.venue"));
function Page() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Events_venue_1.default, null)));
}
