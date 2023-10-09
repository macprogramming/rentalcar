import React from 'react';
import Pagetitle from '../components/Pagetitle';
import Clientreviewcard from '../components/Clientreviewcard';

const Clientreview = () => {
  return(
    <>
      <div className="container my-3" id="reviews">
        <Pagetitle title="Client's Review" />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3 g-lg-3">
          <Clientreviewcard 
            username='John Deo'
            img='https://img.freepik.com/free-photo/portrait-happy-male-with-broad-smile_176532-8175.jpg?size=626&ext=jpg&ga=GA1.2.1882827254.1693242311&semt=sph'
            comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            rating= '5'
          />
          <Clientreviewcard 
            username='John Deo'
            img='https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.2.1882827254.1693242311&semt=sph'
            comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            rating= '4'
          />
          <Clientreviewcard 
            username='John Deo'
            img='https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?size=626&ext=jpg&ga=GA1.1.1882827254.1693242311&semt=sph'
            comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            rating= '3'
          />
        </div>
      </div>
    </>
  )
}

export default Clientreview;