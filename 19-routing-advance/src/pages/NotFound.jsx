import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const generateStars = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    top: `${Math.random() * 50}%`,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 3 + 4,
    delay: Math.random() * 4,
    direction: Math.random() > 0.5 ? "topLeft" : "topRight",
  }));
};

const NotFound = () => {
  const navigate = useNavigate();
  const [stars, setStars] = useState([]);

  const btnClicked = () => {
    navigate("/");
  };

  useEffect(() => {
    setStars(generateStars(30));
    const interval = setInterval(() => {
      setStars((prev) => [...prev.slice(-20), ...generateStars(10)]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden flex flex-col items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-space"></div>

      {/* Falling Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className={`absolute ${
              star.direction === "topLeft"
                ? "animate-fall-topLeft"
                : "animate-fall-topRight"
            }`}
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            }}
          >
            <div className="h-full w-full rounded-full bg-white opacity-80" />
          </div>
        ))}
      </div>

      {/* UFO */}
      <div className="relative -mt-24">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8794272-p5k6GdbD8O2RIat5GWtUGJGkDgXoxf.png"
          alt="UFO"
          width={280}
          height={150}
          className="drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
        />
      </div>

      {/* Text Section */}
      <div className="relative text-center ">
        <h1 className="text-7xl font-bold text-white">404</h1>
        <p className="mt-3 text-xl text-gray-300">
          Oops! Looks like this page got lost in space.
        </p>
        <button
          onClick={btnClicked}
          className="mt-80 bg-emerald-700 hover:bg-emerald-800 font-medium px-6 py-3 rounded-lg cursor-pointer active:scale-95 transition-transform"
        >
          Return to Home Page
        </button>
      </div>
    </div>
  );
};

export default NotFound;
