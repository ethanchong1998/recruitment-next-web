import React from "react";
import Link from "next/link";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { jobs } from "@/constants";
import JobCard from "./JobCard";

const LatestJobs = () => {
  return (
    <section className="bg-primary-subtle py-5">
      <div className="container">
        <h2
          className="fw-bold mb-5 text-center"
          style={{ fontSize: "3.5rem", color: "#0E2152" }}
        >
          Latest Jobs
        </h2>

        <div className="row justify-content-center">
          {jobs.map((job, index) => (
            <div key={job.id} className={`col-sm-6 col-md-4 mb-4 mb-md-0`}>
              <JobCard job={job} index={index} />
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-between align-items-center mt-4">
          <div className="d-flex justify-content-center align-items-center gap-2 mt-3">
            <button className="btn">
              <FaArrowAltCircleLeft
                className="fs-1"
                style={{ color: "#0E2152" }}
              />
            </button>
            <button className="btn">
              <FaArrowAltCircleRight
                className="fs-1"
                style={{ color: "#0E2152" }}
              />
            </button>
          </div>
          <Link
            href="#"
            className="btn btn-link mt-3 text-decoration-none"
            style={{ color: "#0E2152" }}
          >
            View more jobs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestJobs;
