import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const Home = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  // http://localhost:3000/?id=1&name=
  //Robin&designation=scientist.
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const designation = searchParams.get("designation");
  return (
    <>
      <div className="details">
        Employee {id} named {name} works as {designation}
      </div>
      <Outlet />
    </>
  );
  //Write your code here
};

export default Home;
