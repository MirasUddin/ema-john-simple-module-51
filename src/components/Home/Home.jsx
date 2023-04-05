import React from 'react';
import Header from '../Header/Header';
import { Outlet, Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Header/>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;