import {VscMenu, VscChromeClose} from "react-icons/vsc";
import {connect} from "react-redux";
import Link from "next/link";

const Sidebar = (props) => {
  const {isOpen, handleIsOpen, dataLink} = props;
  const sidebar =
    "h-full fixed z-50 top-0 left-0 bg-black flex flex-col transition-all duration-300";
  const sbLink =
    "text-white justify-center flex p-3 sm:p-4 xl:p-6 text-xl xl:text-4xl rubik sm:text-3xl subpixel-antialiased";
  return (
    <div >
      <div className="pl-3 pt-3 sm:pl-5 sm:pt-5">
        <button className="focus:outline-none" onClick={handleIsOpen}>
          {!isOpen ? (
            <VscMenu className="text-3xl sm:text-4xl" />
          ) : (
            <VscChromeClose className="text-3xl sm:text-4xl" />
          )}
        </button>
      </div>
      <div
        className={`${sidebar} ${
          isOpen
            ? "w-52 sm:w-60 xl:w-72 visible opacity-100"
            : "w-0 invisible opacity-0"
        }`}
      >
        <div className="sm:my-auto">
          <div className="flex sm:hidden justify-end pr-3 pt-3">
            <button
              className="focus:outline-none justify-end "
              onClick={handleIsOpen}
            >
              <VscChromeClose className="text-3xl sm:text-4xl text-white" />
            </button>
          </div>
          <div>
            {dataLink.map((data) => {
              return (
                <Link href={data.path} key={data.id} >
                  <a className={sbLink} onClick={handleIsOpen}>{data.title}</a>
                </Link>
              );
            })}
          </div>
          <div className="p-5 absolute bottom-0 block sm:hidden">
            <p className="text-white text-xs">
              All icons made by <a href="https://www.flaticon.com/authors/pixel-perfect">Pixel Perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.sidebar.sidebarIsOpen,
  dataLink: state.sidebar.sidabarLinkData,
});

const mapDispatchToProps = (dispatch) => ({
  handleIsOpen: () => dispatch({type: "SIDEBAR_CHANGE"}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
