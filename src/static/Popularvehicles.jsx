import React from 'react';
import VehiclesCard from '../components/VehicaclesCard';
import Pagetitle from '../components/Pagetitle';
import Pagination from '../components/Pagination';

const Popularvehicles = () => {
  return(
    <>
      <div className="container" id="vehicles">
        <Pagetitle title='Popular Vehicles' />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3 g-lg-3">
          <VehiclesCard 
            img='https://img.freepik.com/free-vector/white-convertible-car-isolated-white-vector_53876-66815.jpg?size=626&ext=jpg&ga=GA1.2.1882827254.1693242311&semt=sph'
            title='New Model'
            price= '62,000'
            features={['New','2021','Automatic','Petrol','183mph']}
          />
          <VehiclesCard
            img='https://img.freepik.com/premium-vector/sporting-car-illustration_104045-1007.jpg?w=740'
            title='New Model'
            price= '62,000'
            features={['New','2021','Automatic','Petrol','183mph']}
          />
          <VehiclesCard 
            img='https://img.freepik.com/free-vector/white-convertible-car-isolated-white-vector_53876-66815.jpg?size=626&ext=jpg&ga=GA1.2.1882827254.1693242311&semt=sph'
            title='New Model'
            price= '62,000'
            features={['New','2021','Automatic','Petrol','183mph']}
          />
          <VehiclesCard 
            img='https://img.freepik.com/premium-vector/sporting-car-illustration_104045-1007.jpg?w=740'
            title='New Model'
            price= '62,000'
            features={['New','2021','Automatic','Petrol','183mph']}
          />
          <VehiclesCard 
            img='https://img.freepik.com/free-vector/white-convertible-car-isolated-white-vector_53876-66815.jpg?size=626&ext=jpg&ga=GA1.2.1882827254.1693242311&semt=sph'
            title='New Model'
            price= '62,000'
            features={['New','2021','Automatic','Petrol','183mph']}
          />
          <VehiclesCard 
            img='https://img.freepik.com/premium-vector/sporting-car-illustration_104045-1007.jpg?w=740'
            title='New Model'
            price= '62,000'
            features={['New','2021','Automatic','Petrol','183mph']}
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

export default Popularvehicles;