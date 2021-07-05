import { VscChromeClose } from "react-icons/vsc";
import { connect } from "react-redux";
import Image from "next/image";

const ModalBox = (props) => {
  const { isOpen, handleIsOpen } = props;
  const overlay =
    "bg-black bg-opacity-30 absolute inset-0 justify-center items-center p-4 lg:p-0 transition-all delay-400 flex";
  return (
    <div
      className={`${overlay} ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div className="bg-white max-w-4xl py-4 px-5 rounded-lg shadow-xl text-black">
        <div className="flex justify-between items-center ">
          <h1 className="text-2xl font-bold">{props.title}</h1>
          <button className="focus:outline-none" onClick={handleIsOpen}>
            <VscChromeClose className="text-3xl" />
          </button>
        </div>
        <div className="mt-2 text-sm grid sm:grid-cols-2 grid-cols-1 gap-5">
          <div className="w-full h-full bg-gray-400 relative rounded-lg overflow-hidden shadow">
            <Image
              src={props.src}
              alt={props.alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h2 className="mb-4 font-bold">Description :</h2>
            <p>{props.desc}</p>
            <h2 className="my-4 font-bold">Technolgy used :</h2>
            <ul className="list-disc ml-4">
              {props.techs.map((tech) => {
                return <li>{tech}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.modal.modalIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  handleIsOpen: () => dispatch({ type: "MODAL_CHANGE" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalBox);
