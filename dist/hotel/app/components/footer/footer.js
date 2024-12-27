import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import FooterComponents from './components/footer.component';
const year = new Date().getFullYear();
const Footer = () => {
    return (_jsxs("div", { className: "w-screen h-[50vh] flex flex-col justify-center items-center bg-blue-950 ", children: [_jsx(FooterComponents, {}), _jsx("div", { className: "w-10/12  border-t border-gray-400 border-d " }), _jsxs("footer", { className: "w-10/12 h-[60px] flex justify-between items-center", children: [_jsxs("p", { className: "text-gray-400 text-sm", children: ["Copyright \u00A9 ", year, " "] }), _jsxs("i", { className: " not-italic ", children: [_jsx("p", { className: "text-gray-400  text-[40px] font-04 ", children: "Evita " }), _jsx("p", { className: "text-gray-400 text-[13px] -mt-5 ml-6 ", children: "Hotel " })] })] })] }));
};
export default Footer;
