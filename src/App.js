import "./App.css";
import Body from "./components/body/Body";
import Head from "./components/header/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
 const appRouter = createBrowserRouter([{
    path:'/',
    element: <Body/>
  }])
  return (
    <Provider store={store}>
      <div className="">
        <Head />
        <RouterProvider router={appRouter} />

      </div>
    </Provider>
  );
}

export default App;
