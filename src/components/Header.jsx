"use client";
import React, { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/constants";

const Header = () => {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <header className="w-full">
      <nav className="navbar navbar-expand-lg bg-white border-bottom py-4 position-relative">
        <div className="container">
          <Link
            href="/"
            className="ms-1 ms-sm-0 navbar-brand fw-bold text-custom-blue"
          >
            Software Recruitment co.
          </Link>

          {/* navbar toggler only display in mobile view */}
          <button
            className="navbar-toggler"
            type="button"
            //I found that react is not supporting the data-bs-toggle="collapse"
            //so I used onClick to toggle the navbar
            onClick={() => setNavToggle(!navToggle)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/*nav links*/}
          <div className={`navbar-collapse ${!navToggle ? `collapse` : ""}`}>
            <ul className="navbar-nav mx-auto mb-0">
              {navLinks.map((nav) => (
                <li className="nav-item dropdown" key={nav.id}>
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="d-flex gap-2">
              <Link
                href="#"
                className="btn-scale fs-6 btn rounded-pill px-3 bg-custom-yellow fw-bold"
              >
                Upload CV
              </Link>

              <Link
                href="#"
                className="btn-scale fs-6 btn rounded-pill px-3 bg-custom-orange fw-bold"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
