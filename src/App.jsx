import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import HomeCard from './components/HomeCards';
import Popularvehicles from "./static/Popularvehicles";
import Ourservice from "./static/Ourservices";
import FeatureCars from "./static/Featurecars";
import Latestupdate from "./static/Latestupdate";
import Clientreview from "./static/Clientreview";
import Contactus from "./static/Contactus";
import Footer from "./static/Footer";

const App = () => {
  return(
    <>
      <Header />
      <Home />
      <HomeCard />
      <Popularvehicles />
      <Ourservice />
      <FeatureCars />
      <Latestupdate />
      <Clientreview />
      <Contactus />
      <Footer />
    </>
  )
}

export default App;