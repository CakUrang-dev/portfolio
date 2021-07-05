import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import Title from "../components/Title";

import { connect } from "react-redux";

const Contact = (props) => {
  const { isOpen, container } = props;
  return (
    <Layout
      title="Contact"
      className={`${
        isOpen ? "sm:ml-60 xl:ml-72 overflow-hidden" : "sm:ml-0"
      } min-h-screen relative transition-all duration-300`}
    >
      <Sidebar />
      <div className={`${container} pb-28 sm:pb-14`}>
        <Title title="My Contact"/>
        <div className="mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987.7875557379587!2d112.69132182915969!3d-7.983417671533219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTknMDAuMyJTIDExMsKwNDEnMzAuNyJF!5e0!3m2!1sid!2sid!4v1613044930569!5m2!1sid!2sid"
            className="w-full h-72 xl:h-96"
          >
          </iframe>
        </div>
        <div className="text-center mt-4">
          <p className="oswald uppercase text-lg md:text-2xl lg:text-3xl xl:text-4xl">cemorokandang - malang, indonesia</p>
          <p className="rubik text-sm sm:text-base">JL. Raya Cemorokandang No 28 RT 1 RW 3</p>
          <p className="rubik text-sm sm:text-base mt-1">+62 838 9378 6613 | irgihakimmuhammad@gmail.com</p>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.sidebar.sidebarIsOpen,
  container: state.root.containerClass,
});

export default connect(mapStateToProps, null)(Contact);
