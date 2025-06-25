import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Store from "./utils/Store";
import {createBrowserRouter, RouterProvider } from "react-router";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import ResultPage from "./components/ResultPage";

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<Body/>,
    children:[
      {
        path:'/',
        element:<MainContainer/>
      },
      {
        path:'/watch',
        element:<WatchPage/>
      },
      {
        path:'/search',
        element:<ResultPage/>
      }
    ]
  }
])

function App() {
  return (
    <Provider store={Store}>
      <div >
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
