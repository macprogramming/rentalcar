import React from "react";
import { AiTwotoneHome } from 'react-icons/ai'

const HomeCard = (props) => {
  return(
    <>
      <div className="col">
        <div className="card mb-3 border-0 shadow-sm">
          <div className="row g-0 text-center justify-content-center align-items-center">
            <div className="col-md-4 h-100">
              <div className="icon">
                <props.icon />
              </div>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-custom-secondary fw-bold">{props.total}</h5>
                <p className="card-text text-muted">{props.subTitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeCard;