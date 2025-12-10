import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaEnvelope, FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* --- SPOTLIGHT COLORS UPDATED --- */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#F5E6C8" // light tan / wood glow
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vh]"
          fill="#D2A679" // medium wood tone
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vh]"
          fill="#A97C50" // darker wood tone
        />
      </div>

      {/* --- GRID + BACKGROUND COLORS UPDATED --- */}
      <div className="flex h-screen w-full items-center justify-center absolute top-0 left-0 bg-[#F5E6C8] dark:bg-[#2B2B2B]">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#D9D6D1_1px,transparent_1px),linear-gradient(to_bottom,#D9D6D1_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#1C1C1C_1px,transparent_1px),linear-gradient(to_bottom,#1C1C1C,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#F5E6C8] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-[#2B2B2B]" />
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="flex flex-col justify-center items-center relative mb-20 z-10">
        <div className="flex justify-center items-center">
          <Image
            src="/profile.jpg"
            alt="profile-image"
            className="w-32 h-32 sm:h-45 sm:w-45 rounded-full border-4 border-[#D2A679] shadow-lg object-cover transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_#D2A679] bg-white"
            width={150}
            height={150}
          />
        </div>

        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[65vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl text-black dark:text-gray-300"
            duration={2}
            filter={false}
            words="I'm a passionate Full Stack & Mobile App Developer."
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-black dark:text-gray-400">
            Welcome, I&apos;m Brayce Dominic
          </p>

          <div className="flex gap-4 ">
            {/* BUTTON 1 — KEEP GRADIENTS SAME */}
            <a href="#contact" className="group">
              <MagicButton
                title="Let's Work Together"
                icon={<FaEnvelope />}
                position="right"
                otherClasses="
                  !bg-gradient-to-r 
                  from-[#9A00FF] 
                  via-[#FF007A] 
                  to-[#00FFC6] 
                  !text-[#2B2B2B] 
                  !shadow-lg 
                  !ring-2 
                  !ring-[#D2A679] 
                  !ring-offset-2 
                  group-hover:scale-105 
                  group-hover:shadow-[0_0_25px_#FF007A] 
                  animate-pulse 
                  hover:animate-none 
                  transition-transform 
                  duration-300
                "
              />
            </a>

            {/* BUTTON 2 — DEFAULT STYLE */}
            <a href="#projects">
              <MagicButton
                title="Explore My Work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
