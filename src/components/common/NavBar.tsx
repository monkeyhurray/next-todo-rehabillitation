import React from "react";
import Link from "next/link";
const NavBar = () => {
  return (
    <ul className="flex m-5">
      <li className="mr-5">
        <Link href="/about">About</Link>
      </li>
      <li className="mr-5">
        <Link href="/report">Report</Link>
      </li>
      <li className="mr-5">
        <Link href="/todos-csr">CSR</Link>
      </li>
      <li className="mr-5">
        <Link href="/todos-ssr">SSR</Link>
      </li>
    </ul>
  );
};

export default NavBar;
