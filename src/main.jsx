import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Experiment from './Components/Experiment.jsx';
import RightNavigationBar from './Components/RightNavigationBar/RightNavigationBar.jsx';
import LeftNavigationBar from './Components/LeftNavigationBar/LeftNavigationBar.jsx';
import VideoPage from './Pages/VideoPage/VideoPage.jsx';
import HoverCards from './Pages/HoverCards/HoverCards.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/experiment",
        element: <Experiment></Experiment>
      },
      {
        path: "/rightnavigationbar",
        element: <RightNavigationBar></RightNavigationBar>
      },    
      {
        path: "/leftnavigationbar",
        element: <LeftNavigationBar></LeftNavigationBar>
      },
      {
        path: "/videopage",
        element: <VideoPage></VideoPage>
      },
      {
        path: "/hoverpage",
        element: <HoverCards></HoverCards>
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
  </StrictMode>,
)
