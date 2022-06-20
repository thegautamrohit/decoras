import React from "react";
import Header from "./commonComponents/Header/Header";
import Footer from "./commonComponents/Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
