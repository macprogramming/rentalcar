import React from "react";
import { AiTwotoneHome, AiFillCar, AiOutlineUsergroupAdd } from 'react-icons/ai';
import HomeCard from "./HomeCard";
const HomeCards = () => {
  return(
    <>
      <div className="bg-light my-4">
        <div className="container">
          <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
            <HomeCard 
              icon={AiTwotoneHome}
              total={'150+'}
              subTitle='Branches'
            />
            <HomeCard
              icon={AiFillCar}
              total={'4770+'}
              subTitle='Cars Sold'
            />
            <HomeCard
              icon={AiOutlineUsergroupAdd}
              total={'350+'}
              subTitle='Happy Clients'
            />
            <HomeCard
              icon={AiTwotoneHome}
              total={'150+'}
              subTitle='Branches'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeCards;