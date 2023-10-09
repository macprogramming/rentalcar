import React from "react";

const Pagetitle = (props) => {
  return(
    <>
      <div className="row text-center">
        <h1 className='text-custom-primary fw-bold'>{props.title}</h1>
      </div>
    </>
  )
}

export default Pagetitle;