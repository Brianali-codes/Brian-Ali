import React from "react";
import pdf from './assets/frontend.webp'
import { motion } from "framer-motion";


function PDFViewer() {

  return (
    <motion.div 
            className="bg-transparent flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: 50 }} // Starting position
            whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
            transition={{ duration: 2 }} // Transition duration
            viewport={{ once: true }} // Animation happens only once when it comes into view
        >
      <h2 className="Desc text-lg text-black dark:text-white">My developer Roadmap</h2>
      <br />
      <img src={pdf} alt="My roadmap" id="RM" />
    </motion.div>
  );
}

export default PDFViewer;
