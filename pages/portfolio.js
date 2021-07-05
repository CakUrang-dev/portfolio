import React, { useState } from "react";

import Layout from "../components/Layout";
import PortfolioComponent from "../components/PortfolioComponent";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";
import ModalBox from "../components/ModalBox";

import { connect } from "react-redux";

const Portfolio = (props) => {
  const { container, isOpen, images, modals } = props;

  const [item, setitem] = useState(0);

  const replaceModalItem = (index) => {
    setitem(index);
  };

  const modalData = modals[item];

  return (
    <Layout
      title="Portfolio"
      className={`${
        isOpen ? "sm:ml-60 xl:ml-72 sm:overflow-hidden" : "sm:ml-0"
      } min-h-screen relative transition-all duration-300`}
    >
      <Sidebar />
      <div className={`${container} pb-32`}>
        <Title title="My Portfolio" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 grid-flow-row">
          {images.map((image, index) => {
            return (
              <div onClick={() => replaceModalItem(index)}>
                <PortfolioComponent
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  title={image.title}
                />
              </div>
            );
          })}
        </div>
      </div>
      <ModalBox
        title={modalData.title}
        src={modalData.src}
        alt={modalData.alt}
        techs={modalData.tech}
        desc={modalData.desc}
      />
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.sidebar.sidebarIsOpen,
  container: state.root.containerClass,
  images: state.portfolio.portfolioItem,
  modals: state.portfolio.modalPortfolio,
});

export default connect(mapStateToProps, null)(Portfolio);
