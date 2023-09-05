import { Router, Link, Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Routes } from 'react-router-dom';
import React from 'react';
import Page1 from '../pages/app1/App1';
import Page2 from '../pages/app2/App2';
import Root from '../App';

type MenuItem = {
    title: string;
    href: string;
};



function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Root />}>
                <Route path="page1" element={<Page1 />} />
                <Route path="page2" element={<Page2 />} />
            </Route>
        </Routes>
    );
}

export default AppRouter;
