import React from "react";

const Pagination = () => {
  return(
    <>
      <div className="row">
        <div className="col-12 ms-end">
          <nav aria-label="...">
            <ul className="pagination custom-pagination float-end m-0 my-3">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
              </li>
              <li className="page-item active"><a className="page-link" href="#">1</a></li>
              <li className="page-item" aria-current="page">
                <a className="page-link" href="#">2</a>
              </li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Pagination;