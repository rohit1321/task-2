'use client';
import Image from "next/image";
import "../style/pdft.css";
import { pdfjs } from 'react-pdf';

// Set the worker source
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

import Pdfcom from "./pdf"


export default function PDFViewerPage() {
  return (
    <div className="container my-5">
      <div className="row">
        {/* PDF Viewer Section */}
        <div className="col-lg-6 col-12 p-3 border-end">
          <div className="pdf-viewer border rounded">
            {/* Replace this image with an actual PDF viewer */}
            <div className="d-flex  justify-content-between">
              <div className="mx-2"><h5>PDF-Name</h5></div>
              <div className="d-flex gap-2 mx-3">
              <Image
                  src="/pdf-icons/SVG.svg"
                  className="icon-img"
                  alt="..."
                  width={15} 
                  height={15}
                />

                <Image
                  src="/pdf-icons/Vector.svg"
                  className="icon-img"
                  alt="..."
                  width={15} 
                  height={15}
                />
                <Image
                  src="/pdf-icons/Vector-1.svg"
                  className="icon-img"
                  alt="..."
                  width={15} 
                  height={15}
                />
                 <Image
                  src="/pdf-icons/Img - delete.svg"
                  className="icon-img"
                  alt="..."
                  width={15} 
                  height={15}
                />
                <Image
                  src="/pdf-icons/Audio.svg"
                  className="icon-img"
                  alt="..."
                  width={15} 
                  height={15} 
                />
              </div>
            </div>
            <Pdfcom />

          </div>
        
        </div>

        {/* Summary Section */}
        <div className="col-lg-6 col-12 p-3">
          <div className="summary-section">
            <div className="d-flex justify-content-between">
              <h4 className="mb-3">Summary</h4>
              <button className="btn btn-sec mb-3">Download Summary</button>
            </div>
            <p>
              This book explores network-centric innovation, emphasizing how
              companies can harness external networks and relationships to
              foster innovation. It addresses questions like the approaches to
              utilizing external networks, the types of innovation projects
              suited for these approaches, and how organizations can
              effectively design and manage their innovation networks.
            </p>
            <ul>
              <li>
                Organizational capabilities required for network-based
                innovation.
              </li>
              <li>
                Benefits, risks, and success metrics of opening up innovation
                processes.
              </li>
              <li>Protecting intellectual property while collaborating.</li>
            </ul>

          </div>

          {/* Additional Features */}
          <div className="mt-4">
            <h5>Try Other Tasks</h5>
            <div className="d-flex justify-content-start gap-3">
              <div className="card  text-black  col-lg-4   p-0 ">
                <Image
                  src="/pdfs/Link-1.svg"
                  className="card-img"
                  alt="..."
                  width={500} // Replace 300 with your desired width
                  height={200} // Replace 150 with your desired height
                />
                <div className="card-img-overlay d-flex flex-column justify-content-end" style={{ padding: '1rem' }}>
                  <button className="btn btn-primary mt-2">Try Now</button>
                </div>
              </div>

              <div className="card  text-black  col-lg-4   p-0 ">
                <Image
                  src="/pdfs/Link-1.svg"
                  className="card-img"
                  alt="..."
                  width={500} // Replace 300 with your desired width
                  height={200} // Replace 150 with your desired height
                />
                <div className="card-img-overlay d-flex flex-column justify-content-end" style={{ padding: '1rem' }}>
                  <button className="btn btn-primary mt-2">Try Now</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
