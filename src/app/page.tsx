"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from "next/navigation";

const Homepage = () => {
  const router = useRouter();
  const [text, setText] = useState("Redirecting"); // Static text without dots
  const [dots, setDots] = useState(""); // Dots with typewriter effect

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/admin"); // Redirect to the admin page
    }, 1500); // 1000 ms = 1 second before redirect

    // Typewriter effect for the dots part
    let dotIndex = 0;
    const dotInterval = setInterval(() => {
      if (dotIndex < 3) {
        setDots((prev) => prev + ".");
        dotIndex++;
      } else {
        clearInterval(dotInterval); // Stop after 3 dots
      }
    }, 500); // Adjust the speed for typing dots

    // Cleanup the timer when the component unmounts
    return () => {
      clearTimeout(timer);
      clearInterval(dotInterval);
    };
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center text-xl font-semibold text-gray-700">
        <p>
          {text}
          <span className="text-xl">{dots}</span>
        </p>
      </div>
    </div>
  );
}

export default Homepage;
