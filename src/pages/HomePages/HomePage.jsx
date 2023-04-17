import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Header2 from "../../components/Header/Header2";
import { FeaturedArea } from "../../components/FeaturedArea";
import { AboutUs } from "../../components/AboutUs";


const HomePage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>097uni.x.gbu</title>
      </Helmet>
      <Header2></Header2>
      <FeaturedArea></FeaturedArea>
      <AboutUs></AboutUs>
    </Fragment>
  );
};

export default HomePage;
