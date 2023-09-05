import React from "react";
import "./sidebar.css";
type MenuItem = {
  title: string;
  href: string;
};

const mockItems: MenuItem[] = [
  { title: "Test1", href: "/test1" },
  { title: "Test2", href: "/test2" },
  { title: "Test3", href: "/test3" },
];

let menuItems: MenuItem[] = [];
export function Sidebar(props: any) {
  menuItems = mockItems;

  return (
    <div className="ml-1 w-40 border-2 border-black border-solid">
      <div className="testSidebar"> test</div>
    </div>
  );
}
