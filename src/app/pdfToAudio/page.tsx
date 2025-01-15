'use client';
import Image from "next/image";
import "../style/pdfToAudio.css";
import P from "./audio"

export default function PDFViewerPage() {
    return (
        <div className="container my-5">
            <div className="row">

                <div className="col-lg-6 col-12 p-3 border-end">

                </div>
                {/* Summary Section */}
                <div className="col-lg-6 col-12 p-3">
                    <div className="Audio-section">
                        <div className="d-flex justify-content-between mb-4">
                            <h4 className="mb-3">Audio</h4>
                            <button className="btn btn-sec mb-3 Download-audio">Download Audio</button>
                        </div>
                        <div className="Audio-container ">
                            <div className="d-flex justify-content-center my-4">
                                <Image
                                    src="/pdfToAudio/Audio.gif"
                                    className="icon-img  "
                                    alt="..."
                                    width={300}
                                    height={300}
                                />
                            </div>
                            <div>
                                <P />
                            </div>
                        </div>

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
