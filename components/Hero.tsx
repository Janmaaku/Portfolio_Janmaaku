import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";
import HeroImage from "@/public/profile/heroimage.png";
import { LampContainer } from "./ui/Lamp";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="pb-20 pt-20"
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}

      {/* <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div> */}

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}

      <div className="flex relative my-16 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[50vw] flex flex-col">
          <p className="uppercase tracking-widest text-xs text-start text-blue-100 max-w-80">
            Crafting Scalable & Modern Web Solutions
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Building Fullstack Applications that Merge Functionality with Design"
            className="text-start text-[40px] md:text-4xl lg:text-5xl"
          />

          <p className="text-start md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Janm Arch Rubio, a Fullstack Developer based in
            Philippines.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={HeroImage}
            height={400}
            width={400}
            alt="profile"
            className="object-contain max-h-96 w-auto"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
