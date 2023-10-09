import React from "react";
import { BsFillCircleFill } from 'react-icons/bs'
const VehiclesCard = (props) => {
  return(
    <>
      <div className="col mh-100">
        <div className='card text-center h-100 border-0 shadow-sm'>
          <img src={props.img} class="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="fw-bold">{props.title}</h6>
            <div>
              <small className="text-muted">Price :</small><span className='text-custom-secondary'>${props.price}/-</span>
            </div>
          </div>
          <div className="card-footer bg-white">
            <ul className="row row-cols-2 row-cols-lg-3 g-2 g-lg-1">
              {
                props.features.map((item) => {
                  return(
                    <div className="col d-flex justify-content-start align-items-center"><BsFillCircleFill fontSize={10} color='#FFAA01' />&nbsp;<span>{item}</span></div>
                  )
                })
              }
            </ul>
            <button type="button" className="btn btn-sm btn-custom-secondary mb-2">Check Out</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default VehiclesCard;