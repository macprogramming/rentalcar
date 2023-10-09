import React from 'react';
import Pagetitle from '../components/Pagetitle';

const Latestupdate = () => {
  return(
    <>
      <div className='bgimg_latest d-flex justify-content-center align-items-center'>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 offset-md-2 text-center text-white">
              <Pagetitle title='Subscribe For Updates' />
              <p>Lorem Ipsum Dolor Sit Amet Consectetur Adisisicing Elit.</p>
              <form>
                <div class="mb-3 custom-input">
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <button type="button" className='btn btn-md btn-custom-secondary'>Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Latestupdate;