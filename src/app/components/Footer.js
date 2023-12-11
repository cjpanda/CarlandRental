"use client";

import Image from "next/image";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Copyright from "./Copyright";
import { motion } from "framer-motion";
import { fadeIn } from "../TransitionEffect/variants";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="pt-20 bg-white z-20" id="contact">
      <div className="container mx-auto mb-24">
        {/* Grid */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
        >
          <div className="flex flex-col flex-1 gap-y-8">
            {/* Logo */}
            <Link
              to={"home"}
              smooth={true}
              spy={true}
              className="cursor-pointer"
            >
              <Image src={"/icons/logo.svg"} width={200} height={200} alt="" />
            </Link>
            {/* Logo Text */}
            <p className="text-secondary">
              Enjoy the best car rental service with us.
            </p>
            {/* Phone & Email */}
            <div className="flex flex-col gap-y-4 font-semibold">
              <div className="flex items-center gap-x-[10px]">
                <FaPhone />
                <p className="font-medium">080 37639586</p>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <FaEnvelope />
                <div className="font-medium">support@carlandrentals.com</div>
              </div>
            </div>
          </div>
          {/* Footer Links */}
          <div className="flex- flex-1 flex-col xl:items-center ">
            <div>
              <h3 className="h3 font-bold mb-8">Company</h3>
              <ul className=" flex flex-col font-semibold gap-y-4">
                <li>
                  <a href="">Lagos</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Mobile</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">How we work</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Programs */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Working Hours</h3>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-2">
                <div className="text-secondary">Mon-Fri:</div>
                <div className="font-semibold">9:00AM - 8:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Sat:</div>
                <div className="font-semibold">9:00AM - 6:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Sun:</div>
                <div className="font-semibold">Closed</div>
              </div>
            </div>
          </div>
          {/* Newsletter */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Newsletter</h3>
            <p className="mb-8 text-secondary">
              Be the first to get the latest news and updates on our services.
            </p>
            {/* Form */}
            <form className="flex gap-x-2 h-14">
              <input
                type="text"
                placeholder="Your Email"
                className="outline-none bg-white h-full border rounded-lg pl-4 focus:border-accent"
              />
              <button type="submit" className="btn btn-sm btn-accent w-24">
                Submit
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      <Copyright />
    </footer>
  );
}
