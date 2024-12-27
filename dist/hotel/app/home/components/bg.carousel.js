"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import Image from 'next/image';
import { useState, useEffect } from 'react';
const BGCarousel = () => {
    const images = [
        "/images/bg.images/bg-01.jpg",
        "/images/bg.images/bg-02.jpg",
        "/images/bg.images/bg-03.jpg",
        "/images/bg.images/bg-04.jpg",
        "/images/bg.images/bg-05.jpg",
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    // Automatically change slides
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000); // Change every 5 seconds
        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [images.length]);
    return (_jsx("div", { className: "relative w-full h-screen overflow-hidden", children: _jsx("div", { className: "flex transition-transform duration-700 ease-in-out", style: { transform: `translateX(-${currentIndex * 100}%)` }, children: images.map((src, index) => (_jsx("div", { className: "flex-shrink-0 w-full h-screen relative", children: _jsx(Image, { src: src, alt: `Slide ${index + 1}`, layout: "fill", objectFit: "cover", priority: true }) }, index))) }) }));
};
export default BGCarousel;
