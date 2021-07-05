import Image from "next/image";

import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

import {connect} from "react-redux";


const Home = (props) => {
  const {isOpen, icons, container} = props;
  return (
    <Layout
      title="Home"
      className={`${
        isOpen ? "sm:ml-60 xl:ml-72 overflow-hidden" : "sm:ml-0"
      } min-h-screen bg-gray-200 sm:bg-transparent relative transition-all duration-300`}
    >
      <Sidebar />
      {/* Bg Image*/}
      <div className="">
        <div
          className={`${
            isOpen ? "-right-40 lg:h-2/4" : "right-0 "
          } absolute top-0 sm:w-64 md:w-72 lg:w-96 sm:h-4/6 lg:h-3/4 bg-black transition-all duration-300`}
        ></div>
        <div
          className={`${
            isOpen ? "-right-32 lg:h-2/4" : "right-7 "
          } absolute top-7 sm:w-64 md:w-72 lg:w-96 sm:h-4/6 lg:h-3/4 bg-gray-400 transition-all duration-300 shadow-2xl`}
        >
          <Image
            src="/img/img.jpg"
            layout="fill"
            objectFit="cover"
            alt="Muhammad Irgi Hakim"
          />
        </div>
      </div>
      {/* Profile Image */}
      <div className="relative sm:hidden bg-black rounded-full mx-auto mt-20 w-44 h-44 border-4 border-white overflow-hidden shadow-2xl">
        <Image
          src="/img/img.jpg"
          layout="fill"
          objectFit="cover"
          alt="Muhammad Irgi Hakim"
        />
      </div>

      {/* Hero Content */}
      <div className={`${container} pb-32 sm:0`}>
        <h1 className="subpixel-antialiased mt-6 sm:mt-12 text-center sm:text-left text-4xl sm:text-4xl md:text-5xl xl:text-7xl oswald sm:w-3/5 ">
          Hello, my name is <br /> Muhammad Irgi Hakim
        </h1>
        <p className="mt-4 text-center text-base lg:text-lg xl:text-2xl rubik sm:text-left sm:w-3/5">
          I’am a professional full-stack developer from indonesia. my
          specializies in front-end developer. I always give the best effort for
          each projects I did. I give a solution with my creative app
        </p>
        <div className="mt-5 xl:mt-6">
          {/* Socmed Icons */}
          <div className="flex justify-center sm:justify-start relative">
            {icons.map((icon) => {
              return (
                <a className="mr-2 sm:mr-3 cursor-pointer" key={icon.id} href={icon.href} target="_blank">
                  <Image
                    src={icon.path}
                    width={40}
                    height={40}
                    alt="Pixel Perfect"
                    layout="intrinsic"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.sidebar.sidebarIsOpen,
  icons: state.home.homeSocialIcon,
  container: state.root.containerClass,
});

export default connect(mapStateToProps, null)(Home);
