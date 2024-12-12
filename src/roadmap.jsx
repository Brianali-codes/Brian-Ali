import React from "react";
import pdf from './assets/frontend.webp'
import { motion } from "framer-motion";


function PDFViewer() {

  return (
    <motion.div 
            className="bg-transparent flex flex-col justify-center items-center"
            initial={{ opacity: 0, scale: 0.5, y:50 }} // Starting position
            whileInView={{ opacity: 1, scale: 1 , y:0}} // Ending position when in view
            transition={{ duration: 1 }} // Transition duration
            viewport={{ once: true }} // Animation happens only once when it comes into view
        >
            <p className="ABT text-cyan-400">My developer Roadmap</p>
      <br />
      <img src={pdf} alt="My roadmap" id="RM" />
    </motion.div>
  );
}

export default PDFViewer;
