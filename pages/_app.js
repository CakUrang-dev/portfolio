import "tailwindcss/tailwind.css";
import "../styles/global.css";
// Library
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// Reducer
import reducers from "../config/redux";

const store = createStore(reducers, applyMiddleware(thunk));

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
