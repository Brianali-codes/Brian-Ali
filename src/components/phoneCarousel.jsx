import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PhoneCarousel({
  title = "iPhone Model I made lol",
  images = [],
  autoplayInterval = 5000, // faster autoplay
  viewOnGithubUrl, // new prop
}) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  // Autoplay effect
  useEffect(() => {
    if (images.length === 0 || isPaused) return;

    const interval = setInterval(() => {
      nextImage();
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [index, images.length, autoplayInterval, isPaused]);

  if (images.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-lg font-semibold text-black-200 Desc">{title}</h2>
        <div className="text-gray-600">No images provided</div>
        {viewOnGithubUrl && (
          <a
            href={viewOnGithubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View on GitHub
          </a>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Title */}
      <h2 className="text-lg font-semibold text-black-200 Desc">{title}</h2>

      {/* iPhone Layout */}
      <div
        className="relative w-[310px] h-[660px] rounded-[30px] bg-black shadow-xl border-[6px] border-black overflow-hidden flex items-center justify-center cursor-pointer"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onClick={nextImage}
      >
        {/* Dynamic Screen */}
        <div className="relative w-[300px] h-[648px] rounded-[26px] overflow-hidden bg-black flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={images[index]}
              src={images[index]}
              alt="Carousel"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="object-cover w-full h-full"
            />
          </AnimatePresence>
        </div>

        {/* Speaker + Front Camera */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <div className="w-16 h-1.5 rounded-full bg-gray-800"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
        </div>

        {/* Side Buttons */}
        <div className="absolute top-24 -left-1.5 w-1 h-12 bg-gray-800 rounded-r"></div>
        <div className="absolute top-40 -left-1.5 w-1 h-9 bg-gray-800 rounded-r"></div>
        <div className="absolute top-52 -left-1.5 w-1 h-9 bg-gray-800 rounded-r"></div>
      </div>

      {/* View on GitHub button */}
      {viewOnGithubUrl && (
        <a
          href={viewOnGithubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-4 py-2 rounded-xl Desc border border-gray-700 hover:bg-gray-800 transition"
        >
          View on GitHub
        </a>
      )}
    </div>
  );
}
