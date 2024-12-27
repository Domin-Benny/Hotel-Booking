"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var BedroomBooking = function () {
    var _a = (0, react_1.useState)(''), checkIn = _a[0], setCheckIn = _a[1];
    var _b = (0, react_1.useState)(''), checkOut = _b[0], setCheckOut = _b[1];
    var _c = (0, react_1.useState)('standard'), roomType = _c[0], setRoomType = _c[1];
    var _d = (0, react_1.useState)(1), guests = _d[0], setGuests = _d[1];
    var roomTypes = [
        { value: 'standard', label: 'Standard Room', price: "1,020.00" },
        { value: 'deluxe', label: 'Deluxe Room', price: "1,990.00" },
        { value: 'suite', label: 'Executive Suite', price: "2,909.00" },
    ];
    return (react_1.default.createElement("div", { className: " backdrop-blur-sm  bg-[#e8eeff5d] border border-[#e8eeff] rounded-lg shadow-lg p-6 max-w-md mx-auto" },
        react_1.default.createElement("h2", { className: "text-2xl font-bold text-center mb-4" }, "Book a Room"),
        react_1.default.createElement("form", { className: "space-y-4" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("label", { className: "block text-sm font-bold mb-1" }, "Room Type"),
                react_1.default.createElement("select", { value: roomType, onChange: function (e) { return setRoomType(e.target.value); }, className: "block w-full border rounded-md p-2" }, roomTypes.map(function (room) { return (react_1.default.createElement("option", { key: room.value, value: room.value },
                    room.label,
                    " (\u20B5",
                    room.price,
                    "/night)")); }))),
            react_1.default.createElement("div", { className: "grid grid-cols-2 gap-4" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "block text-sm font-bold mb-1" }, "Check-In"),
                    react_1.default.createElement("input", { type: "date", value: checkIn, onChange: function (e) { return setCheckIn(e.target.value); }, className: "block w-full border rounded-md p-2" })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "block text-sm font-bold mb-1" }, "Check-Out"),
                    react_1.default.createElement("input", { type: "date", value: checkOut, onChange: function (e) { return setCheckOut(e.target.value); }, className: "block w-full border rounded-md p-2" }))),
            react_1.default.createElement("div", null,
                react_1.default.createElement("label", { className: "block text-sm font-bold mb-1" }, "Number of Guests"),
                react_1.default.createElement("input", { type: "number", value: guests, onChange: function (e) { return setGuests(Number(e.target.value)); }, min: 1, max: 4, className: "block w-full border rounded-md p-2" })),
            react_1.default.createElement("button", { type: "button", className: "w-full bg-blue-600 font-bold text-white py-2 rounded-md" }, "Book Room"))));
};
exports.default = BedroomBooking;
