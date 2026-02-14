"use client";

import "./Navbar.css";
import Link from "next/link";
import { Icons } from "@/lib/Icons";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  function showMenu() {
    setMenu((prev) => !prev);
  }

  return (
    <nav className="navbar">
      {/* logo */}
      <div className="logo">
        <h1>
          <Link href="/">
            <span>Sman</span>Tik
          </Link>
        </h1>
      </div>

      <ul className="nav-menu">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/documentation/api">Api</Link>
        </li>
        <li>
          <Link href="/tentang">Documentation</Link>
        </li>
        <li>
          <Link href="/tentang">Tentang</Link>
        </li>
      </ul>

      <button onClick={showMenu} className="hamburger">
        <Icons.hamburger />
      </button>

      {/* menu */}
      {menu && (
        <ul className="mobile-menu">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/documentation/api">Api</Link>
          </li>
          <li>
            <Link href="/tentang">Documentation</Link>
          </li>
          <li>
            <Link href="/tentang">Tentang</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
