import Image from "next/image";
import { connect } from "react-redux";

const PortfolioComponent = (props) => {
  const { handleIsOpen } = props;
  const transition = "transition-all delay-300 rounded";
  return (
    <div>
      <div className="relative shadow-md rounded">
        <div
          className="group w-full h-32 lg:h-40 xl:h-48 bg-gray-600 relative flex items-center justify-center cursor-pointer rounded"
          onClick={handleIsOpen}
        >
          <Image
            src={props.src}
            layout="fill"
            objectFit="cover"
            alt={props.alt}
            className={`${transition} opacity-100 group-hover:opacity-40 transform hover:scale-110 duration-1000 rounded`}
          />
          <Image
            src="/logo/loupe.svg"
            width={50}
            height={50}
            className={`${transition} opacity-0 group-hover:opacity-100`}
          />
        </div>
      </div>
      <h1 className="mt-2 text-base sm:text-xl rubik">{props.title}</h1>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleIsOpen: () => dispatch({ type: "MODAL_CHANGE" }),
});

export default connect(null, mapDispatchToProps)(PortfolioComponent);
