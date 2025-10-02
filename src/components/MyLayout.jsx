import React from "react";
import { Outlet } from "react-router";
import { MyBottomNav } from "./MyBottomNav";

const MyLayout = () => {
  return (
    <>
      <Outlet />
      <MyBottomNav />
    </>
  );
};

export default MyLayout;
