const Title = (props) => {
  return (
    <div>
      <h1 className="text-center text-xl lg:text-2xl xl:text-3xl oswald">
        {props.title}
      </h1>
      <hr className="w-16 mx-auto mt-2 border-2 border-black" />
    </div>
  );
};

export default Title;
