import React from "react";
import logo from "../../logo.svg";
import "./App2.css";
import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";

function App1() {
  return (
    <div className="App">
      {["Primary", "Secondary", "Success", "Info", "Warning", "Danger"].map((variant) => (
        <DropdownButton as={ButtonGroup} key={variant} id={`dropdown-variants-${variant}`} variant={variant.toLowerCase()} title={variant}>
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3" active>
            Active Item
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownButton>
      ))}
    </div>
  );
}

export default App1;
