import { Router, Link, Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Routes } from "react-router-dom";
import React from "react";
import Root from "../../pages/home/home";
import About from "../../pages/About/about";
type MenuItem = {
  title: string;
  href: string;
};
interface RouterItem extends MenuItem {
  redirectElement: JSX.Element;
}

const sidebarPath: RouterItem[] = [
  { title: "Home", href: "/", redirectElement: <Root /> },
  { title: "About", href: "/about", redirectElement: <About /> },
];

export const sidebarItems: MenuItem[] = sidebarPath.map(({ title, href }) => ({ title, href }));

function AppRouter() {
  return (
    <Routes>
      {sidebarPath.map((item, index) => (
        <Route key={index} path={item.href} element={item.redirectElement} />
      ))}
    </Routes>
  );
}

export default AppRouter;
