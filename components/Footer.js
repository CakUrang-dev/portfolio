const Footer = () => {
  const date = new Date();
  const item = "text-gray-200 text-sm sm:text-xs lg:text-sm text-center";
  return (
    <footer className="absolute bottom-0 min-w-full bg-black rubik">
      <div className="container mx-auto px-14 py-2 flex flex-col sm:flex-row justify-between">
        <p className={item}>
          Copyright {date.getFullYear()} CakUrang - All Rights Reserved | Designed by CakUrang
        </p>
        <p className={`${item} hidden sm:block`}>
          All icons made by <a href="https://www.flaticon.com/authors/pixel-perfect">Pixel Perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
