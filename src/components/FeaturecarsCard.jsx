import React from "react";
import { BiSolidStar } from 'react-icons/bi'

const FeaturecarsCard = (props) => {
  const rating = props.rating;
  const starArr = [];
  for(let i=0; i < rating; i++) {
    starArr.push(i)
  }
  return(
    <>
      <div className="col mh-100">
        <div className='card text-center h-100 border-0 shadow-sm'>
          <img src={props.img} class="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="fw-bold">{props.title}</h6>
            <div className="d-flex justify-content-center my-2">
              {
                starArr.map((item) => {
                  return(
                    <BiSolidStar fontSize={14} color='#FFAA01' />
                  )
                })
              }
            </div>
            <div>
              <small className="text-muted">Price :</small><span className='text-custom-secondary'>${props.price}/-</span>
            </div>
          </div>
          <div className="card-footer bg-white border-0 m-0">
            <button type="button" className="btn btn-sm btn-custom-secondary mb-2">Check Out</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturecarsCard;