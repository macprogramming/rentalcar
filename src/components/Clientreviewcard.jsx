import React from 'react';
import { BiSolidStar } from 'react-icons/bi'

const Clientreviewcard = (props) => {
  const rating = props.rating;
  const starArr = [];
  for(let i=0; i < rating; i++) {
    starArr.push(i)
  }
  return(
    <>
      <div className="col mh-100">
        <div className='card text-center h-100 border-0 shadow-sm'>
          <img src={props.img} class="user_img rounded-circle" alt="..." />
          <div className="card-body">
            <p>{props.comment}</p>
            <h6 className="fw-bold">{props.username}</h6>
            <div className="d-flex justify-content-center my-2">
              {
                starArr.map((item) => {
                  return(
                    <BiSolidStar fontSize={14} color='#FFAA01' />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Clientreviewcard;