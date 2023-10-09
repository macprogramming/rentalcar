import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillPinMapFill } from 'react-icons/bs'
import { AiOutlineArrowRight, AiOutlinePhone, AiOutlineMail, AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'

const Footer = () => {
  return(
    <>
      <div className="bg-custom-secondary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 g-lg-3">
            <div className="col">
              <h6 className="text-black fw-bold">Our Branches</h6>
              <ul className="p-0">
                <NavLink activeClassName="active" className="nav-link align-items-center d-flex"><BsFillPinMapFill />&nbsp;India</NavLink>
                <NavLink activeClassName="active" className="nav-link align-items-center d-flex"><BsFillPinMapFill />&nbsp;Japan</NavLink>
                <NavLink activeClassName="active" className="nav-link align-items-center d-flex"><BsFillPinMapFill />&nbsp;France</NavLink>
                <NavLink activeClassName="active" className="nav-link align-items-center d-flex"><BsFillPinMapFill />&nbsp;Russia</NavLink>
                <NavLink activeClassName="active" className="nav-link align-items-center d-flex"><BsFillPinMapFill />&nbsp;USA</NavLink>
              </ul>
            </div>
            <div className="col">
              <h6 className="text-black fw-bold">Quick Links</h6>
              <ul className="p-0">
                <NavLink to='/' activeClassName="active" className="nav-link align-items-center d-flex"><AiOutlineArrowRight />&nbsp;Home</NavLink>
                <NavLink to='/vehicles' activeClassName="active" className="nav-link align-items-center d-flex"><AiOutlineArrowRight />&nbsp;Vehicles</NavLink>
                <NavLink to='/services' activeClassName="active" className="nav-link align-items-center d-flex"><AiOutlineArrowRight />&nbsp;Services</NavLink>
                <NavLink to='/featured' activeClassName="active" className="nav-link align-items-center d-flex"><AiOutlineArrowRight />&nbsp;Featured</NavLink>
                <NavLink to='/reviews' activeClassName="active" className="nav-link align-items-center d-flex"><AiOutlineArrowRight />&nbsp;Reviews</NavLink>
                <NavLink to='/contact' activeClassName="active" className="nav-link align-items-center d-flex"><AiOutlineArrowRight />&nbsp;Contact</NavLink>
              </ul>
            </div>
            <div className="col">
              <h6 className="text-black fw-bold">Contact Info</h6>
              <ul className="p-0">
                <NavLink activeClassName="active" className="nav-link align-items-center d-flex"><AiOutlinePhone />&nbsp;+123-456-7890</NavLink>
                <NavLink activeClassName="active" className="nav-link align-items-center d-flex"><AiOutlinePhone />&nbsp;+123-456-7890</NavLink>
                <NavLink activeClassName="active" className="nav-link align-items-center d-flex"><AiOutlineMail />&nbsp;macprogramming@gmail.com</NavLink>
                <NavLink activeClassName="active" className="nav-link align-items-center d-flex"><BsFillPinMapFill />&nbsp;Mumbai, India, 421001</NavLink>
              </ul>
            </div>
            <div className="col">
              <h6 className="text-black fw-bold">Contact Info</h6>
              <ul className="p-0">
                <NavLink activeClassName="active" className="nav-link align-items-center d-flex"><AiOutlineFacebook />&nbsp;Facebook</NavLink>
                <NavLink activeClassName="active" className="nav-link align-items-center d-flex"><AiOutlineTwitter />&nbsp;Twitter</NavLink>
                <NavLink activeClassName="active" className="nav-link align-items-center d-flex"><AiOutlineInstagram />&nbsp;Instagram</NavLink>
                <NavLink activeClassName="active" className="nav-link align-items-center d-flex"><AiOutlineLinkedin />&nbsp;Linkedin</NavLink>
              </ul>
            </div>
          </div><hr />
          <div className="row">
            <div className="col-12 text-center">
              <p>Created by macprogramming | All Right Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;