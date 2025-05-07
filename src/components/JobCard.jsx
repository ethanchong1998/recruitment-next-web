"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaPython } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiMoneyFill } from "react-icons/pi";
import Link from "next/link";

const JobCard = ({ job, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        delay: index * 0.2,
      }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className={`card border-0 rounded-4 ${
        index % 3 === 0
          ? "bg-custom-yellow text-custom-blue"
          : index % 3 === 1
            ? "bg-custom-blue text-white"
            : "bg-custom-orange text-custom-blue"
      }`}
    >
      <div className="card-body p-4">
        <span
          className={`badge flex align-items-center bg-white text-custom-blue px-2 py-1 mb-2`}
          style={{ fontSize: "0.8rem" }}
        >
          <FaPython /> {job.skill}
        </span>
        <h5
          className="job-title card-title fw-bold mb-3"
          style={{ fontSize: "1.8rem" }}
        >
          {job.title}
        </h5>
        <div className="job-location d-flex align-items-center mb-2">
          <span>
            <FaLocationDot className="me-2" /> {job.location}
          </span>
        </div>
        <div className="job-salaryd-flex align-items-center mb-3">
          <span>
            <PiMoneyFill className="me-2" /> {job.salary}
          </span>
        </div>
        <p className="job-description mb-4">{job.description}</p>
        <Link
          href="#"
          className={`btn w-100 bg-white text-custom-blue fw-semibold rounded-pill py-3 px-1 mb-2`}
        >
          View this job
        </Link>
        <span className="job-date fw-lighter" style={{ fontSize: "13px" }}>
          Posted on {job.posted}
        </span>
      </div>
    </motion.div>
  );
};

export default JobCard;
