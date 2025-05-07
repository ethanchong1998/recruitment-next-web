"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div
      className="position-relative w-100 bg-custom-blue d-flex justify-content-center align-items-center"
      style={{ height: "674px" }}
    >
      <div className="position-absolute top-0 start-0">
        <Image
          src="/orangeCircle.svg"
          alt="orangeCircle"
          width={147}
          height={168}
        />
      </div>
      <div className="position-absolute bottom-0 end-0">
        <Image
          src="/yellowCircle.svg"
          alt="yellowCircle"
          width={240}
          height={208}
        />
      </div>
      <div className="container d-flex gap-3">
        <div className="d-flex flex-column justify-content-center gap-3 flex-grow-1 z-1">
          <span className="text-white fs-6 fw-normal lh-base">
            Software Recruitment Specialists
          </span>
          <span
            className="text-white fw-bold fs-md-1"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.125rem)" }}
          >
            Elevate your career
          </span>
          <div className="input-group mt-3 mb-4">
            <input
              type="text"
              className="form-control py-3 rounded-start-pill"
              placeholder="E.g. networking"
              style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
            />
            <button
              className="btn bg-custom-yellow fw-bold fs-6 px-4 rounded-end-pill"
              type="button"
              style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            >
              Search jobs
            </button>
          </div>
        </div>
        <motion.div
          className="rounded z-1 d-none d-md-flex flex-grow-1 justify-content-end max-width-450"
          style={{ width: "450px", height: "400px" }}
          animate={{
            y: [-10, 10, -10, 10, -10],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/heroImg.jpg"
            alt="heroImage"
            width={450}
            height={400}
            className="rounded h-100 object-fit-cover img-fluid"
            style={{ objectPosition: "right" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
