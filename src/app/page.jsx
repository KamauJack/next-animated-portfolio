"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        {/*Image Container*/}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" fill alt="hero" className="object-contain" />
        </div>
        {/*TEXT Container*/}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/*Title*/}
          <h1 className="text-4xl md:text-6xl font-bol">
            Crafting Digital Experiences, Designing Tomorrow
          </h1>
          {/*Desc*/}
          <p className="md:text-xl">
            Welcome to my digital canvas where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portofolio showcases a diverse collection of projects that reflect
            my commitment to excellence
          </p>
          <div className="flex w-full gap-4">
            <button className="p-1 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-1 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
