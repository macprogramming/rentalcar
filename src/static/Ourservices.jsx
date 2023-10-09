import React from "react";
import Pagetitle from "../components/Pagetitle";
import Servicecard from "../components/Servicecard";
import { BsFillCarFrontFill } from 'react-icons/bs';
import { AiOutlineSetting, AiTwotoneCar } from 'react-icons/ai'
import { BiSolidCarBattery, BiSolidGasPump, BiSupport } from 'react-icons/bi'
const Ourservice = () => {
  return(
    <>
      <div className="container" id="services">
        <Pagetitle title='Our Services' />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3 g-lg-3">
          <Servicecard 
            icon={BsFillCarFrontFill}
            title='Car Selling'
            description='Lorem Ipsum Dolor Sit Amet Consectetur Adisisicing Elit.'
          />
          <Servicecard 
            icon={AiOutlineSetting}
            title='Parts Repair'
            description='Lorem Ipsum Dolor Sit Amet Consectetur Adisisicing Elit.'
          />
          <Servicecard 
            icon={AiTwotoneCar}
            title='Car Insurance'
            description='Lorem Ipsum Dolor Sit Amet Consectetur Adisisicing Elit.'
          />
          <Servicecard 
            icon={BiSolidCarBattery}
            title='Battery Replacement'
            description='Lorem Ipsum Dolor Sit Amet Consectetur Adisisicing Elit.'
          />
          <Servicecard 
            icon={BiSolidGasPump}
            title='Oil Change'
            description='Lorem Ipsum Dolor Sit Amet Consectetur Adisisicing Elit.'
          />
          <Servicecard 
            icon={BiSupport}
            title='24/7 Support'
            description='Lorem Ipsum Dolor Sit Amet Consectetur Adisisicing Elit.'
          />
        </div>
      </div>
    </>
  )
}

export default Ourservice;