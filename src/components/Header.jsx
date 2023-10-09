import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { AiOutlineMail, AiOutlineLock, AiOutlineUser, AiOutlinePhone } from 'react-icons/ai'
const Header = () => {
  const [open, setOpen] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const openModal = () => {
    setOpen(true)
    setOpenSignup(false);
  }
  const handleClose = () => {
    setOpen(false);
    setOpenSignup(false);
  }

  const openSignupmodal = () => {
    setOpen(false)
    setOpenSignup(true);
  }
  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            Max<span>Wheels</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            {/* <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll custom-nav-pills">
              <li className="nav-item">
                <NavLink to='/' activeClassName="active" className="px-3 nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/vehicles' activeClassName="active" className="px-3 nav-link">Vehicles</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/services' activeClassName="active" className="px-3 nav-link">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/featured' activeClassName="active" className="px-3 nav-link">Featured</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/reviews' activeClassName="active" className="px-3 nav-link">Reviews</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/contact' activeClassName="active" className="px-3 nav-link">Contact</NavLink>
              </li>
            </ul> */}
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" aria-current="page" href="#home">Home</a>
              <a className="nav-link" href="#vehicles">Vehicles</a>
              <a className="nav-link" href="#services">Services</a>
              <a className="nav-link" href="#featured">Featured</a>
              <a className="nav-link" href="#reviews">Reviews</a>
              <a className="nav-link" href="#contact">Contact</a>
            </div>
            <button type="button" className="btn btn-sm btn-custom-secondary" onClick={openModal}>Login</button>
          </div>
        </div>
      </nav>
      <Modal show={open} onHide={handleClose} size="sm" centered>
        <Modal.Header closeButton className="text-center">
          <h5 className="text-custom-secondary m-0  fw-bold">User Login</h5>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <div className="form-group">
                <input type="email" className="form-control border-0" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <AiOutlineMail />
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <div className="form-group">
                <input type="password" className="form-control border-0 form-input" id="exampleInputPassword1" />
                <AiOutlineLock />
              </div>
            </div>
            <div className="mb-3 text-center">
              <a href="" className="text-decoration-none text-secondary">Forget Your Password <span className="text-custom-secondary">Click Here</span></a>
            </div>
            <button type="submit" className="btn btn-sm btn-custom-secondary d-block w-100 my-2">Login</button>
            <div className="text-center">
              <a onClick={openSignupmodal} className="text-decoration-none text-secondary cursor">Don't Have An Account <span className="text-custom-secondary">Create One</span></a>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      <Modal show={openSignup} onHide={handleClose} size="md" centered>
        <Modal.Header closeButton className="text-center">
          <h5 className="text-custom-secondary m-0  fw-bold">User Signup</h5>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label for="firstName" className="form-label">First Name</label>
                  <div className="form-group">
                    <input type="text" className="form-control border-0" id="firstName" placeholder="First Name" aria-describedby="emailHelp" />
                    <AiOutlineUser />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label for="lastName" className="form-label">Last Name</label>
                  <div className="form-group">
                    <input type="text" className="form-control border-0" id="lastName" placeholder="Last Name" aria-describedby="emailHelp" />
                    <AiOutlineUser />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label for="email" className="form-label">Email</label>
                  <div className="form-group">
                    <input type="email" className="form-control border-0" id="email" placeholder="Email" aria-describedby="emailHelp" />
                    <AiOutlineMail />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label for="phoneNumber" className="form-label">Phone Number</label>
                  <div className="form-group">
                    <input type="text" className="form-control border-0" id="phoneNumber" placeholder="Phone Number" aria-describedby="emailHelp" />
                    <AiOutlinePhone />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label for="password" className="form-label">Password</label>
                  <div className="form-group">
                    <input type="password" className="form-control border-0 form-input" placeholder="Password" id="password" />
                    <AiOutlineLock />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label for="confirmpassword" className="form-label">Confirm Password</label>
                  <div className="form-group">
                    <input type="password" className="form-control border-0 form-input" placeholder="Confirm Password" id="confirmpassword" />
                    <AiOutlineLock />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label for="role" className="form-label">Role</label>
                  <div className="form-group">
                    <select class="form-select" id="role" aria-label="Default select example">
                      <option selected>Open this select menu</option>
                      <option value="Admin">Admin</option>
                      <option value="User">User</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label for="gender" className="form-label">Gender</label>
                  <div className="form-group">
                    <select class="form-select" id="gender" aria-label="Default select example">
                      <option selected>Open this select menu</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-sm btn-custom-secondary d-block w-50 float-end my-2">Sign In</button><br /><br />
            <div className="text-center">
              <a onClick={openModal} className="text-decoration-none text-secondary cursor">Allready have an Account <span className="text-custom-secondary">Create One</span></a>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Header;