import React from "react";
const Home = () => {
  return(
    <>
      <div className="container-fluid child_center wh-90" id="home">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="text-uppsercase fw-bold font-500 text-custom-secondary">Find Your Car</h1>
            <img className="img img-fluid" src="https://img.freepik.com/free-vector/white-convertible-car-isolated-white-vector_53876-66815.jpg?size=626&ext=jpg&ga=GA1.2.1882827254.1693242311&semt=sph" alt="" />
            <div>
              <button type="button" className="btn btn-md btn-custom-secondary">Expolore Cars</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;