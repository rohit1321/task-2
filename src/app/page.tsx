"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";



const tools = [
    {
        src: "assets/pdf/Link.svg",
        alt: "pdf quiz",
        text: "PDF to Quiz",
        path: "/pdf-tools/pdf-to-quiz",
    },
    {
        src: "assets/pdf/Link-1.svg",
        alt: "pdf summary",
        text: "PDF to Summary",
        path: "/pdf-tools/pdf-to-summary",
    },
    {
        src: "assets/pdf/Link-2.svg",
        alt: "pdf audio",
        text: "PDF to Audio",
        path: "/pdf-tools/pdf-to-audio",
    },
];

const PdfHomeComponent = () => {
    const router = useRouter();
    const [fileUrl, setFileUrl] = useState<string>("");
    const [fileName, setFileName] = useState<string>("");
    const smallSwiperRef = useRef<any>(null);

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            setFileUrl(objectUrl);
            setFileName(file.name);
        }
    };

    return (
        <section className="w-auto">
            <div className="d-flex justify-content-center pt-5">
                <h1 className="my-4">PDF Tools</h1>
            </div>
            <div className="container col-md-8 d-flex justify-content-center flex-column">
                <div className="w-100 d-flex justify-content-center flex-column my-4">
                    <h5 className="mb-3">Upload and attach PDF</h5>
                    <div className="bg-light-1 -dark-bg-dark-1 d-flex justify-content-center p-4">
                        <div className="upload-box text-center position-relative">
                            <div className="upload-img-container my-3">
                                <Image
                                    src="assets/pdf/upload-cloud-02.svg"
                                    alt="upload"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <p className="text-dark-1">
                                <span>Click to upload</span> or drag and drop
                            </p>
                            <p className="text-dark-1">PDF (max. 10MB)</p>

                            <input
                                type="file"
                                accept="application/pdf"
                                className="form-control position-absolute top-0 start-0 w-100 h-100 opacity-0"
                                id="pdf-upload"
                                aria-label="Upload PDF"
                                onChange={handleFileUpload}
                            />
                        </div>
                    </div>

                    {fileName && (
                        <div className="mt-3">
                            <p className="text-dark-1">Selected file: <strong>{fileName}</strong></p>
                        </div>
                    )}

                    <h5 className="my-4">Select Tool</h5>
                </div>

                {/* Swiper for small screens */}
                <div className="d-block d-lg-none ">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        // modules={[Autoplay]}
                        // autoplay={{
                        //   delay: 1000,
                        //   disableOnInteraction: false,
                        // }}
                        breakpoints={{
                            480: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                        }}
                        loop={true}
                        onSwiper={(swiper) => (smallSwiperRef.current = swiper)}
                    >
                        {tools.map((tool, index) => (
                            <SwiperSlide
                                key={index}
                                className="d-flex align-items-center justify-content-center"
                            >
                                <div className="cursor-pointer  col-10 m-3 p-3">
                                    <div className="gap-2 d-flex flex-column ">
                                        <div>
                                            <Image
                                                className="col-12 rounded-3"
                                                src={tool.src}
                                                alt={tool.alt}
                                                height={260}
                                                width={240}
                                            />
                                        </div>
                                        <div
                                            className="col-8 bg-transparent border-0 d-flex flex-column justify-content-end p-3 position-absolute start-50 translate-middle"
                                            style={{ top: "80%" }}
                                        >
                                            <button
                                                className="btn bg-light-1 -dark-bg-dark-1 text-dark-1 mt-2 border"
                                            >
                                                Try Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div
                        className="position-absolute rounded-circle card-box-shadow"
                        style={{ marginTop: "-18rem", zIndex: "1" }}
                    >
                        <button
                            className="btn bg-white rounded-circle"
                            onClick={() => smallSwiperRef.current?.slidePrev()}
                        >
                            &lt;
                        </button>
                    </div>
                    <div
                        className="position-absolute card-box-shadow rounded-circle"
                        style={{
                            right: "0",
                            marginTop: "-18rem",
                            zIndex: "1",
                        }}
                    >
                        <button
                            className="btn bg-white rounded-circle"
                            onClick={() => smallSwiperRef.current?.slideNext()}
                        >
                            &gt;
                        </button>
                    </div>
                </div>

                {/* for large screen  */}
                <div className="d-flex w-100 justify-content-center gap-4 mb-5 d-none d-lg-flex">
                    {tools.map((tool, index) => (
                        <div
                            className="text-black col-lg-3 col-md-6 col-12 p-0 position-relative"
                            key={index}
                        >
                            <Image
                                src={tool.src}
                                className="card-img"
                                alt={tool.alt}
                                width={500}
                                height={200}
                            />
                            <div
                                className="col-8 bg-transparent border-0 d-flex flex-column justify-content-end p-3 position-absolute start-50 translate-middle"
                                style={{ top: "80%" }}
                            >
                                <button
                                    className="btn bg-light-1 -dark-bg-dark-1 text-dark-1 mt-2 border"
                                >
                                    Try Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PdfHomeComponent;
