import React, { useEffect } from "react";
import { Link } from "react-router-dom";
function Nav() {
  useEffect(() => {
    fetchEmployees();
  }, []);
  const fetchEmployees = async () => {
    const data = await fetch(
      "http://dummy.restapiexample.com/api/v1/employees"
    );
    console.log(data);
  };
  return (
    <div>
      <h3>Nav page</h3>
      <ul>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/home">
          <li>Home</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
