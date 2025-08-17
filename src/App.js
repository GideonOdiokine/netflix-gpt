import { Provider } from "react-redux";
import Body from "./components/Body";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import appStore from "./reduxSlice/appStore";

function App() {
  return (
    <>
      <ToastContainer />
      <Provider store={appStore}>
        <Body />
      </Provider>
    </>
  );
}

export default App;
