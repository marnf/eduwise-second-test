import React from 'react';

import NavigationBar from '../Components/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import RightNavigationBar from '../Components/RightNavigationBar/RightNavigationBar';

const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className='flex'>
            <Outlet></Outlet>
            <RightNavigationBar></RightNavigationBar>
            </div>
        </div>
    );
};

export default Home;