import React from "react";
import Link from "next/link";
import { socialLinks, footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-custom-blue text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="fw-bold fs-6 mb-3">Software Recruitment co.</h5>
            <div className="d-flex gap-3 mb-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="text-white fs-6"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {footerLinks.map((title) => (
            <div className="col-md-3 mb-4 mb-md-0" key={title.id}>
              <h5 className="fs-2 lh-base fw-bold mb-3">{title.title}</h5>
              <ul className="list-unstyled">
                {title.links.map((link) => (
                  <li className="mb-3" key={link.id}>
                    <Link
                      href="#"
                      className="fs-6 text-white text-decoration-none fw-normal link-info"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
