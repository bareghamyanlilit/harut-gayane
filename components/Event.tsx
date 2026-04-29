"use client";
import Image from "next/image";
import { TimeBox } from "./TimeBox";
import { useEffect, useState } from "react";
import { MusicPlayer } from "./music";
import {
  anim,
  date,
  name,
  txt1,
  txt1_1,
  txt2,
  txt2_1,
  txt3,
} from "@/data/data";
import { motion } from "framer-motion";
import AttendanceGuests from "./RSVP";
import { Footer } from "./footer";
import Link from "next/link";

export function Event({ openEnvelope }: any) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (openEnvelope) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [openEnvelope]);

  return (
    <div
      className={`${openEnvelope ? "block" : "hidden"} text-center overflow-hidden  FontSHK_Dzeragir `}
    >
      {/* music button */}
      <div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="fixed z-10 p-1  rounded-2xl bg-[#4a4a4a81]  right-7 top-7 w-15  h-15 flex justify-center items-center"
        >
          <Image
            src="/icon2.png"
            alt="icon1"
            width={500}
            height={500}
            className=" w-full p-2 object-contain "
          />
        </button>

        <MusicPlayer isPlaying={isPlaying} />
      </div>

      <div className="m-auto max-w-md ">
        {/* arajin mas */}
        <div
          className="FontSHK_Dzeragir py-20  tracking-0 h-screen bg-cover bg-top flex flex-col justify-between pt-20 p-7 "
          style={{ backgroundImage: "url('/img1.jpg')" }}
        >
          <div className="flex items-center justify-center">
            <h2 className="text-[64px] mb-20 text-vrayi -mr-5">{name[0]}</h2>
            <span className="text-9xl text-taki"> & </span>
            <h2 className="text-[64px] mt-20 text-vrayi -ml-5">{name[1]}</h2>
          </div>
          <p className="FontSHK_Dzeragir text-[64px] text-vrayi">{date}</p>
        </div>

        {/* 2rd mas teqster */}
        <div className="FontSHK_Dzeragir px-5 my-20">
          <motion.h3 {...anim} className=" text-sovorakan relative text-[36px]">
            Սիրելիներս
            <p className=" absolute -z-1 text-5xl top-3 left-1/2 -translate-x-1/2 text-taki">
              Սիրելիներս
            </p>
          </motion.h3>
          <motion.p
            {...anim}
            className=" text-sovorakan relative  text-2xl mt-10"
          >
            {txt1}
            <span className=" absolute w-[200%] -z-1 text-4xl -top-1 left-1/2 -translate-x-1/2 text-taki">
              {txt1_1}
            </span>
          </motion.p>
        </div>

        {/* errord mas vazox tox + nkar */}
        <div className=" mt-30 relative w-full text-[#580000] ">
          <div className=" whitespace-nowrap animate-marquee-2 text-7xl -rotate-2  -translate-x-full">
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմՍիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ
          </div>
          <div className=" whitespace-nowrap animate-marquee text-6xl mb-10 rotate-2  -translate-x-full">
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմՍիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ
          </div>
          <div className=" whitespace-nowrap animate-marquee-2 text-5xl mt-15  -rotate-2 -translate-x-full">
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմՍիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ
          </div>
          <div className=" whitespace-nowrap animate-marquee text-4xl mb-10 rotate-2  -translate-x-full">
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմՍիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ
          </div>
          <div className=" whitespace-nowrap animate-marquee-2 text-3xl mt-15 -rotate-2 -translate-x-full">
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմՍիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ
          </div>
          <div className=" whitespace-nowrap animate-marquee text-2xl mb-10 rotate-2  -translate-x-full">
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմՍիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ
          </div>
          <div className=" whitespace-nowrap animate-marquee-2 text-xl mt-15 -rotate-2 -translate-x-full">
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմՍիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ
          </div>
          <Image
            src="/img4.jpg"
            alt="icon1"
            width={500}
            height={500}
            className="w-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl absolute object-cover  "
          />
        </div>

        {/* hethashxvark */}
        <TimeBox />

        {/* jamnakacuyc */}
        <motion.p {...anim} className="relative text-sovorakan  text-2xl my-20">
          <span className=" text-sovorakan text-2xl mt-10">{txt3}</span>

          <Link href="https://www.google.com/maps/place/Paradise+Hall/@40.1541643,44.024163,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgID3gbvB6AE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAPNQkAFZLiT_1VpE66R7XP_bQbzCjU5w3hoJ0JVMK4MTA8NbP9aHjSNdu4rLbR9kdshfY5Vn8UWHcCrxLCR7Eutcgg0ip2eXV0Y68R9PCbjyqPl6smiQhtssjadn7YyGDSy7mCxo_ZuJFA%3Dw203-h302-k-no!7i720!8i1073!4m7!3m6!1s0x406af15f9c46730d:0x482e700a887c8454!8m2!3d40.1540369!4d44.0244648!10e5!16s%2Fg%2F11fhvvbdjw?entry=ttu&g_ep=EgoyMDI2MDQyNy4wIKXMDSoASAFQAw%3D%3D">
            <Image
              src="/restoran.png"
              alt="icon1"
              width={500}
              height={500}
              className=" w-full mt-10 object-cover"
            />
            <span className=" flex items-center gap-2 justify-center mt-5 relative">
              <span>Հասցե</span>

              <Image
                src="/icon3.png"
                alt="icon1"
                width={500}
                height={500}
                className=" w-5 h-5 object-cover"
              />
            </span>
          </Link>
          <span className=" absolute w-[200%] -z-1 text-4xl -top-1 left-1/2 -translate-x-1/2 text-taki">
            {txt3}
          </span>
        </motion.p>

        {/* nkar */}
        <motion.div {...anim} className="px-5">
          <Image
            src="/img2.jpg"
            alt="icon1"
            width={500}
            height={500}
            className="w-full  object-cover rounded-xl mb-20 "
          />
        </motion.div>

        {/* erb asen teqst */}
        <motion.p
          {...anim}
          className=" mb-20 text-sovorakan relative  text-2xl mt-10"
        >
          {txt2}
          <span className=" absolute w-[200%] -z-1 text-4xl -top-1 left-1/2 -translate-x-1/2 text-taki">
            {txt2_1}
          </span>
        </motion.p>

        {/* RSVP */}
        <AttendanceGuests />
      </div>

      <Footer />
    </div>
  );
}
