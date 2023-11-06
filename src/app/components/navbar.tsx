import React from "react";
import { DarkThemeToggle, Flowbite, Navbar } from "flowbite-react";

type Props = {
  heading: string;
};

const NavBar = (props: Props) => {
  return (
    <Navbar>
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        {props.heading}
      </span>
      <Flowbite>
        <DarkThemeToggle />
      </Flowbite>
    </Navbar>
  );
};

export default NavBar;
