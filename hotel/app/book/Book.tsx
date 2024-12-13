import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import BookComponent from "./components/book.components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faLightbulb, faUtensils, faGlassMartiniAlt, faUsers, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

const Book = () => {
  return (
    <div className="relative w-screen h-max min-h-screen bg-blue-50 overflow-hidden">
      {/* Background Icons */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          {/* Smaller and more abundant icons */}
          {[...Array(1000)].map((_, index) => {
            const size = Math.random() * 10 + 10; // Random size between 10 and 30
            const step = 20; // Define step size to align icons
            const x = (index % step) * (100 / step); // Align icons horizontally
            const y = Math.floor(index / step) * (100 / step); // Align icons vertically
            const opacity = Math.random() * 0.6 + 0.2; // Random opacity between 0.1 and 0.4
            const icons = [
              faBed, // Bed Icon
              faLightbulb, // Light Icon
              faUtensils, // Food Icon
              faGlassMartiniAlt, // Bar Icon
              faUsers, // Conference Icon
              faCalendarCheck, // Event Center Icon
            ];
            const icon = icons[Math.floor(Math.random() * icons.length)];
            const colors = [
              "#FDBA74", // Bed Icon
              "#60A5FA", // Light Icon
              "#34D399", // Food Icon
              "#A78BFA", // Bar Icon
              "#F87171", // Conference Icon
              "#FBBF24", // Event Center Icon
            ];
            const color = colors[Math.floor(Math.random() * colors.length)];

            return (
              <FontAwesomeIcon
                key={index}
                icon={icon}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  color: color,
                  position: "absolute",
                  top: `${y}%`,
                  left: `${x}%`,
                  opacity: opacity,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className=" w- h-max flex relative flex-col justify-center items-center ">
        <Header />
        <BookComponent />
        <Footer />
      </div>
    </div>
  );
};

export default Book;