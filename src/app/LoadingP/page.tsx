import "../style/LoadingP.css";

export default function Home() {
  return (
    <section >
      <div className=" pdf-to-summary ">
      <div className="d-flex justify-content-center align-item vh-100">
        <div className="text-center container">
          <h1 className="text mt-5">PDF To Summary</h1>
          <p className="text-muted">Please wait while we generate result</p>
          {/* Replace spinner-grow with the loading GIF */}
          <img
            src='/Untitled-design-2--unscreen.gif' // Update this path to your GIF file
            alt="Loading..."
            style={{ width: '100', height: '100' }} // Adjust size as needed

          />
          <div className="progress mt-4" style={{ height: '10px', width: '50%', margin: '0 auto' }}>
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              style={{ width: '25%' }}>
              </div>
          </div>
          <p className="mt-2 text-muted">This might take a few minutes</p>
        </div>
      </div>
      </div>
    </section>
  );
}