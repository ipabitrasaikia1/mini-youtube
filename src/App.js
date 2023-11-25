import "./App.css";
import Body from "./components/body/Body";
import Head from "./components/header/Head";
import MainContainer from "./components/body/MainContainer";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Watch from "./components/body/Watch";

function App() {
 const appRouter = createBrowserRouter([{
    path:'/',
    element: <Body/>,
    children: [{
      path:'/',
      element:<MainContainer/>
    },
    {
      path:'/watch',
      element:<Watch/>
    }]
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
