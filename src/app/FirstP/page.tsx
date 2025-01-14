import "../style/pdftosummary.css";
import Image from "next/image";


export default function PDFTools() {
  return (
    <section className="bgcolor vh-100 w-auto ">

      {/* Main Section */}

      <div className="d-flex  justify-content-center "><h1 className="my-4">PDF Tools</h1></div>

      <div className="container my-4">
        <h5>Upload and attach PDF</h5>

        <div className="upload-section d-flex  justify-content-center p-4 ">
          <div className="upload-box ">
            <div className="upload-img-container  d-flex justify-content-center justify-item-center  my-3"><img className="upload-img" src="/pdfs/upload-cloud-02.svg" alt="upload" /></div>
            <div className="text-center"><span className="up-color">Click to upload</span> or drag and drop</div>
            <p className="note text-center">PDF (max. 10mb)</p>
          </div>
        </div>

        <h5 className="my-4">Select Tool</h5>

        </div>
        <div className="d-flex row col-12 justify-content-center container-fluid m-5 gap-2 h-auto w-100  ">
         
          <div className="card  text-black  col-lg-4 col-md-6   p-0 ">
            <Image
              src="/pdfs/Link.svg"
              className="card-img"
              alt="..."
              width={500} // Replace 300 with your desired width
              height={200} // Replace 150 with your desired height
            />
            <div className="card-img-overlay d-flex flex-column justify-content-end" style={{ padding: '1rem' }}>
                {/* <h5 className="card-title">PDF To Audio</h5> */}
              <button className="btn btn-primary mt-2">Try Now</button>
           </div>
          </div>

          <div className="card  text-black  col-lg-4 col-md-6  p-0 ">
            <Image
              src="/pdfs/Link-1.svg"
              className="card-img"
              alt="..."
              width={500} // Replace 300 with your desired width
              height={200} // Replace 150 with your desired height
 />
            <div className="card-img-overlay d-flex flex-column justify-content-end" style={{ padding: '1rem' }}>
                {/* <h5 className="card-title">PDF To Audio</h5> */}
              <button className="btn btn-primary mt-2">Try Now</button>
            </div>
          </div>

          <div className="card  text-black  col-lg-4 col-md-6  p-0 ">
            <Image
              src="/pdfs/Link-2.svg"
              className="card-img"
              alt="..."
              width={500} // Replace 300 with your desired width
              height={200} // Replace 150 with your desired height
            />
            <div className="card-img-overlay d-flex flex-column justify-content-end" style={{ padding: '1rem' }}>
              {/* <h5 className="card-title">PDF To Audio</h5> */}
              <button className="btn btn-primary mt-2">Try Now</button>
            </div>
          </div>
        </div> 
    </section>
  );
}