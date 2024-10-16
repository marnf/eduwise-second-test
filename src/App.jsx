import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home.jsx';
import Experiment from './Components/Experiment.jsx';
import RightNavigationBar from './Components/RightNavigationBar/RightNavigationBar.jsx';
import LeftNavigationBar from './Components/LeftNavigationBar/LeftNavigationBar.jsx';
import VideoPage from './Pages/VideoPage/VideoPage.jsx';
import HoverCards from './Pages/HoverCards/HoverCards.jsx';
import MoveObject from './Components/MoveObject/MoveObject.jsx';
import GridRow from './Pages/GridRow/GridRow.jsx';
import GridCols from './Pages/GridCols/GridCols.jsx';
import InputForm from './Pages/InputForm/InputForm.jsx';




function App() {


  return (
    <div>

<InputForm></InputForm>

      {/* <Home></Home>
      <div className='flex'>
        <div>
          <VideoPage></VideoPage>
          <HoverCards></HoverCards>
          <GridRow></GridRow>
          <MoveObject></MoveObject>
          <GridCols></GridCols>
        </div>
        <div>
          <RightNavigationBar></RightNavigationBar>

        </div>
      </div> */}
    </div>
  )
}

export default App
