import { jsx as _jsx } from "react/jsx-runtime";
import "./globals.css";
import "./assets/fonts.css";
export const metadata = {
    title: "Evita Hotel",
    description: "Hotel Booking App",
};
export default function RootLayout({ children, }) {
    return (_jsx("html", { lang: "en", children: _jsx("body", { className: ` antialiased scroll-smooth overflow-x-hidden w-screen h-screen `, children: children }) }));
}
