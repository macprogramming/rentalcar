import React from "react";
import Pagetitle from "../components/Pagetitle";

const Contactus = () => {
  // var mapProp= {
  //   center:new google.maps.LatLng(51.508742,-0.120850),
  //   zoom:5,
  // };
  // var map = new google.maps.Map(map,mapProp);
  return(
    <>
      <div className="container my-3" id="contact">
        <Pagetitle title="Contact Us" />
        <div className="row">
          <div className="col-12 col-md-6">
            
          </div>
          <div className="col-12 col-md-6">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-white border-0 text-center">
                <h4 className="text-custom-primary m-0 my-2 fw-bold">Get In Touch</h4>
              </div>
              <div className="card-body">
                <form>
                  <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control form-input border-0" id="name" aria-describedby="emailHelp" placeholder="Name" />
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control form-input border-0" id="email" aria-describedby="emailHelp" placeholder="Email" />
                  </div>
                  <div class="mb-3">
                    <label for="subject" class="form-label">Subject</label>
                    <input type="text" class="form-control form-input border-0" id="subject" placeholder="subject" />
                  </div>
                  <div class="mb-3">
                    <label for="subject" class="form-label">Subject</label>
                    <textarea class="form-control form-input border-0" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" class="btn btn-custom-secondary w-25">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contactus;