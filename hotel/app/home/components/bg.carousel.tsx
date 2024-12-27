"use client";
import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const BGCarousel: React.FC = () => {
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

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Image container */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((src, index) => (
                    <div key={index} className="flex-shrink-0 w-full h-screen relative">
                        <Image 
                            src={src} 
                            alt={`Slide ${index + 1}`} 
                            layout="fill" 
                            objectFit="cover" 
                            priority 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BGCarousel;
