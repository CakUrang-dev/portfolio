const initialState = {
  homeSocialIcon: [
    {
      id: 1,
      path: "/logo/github.svg",
      href: "https://github.com/CakUrang-dev",
    },
    {
      id: 2,
      path: "/logo/instagram.svg",
      href: "https://www.instagram.com/muhammadirgihakim/",
    },
    {
      id: 4,
      path: "/logo/dribbble.svg",
      href: "https://dribbble.com/CakUrang",
    },
    {
      id: 5,
      path: "/logo/twitter.svg",
      href: "https://twitter.com/MuhammadIrgiHa4",
    },
    
  ],
};

const homeReducer = (state = initialState, action) => {
  return state;
};

export default homeReducer;
