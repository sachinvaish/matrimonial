import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="px-[2rem] w-full h-16 bg-white shadow-lg">
        <nav className="h-full flex justify-between items-center">
          <Link href='/'><div className="logo text-4xl text-pink-700 font-semibold">
            Saathi
          </div></Link>
          <ul className="flex">
            <li className="nav-link">Home</li>
            <li className="nav-link">About</li>
            <Link href='/chatroom'><li className="nav-link">ChatRoom</li></Link>
          </ul>
        </nav>
      </div>
      <div className="w-full h-0.5 bg-pink-600"></div>
    </div>
  );
}
