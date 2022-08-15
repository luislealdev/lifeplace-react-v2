import React from "react";
import {Carousel} from "./ui/Carousel";
import DrawerAppBar from "./ui/DrawerAppBar";

export const App = () => {
  return (
    <>
      <div className="margin-5">
      <DrawerAppBar />
      <Carousel/>
      </div>

    </>
  );
};
