import React from "react";
import Pagetitle from "../components/Pagetitle";
import FeaturecarsCard from "../components/FeaturecarsCard";
import Pagination from "../components/Pagination";

const FeatureCars = () => {
  return(
    <>
      <div className="container my-3" id="featured">
        <Pagetitle title='Featured Cars' />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-sm-3 row-cols-lg-4 g-3 g-lg-3">
          <FeaturecarsCard 
            img='https://img.freepik.com/free-vector/white-convertible-car-isolated-white-vector_53876-66815.jpg?size=626&ext=jpg&ga=GA1.2.1882827254.1693242311&semt=sph'
            title='New Model'
            price= '62,000'
            rating={5}
          />
          <FeaturecarsCard 
            img='https://img.freepik.com/premium-vector/sporting-car-illustration_104045-1007.jpg?w=740'
            title='New Model'
            price= '62,000'
            rating={4}
          />
          <FeaturecarsCard 
            img='https://img.freepik.com/free-vector/white-convertible-car-isolated-white-vector_53876-66815.jpg?size=626&ext=jpg&ga=GA1.2.1882827254.1693242311&semt=sph'
            title='New Model'
            price= '62,000'
            rating={3}
          />
          <FeaturecarsCard 
            img='https://img.freepik.com/premium-vector/sporting-car-illustration_104045-1007.jpg?w=740'
            title='New Model'
            price= '62,000'
            rating={5}
          />
        </div>
        <div className="row">
          <div className="col-12 ms-end">
            <Pagination />
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureCars;