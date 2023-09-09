import { Router, Link, Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Routes } from "react-router-dom";
import React from "react";
import Page1 from "../../pages/app1/App1";
import Page2 from "../../pages/app2/App2";
import Root from "../../pages/home/home";

type MenuItem = {
  title: string;
  href: string;
};
interface RouterItem extends MenuItem {
  redirectElement: JSX.Element;
}

const sidebarPath: RouterItem[] = [
  { title: "Home", href: "/", redirectElement: <Root /> },
  { title: "page1", href: "/page1", redirectElement: <Page1 /> },
  { title: "page2", href: "/page2", redirectElement: <Page2 /> },
];

export const sidebarItems: MenuItem[] = sidebarPath.map(({ title, href }) => ({ title, href }));

function AppRouter() {
  return (
    <Routes>
      {sidebarPath.map((item, index) => (
        <Route key={index} path={item.href} element={item.redirectElement} />
      ))}

      {/* {sidebarPath.map((item, index) => {
        <Route key={index} path={item.href} exact render={() => <item.redirectElement />} />;
      })}
      {/* <Route path="/" element={<Root />}>
                <Route path="page1" element={<Page1 />} />
                <Route path="page2" element={<Page2 />} />
            </Route> */}
    </Routes>
  );
}

export default AppRouter;
