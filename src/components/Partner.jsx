"use client";
import React from "react";
import Image from "next/image";
import { partners } from "@/constants";
import { motion } from "framer-motion";

const Partner = () => {
  return (
    <section className="partners-section py-5 bg-white">
      <div className="container">
        <h3 className="mb-4 text-center text-custom-gray fw-bold fs-6">
          Who we work with
        </h3>

        <div className="row justify-content-center align-items-center">
          {partners.map((partner, index) => (
            <div className="col-5 col-sm-4 col-lg-2" key={partner.id}>
              <motion.div
                className="partner-logo m-2 m-md-3 mb-4 mb-md-0 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={200}
                  height={200}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
