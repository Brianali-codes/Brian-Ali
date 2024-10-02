import React from "react";
import pdf from './assets/frontend.webp'



function PDFViewer() {

  return (
    <div className="bg-transparent flex flex-col justify-center items-center">
      <h2 className="Desc text-lg">My developer Roadmap</h2>
      <br />
      <img src={pdf} alt="My roadmap" id="RM" />
    </div>
  );
}

export default PDFViewer;
