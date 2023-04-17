import React from "react";
import { Helmet } from "react-helmet";
import { Header2 } from "../../components/Header";
import { PageTitle } from "../../components/PageTitle";

const ErrorPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>
          Error Page - 097uni.x.gbu
        </title>
      </Helmet>
      {/* <Header2></Header2> */}
      <PageTitle
        title="Pagina inesistente - Sito in costruzione"
        hometitle="Home"
        homeURL="/"
        currentPage="Error 404"
      ></PageTitle>
    </React.Fragment>
  );
};

export default ErrorPage;
