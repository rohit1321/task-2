"use client";

import React, { useRef, useEffect } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";

const Pdfcom = () => {
  const containerRef = useRef(null);

  const pageNavigationPluginInstance = pageNavigationPlugin();

  const {
    GoToFirstPageButton,
    GoToLastPageButton,
    GoToNextPageButton,
    GoToPreviousPageButton,
    CurrentPageInput,
  } = pageNavigationPluginInstance;

  // Set worker URL for pdf.js
  useEffect(() => {
    if (typeof window !== "undefined" && window.pdfjsLib) {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
    }
  }, []);

  return (
    <div>
      {/* PDF Viewer Section */}
      <div
        ref={containerRef}
        style={{
          height: "70vh",
          overflowY: "auto",
          border: "1px solid #ddd",
          padding: "16px",
        }}
      >
        <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
          <Viewer
            fileUrl="/Publish_Paper.pdf"
            plugins={[pageNavigationPluginInstance]}
          />
        </Worker>
      </div>

      {/* Navigation Controls */}
      <div className="d-flex justify-content-center mt-3 gap-2">
        <GoToFirstPageButton />
        <GoToPreviousPageButton />
        <CurrentPageInput />
        <GoToNextPageButton />
        <GoToLastPageButton />
        
      </div>
    </div>
  );
};

export default Pdfcom;
