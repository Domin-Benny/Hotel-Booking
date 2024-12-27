"use client";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cn from 'classnames';
import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
const ContactInfo = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [Message, setMessage] = useState('');
    return (_jsx("div", { className: "flex items-center w-screen mt-8 bg-blue-50 h-max text-blue-800 justify-center p-8 space-x-2", children: _jsxs("form", { className: " flex p-11 rounded-md border shadow-sm bg-blue-50 my-10 flex-col space-y-2 ", action: " ", method: "post", children: [_jsxs("div", { className: " flex space-x-2 ", children: [_jsx(Input, { name: "firstName", value: firstName, onChange: (e) => setFirstName(e.target.value), placeholder: "First Name" }), _jsx(Input, { name: "lastName", value: lastName, onChange: (e) => setLastName(e.target.value), placeholder: "Last Name" })] }), _jsx(Input, { name: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Email" }), _jsx(Input, { name: "subject", value: subject, onChange: (e) => setSubject(e.target.value), placeholder: "Subject" }), _jsx("textarea", { className: "border border-gray-300 rounded-md p-2 resize-none h-52 focus:outline-none ", name: "Message", value: Message, onChange: (e) => setMessage(e.target.value), placeholder: "Message" }), _jsx("button", { type: "submit", className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", children: "Submit" })] }) }));
};
const inputClasses = {
    root: `group relative h-14 w-full rounded-md border border-[#a5a5a6] focus-within:border-primary focus-within:ring-1 focus-within:ring-primary`,
    label: `absolute left-2 top-1/2 z-0 -translate-y-1/2 bg-white px-1 text-base pointer-events-none duration-200 group-focus-within:top-0 group-focus-within:text-xs group-focus-within:text-primary`,
    input: `z-10 h-full w-full rounded-md px-3.5 py-4 outline-none`,
};
function Input(_a) {
    var _b, _c;
    var { placeholder } = _a, props = __rest(_a, ["placeholder"]);
    return (_jsxs("div", { className: inputClasses.root, children: [_jsx("label", { className: cnMerge([
                    inputClasses.label,
                    props.value && 'top-0 text-xs',
                ]), htmlFor: (_b = props.id) !== null && _b !== void 0 ? _b : props.name, children: placeholder }), _jsx("input", Object.assign({ id: (_c = props.id) !== null && _c !== void 0 ? _c : props.name }, props, { className: inputClasses.input }))] }));
}
function cnMerge(...classNames) {
    return twMerge(cn(classNames));
}
export default ContactInfo;
