import React from "react";
import "./noBorderButton.css";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { sidebarItems } from "../Router/Router";

type ButtonProps = {
  title: string;
};

export function NoBorderButton({ title }: ButtonProps) {
  return <button className="noBorderButton w-full text-left pl-1.5"> {title} </button>;
}
