import React from "react";

const Servicecard = (props) => {
  return(
    <>
      <div className="col">
        <div className="card text-center border-0 shadow-sm">
          <div className="icon my-3">
            <props.icon />
          </div>
          <div className="card-body">
            <h5 className="card-title fw-bold">{props.title}</h5>
            <p className="card-text text-muted">{props.description}</p>
          </div>
          <div className="card-footer bg-white border-0">
            <button type="button" className="btn btn-sm btn-custom-secondary">Read More</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Servicecard;