"use client";
import { useState, useEffect } from "react";

const NumberIncrementer = ({ stopNumber }: { stopNumber: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevNumber) => {
        const nextNumber = prevNumber + stopNumber / 100;
        if (nextNumber >= stopNumber) {
          clearInterval(interval);
          return stopNumber;
        }
        return nextNumber;
      });
    }, 0); // Interval duration in milliseconds, adjust as needed

    return () => clearInterval(interval);
  }, [stopNumber]);

  return (
    <div className="text-center text-4xl font-bold">
      {Math.round(count).toLocaleString()}
    </div>
  );
};

export default NumberIncrementer;
