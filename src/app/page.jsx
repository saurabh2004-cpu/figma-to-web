'use client'
import Image from "next/image";
import Link from "next/link";

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';




export default function Home() {

  const carouselItems = [
    {
      id: 1,
      img: "/images/porfolio-section/carousel/Bitmap(16).png",
      name: "John Doe",
      left: "37px"
    },
    {
      id: 2,
      img: "/images/porfolio-section/carousel/Bitmap(17).png",
      name: "John Doe",
    },
    {
      id: 3,
      img: "/images/porfolio-section/carousel/Bitmap(18).png",
      name: "John Doe",
    },
    {
      id: 4,
      img: "/images/porfolio-section/carousel/Bitmap(19).png",
      name: "John Doe",
    }
  ]

  const containerStyle = {
    width: '100%',
    height: '100%'
  };

  const center = {
    lat: 40.7128,
    lng: -74.0060
  };

  return (
    <>
      {/* header */}
      <header className="bg-[#232338] md:w-[1440px] md:h-[880px]   ">
        {/* Logo */}
        <img src="/images/logo/logo.svg" alt="Logo" className=" absolute md:left-[135px] md:top-[16px] md:w-[132px] md:h-[48px]" />
        <div className="absolute md:left-[135px] md:top-[16px]">
        </div>
        <nav className="flex items-center justify-between">

          {/* Navigation Links */}
          <ul className="absolute flex md:w-[515px] md:h-[32px] md:top-[28px] md:left-[463px] epilogue text-white text-[16px] justify-between leading-[32px] tracking-[0px] text-center">
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Services</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
          </ul>

        </nav>

        {/* Contact Button */}
        <Link
          href="#"
          className="text-white md:w-[138px] md:h-[48px] md:left-[1167px] md:top-[28px] absolute border font-bolder text-center rounded-[8px]  flex items-center justify-center text-center flex items-center justify-center text-center epilogue "
        >
          CONTACT
        </Link>

        {/* Hero Section left side */}
        <h5 className="absolute md:w-[167px] md:h-[32px] md:left-[136px] md:top-[188px] text-[#ef6d58] leading-8 tracking-[3px] uppercase">
          MODERN STUDIO
        </h5>

        <Image
          src="/images/Star.png"
          alt="star img"
          className="absolute z-0 md:w-[148] md:h-[148px] md:left-[413px] md:top-[210px] border-[2px #6a6c8e] text-[#6a6c8e]"
          width={148}
          height={148} />

        {/* heading */}
        <h1 className="absolute z-10 md:w-[513px] md:h-[240px] md:left-[135px] md:top-[244px] font-[800] text-[72px] text-[#ffffff] leading-[80px] tracking-[-2px]">
          We’re Help To Build Your Dream Project
        </h1>

        {/* Description */}
        <p className="absolute md:w-[470px] md:h-[66px] md:left-[135px] md:top-[508px] text-[#FFFFFFA3] text[16px] leading-[32px] tracking-[0px] epilogue">
          Agency provides a full service range including technical skills, design, business understanding.
        </p>

        {/* button */}
        <button className="absolute md:w-[154px] md:h-[48px] md:left-[135px] md:top-[608px]  border rounded-[8px] bg-[#ef6d58] text-white font-black text-sm leading-none text-center uppercase font-epilogue">
          HOW WE WORK
        </button>

        {/* link */}
        <Link
          href="#"
          className="absolute md:w-[88px] md:h-[32px] md:left-[335px] md:top-[616px] text-[#ffffff]  text-center text-base epilogue"
        >contact Us
        </Link>

        {/*hero section right side */}
        {/* central circle */}
        <div className="absolute  md:w-[370px] md:h-[370px] md:left-[835px] md:top-[278px] bg-[#32334c] rounded-full"></div>

        {/* half circle */}
        <div className="absolute z-2 md:w-[246px] md:h-[246px] md:left-[735px] md:top-[178px] bg-[#b550fb] rounded-full"></div>

        {/* sqare */}
        <div className="absolute z-2 md:w-[246px] md:h-[182px] md:left-[735px] md:top-[301px] bg-[#b550fb]"></div>

        {/* laptop img */}
        <Image
          src={"/images/hero-laptop-img-4.png"}
          alt="img"
          width={255}
          height={265}
          className="absolute z-10 md:w-[255px] md:h-[265px] md:left-[756px] md:top-[202px] border-[2px #6a6c8e] text-[#6a6c8e]"
        />

        {/* stars with circle */}
        <div className="absolute md:w-[112px] md:h-[112px] md:left-[1039px] md:top-[218px] bg-[#EF6D58] rounded-full"></div>
        <Image
          src={"/images/Stars.png"}
          alt="star img"
          width={42}
          height={56}
          className="absolute z-10 md:w-[42px] md:h-[56px] md:left-[1074px] md:top-[246px] "
        />

        <Image
          src={"/images/hero-img-3.png"}
          alt="img"
          width={112}
          height={82}
          className="absolute  md:w-[112px] md:h-[82px] md:left-[1193px] md:top-[258px] border-[2px #6a6c8e] text-[#6a6c8e]"
        />

        {/* arrow img */}
        <Image
          src={"/images/hero-arraow-img-5.png"}
          alt="img"
          width={142}
          height={73}
          className="absolute z-10 md:w-[142px] md:h-[73px] md:left-[735px] md:top-[519px] bg-[#8082A5] "
        />

        {/* persons image */}
        <div className="absolute z-2 md:w-[246px] md:h-[246px] md:left-[1059px] md:top-[367px] bg-[#f7cc47] rounded-full"></div>
        <div className="absolute z-2 md:w-[246px] md:h-[182px] md:left-[1059px] md:top-[490px] bg-[#f7cc47]"></div>
        <Image
          src={"/images/hero-person-img-6.png"}
          alt="img"
          width={246}
          height={269}
          className="absolute z-10 md:w-[246px] md:h-[269px] md:left-[1059px] md:top-[405px] "
        />

        {/* block */}
        <div className="absolute z-5 md:w-[214px] md:h-[112px] md:left-[791px] md:top-[609px] bg-[#ffffff] rounded-[6px]"></div>

        <div className="absolute z-10 md:w-[94px] md:h-[14px]  md:top-[636px] md:left-[874px] bg-[#DFE0E9] rounded-[2px]"></div>
        <div className="absolute z-10 md:w-[78px] md:h-[6px]  md:top-[666px] md:left-[874px] bg-[#DFE0E9] rounded-[2px] "></div>
        <div className="absolute z-10 md:w-[94px] md:h-[6px]  md:top-[680px] md:left-[874px] bg-[#DFE0E9] rounded-[2px] "></div>
        <div className="absolute z-10 md:w-[62px] md:h-[6px]  md:top-[694px] md:left-[874px] bg-[#DFE0E9] rounded-[2px]  "></div>

        {/* circle */}
        <div className="absolute z-5 md:w-[45px] md:h-[45px]  md:top-[627px] md:left-[808px] bg-[#EF6D58] rounded-full"></div>

        {/* tilted arrow */}
        <div className="absolute  md:w-[50px] md:h-[82px] md:top-[779.93px] md:left-[1107.99px] rotate-46">
        </div>

        {/* bottom */}
        <div className="absolute md:w-[48px] md:h-[48px] md:top-[768px] md:left-[135px]  bg-[#B550F6] rounded-full"></div>
        <Image
          src={"/images/hero-man-img-7.png"}
          alt="img"
          width={38}
          height={43}
          className="absolute z-10 md:w-[38px] md:h-[43px] md:top-[773px] md:left-[139px] "
        />

        {/* paragraph */}
        <p className="absolute md:w-[327px] md:h-[32px] md:top-[764px] md:left-[199px] font-normal text-base text-[#D3D3D3] leading-[32px] tracking-[0px] epilogue">
          "Put themselves in the merchant's shoes"
        </p>
        <p className="absolute md:w-[72px] md:h-[32px] md:top-[792px] md:left-[205px] font-normal text-base text-[#D3D3D3] leading-[32px] tracking-[0px]">
          Meta Inc.
        </p>

      </header>

      <main className="bg-[#fdf0e9] md:w-[1440px] md:h-[20000px]">

        {/* about section */}
        <section className="bg-[#fdf0e9] md:w-[1440px]  md:top-[880px]  ">

          {/* logos */}
          <div className="absolute flex flex-row justify-between md:w-[1170px] md:h-[47px] md:top-[953px] md:left-[135px] bg-[#FDF0E9] ">
            <img
              src="/images/about-section/logo/Bitmap-logo-1.png"
              alt="logo.png"
              className="relative md:w-[147px] md:h-[42px] md:top-[3px]"
            />

            <img
              src="/images/about-section/logo/Bitmap-logo-2.png"
              alt="logo.png"
              className="relative md:w-[108px] md:h-[32px] md:top-[8px] "
            />
            <img
              src="/images/about-section/logo/Bitmap-logo-3.png "
              alt="logo.png"
              className="relative md:w-[119px] md:h-[47px] "
            />
            <img
              src="/images/about-section/logo/Bitmap-logo-4.png"
              alt="logo.png"
              className="relative md:w-[86px] md:h-[21px] md:top[16px] "
            />
            <img
              src="/images/about-section/logo/Bitmap-logo-5.png"
              alt="logo.png"
              className="relative md:w-[126px] md:h-[24px] md:top-[17px] "
            />

          </div>

          {/* vertical line */}
          <div className=" absolute md:w-[1170px] md:h-[1px] md:top-[1072px] md:left-[135px] bg-[#F3D1BF] "></div>

          {/* pic left side*/}
          <div className="absolute md:w-[566px] md:h-[585px] md:top-[1174px] md:left-[139px] ">

            <img
              src="/images/about-section/Bitmap-img-1.png"
              alt="img.png"
              className="relative z-5 md:w-[219px] md:h-[219px] md:top-[366px] md:left-[4px]"
            />

            <div className="absolute z-2 md:w-[470px] md:h-[319px] md:top-[155px] rounded-[6px] md:left-[96px] bg-[#b4abba] ">
              <div className="absolute z-2 md:w-[470px] md:h-[319px]  rounded-[6px] bg-[#b4abba] "></div>
              <img
                src="/images/about-section/Bitmap-img-2.png"
                alt="img"
                className="absolute z-4 md:w-[470px] md:h-[319px]"
              />
            </div>

            {/* rectangle */}
            <div className="absolute z-2 md:w-[216px] md:h-[68px] md:top-[53px] md:left-[294px] bg-[#ffffff] rounded-[6px]">

              {/* rectangles */}
              <div className="absolute z-2 md:w-[51px] md:h-[6px] md:top-[42px] md:left-[131px] bg-[#F5DED1]  rounded-[3px]"></div>
              <div className="absolute z-2 md:w-[62px] md:h-[14px] md:top-[20px] md:left-[131px] bg-[#F5DED1]  rounded-[3px]"></div>

              {/* ovals */}
              <div className="absolute z-3 md:w-[40px] md:h-[40px] md:top-[14px] md:left-[79px]  bg-[#f7cc47] rounded-full border-[4px] border-[#ffffff]"></div>
              <div className="absolute z-2 md:w-[40px] md:h-[40px] md:top-[14px] md:left-[47px]  bg-[#B550F8] rounded-full border-[4px] border-[#ffffff]"></div>
              <div className="absolute z-1 md:w-[40px] md:h-[40px] md:top-[14px] md:left-[15px]  bg-[#EF6D58] rounded-full border-[4px] border-[#ffffff]"></div>

            </div>

            {/* combined shape */}
            <div className="absolute z-1 md:w-[193px] md:h-[89px] md:top-[0px] md:left-[360px] bg-green-200 color-[#b4abba]">

            </div>

            {/* path */}
            <img
              src="/images/about-section/Path-img-3.png"
              alt="img"
              className="absolute z-1 md:w-[192.98px] md:h-[166.07px] md:top-[76px] md:left-[16px] color-[#E7C4B2]"
            />

            {/* rectangle */}
            <div className="absolute  md:w-[384px] md:h-[319px] md:top-[15px] md:left-[68px] bg-[#F9E5DA] rounded-[6px]"></div>
          </div>

          {/* right side */}
          <div>
            <h5 className="absolute md:w-[62px] md:h-[32px] md:top-[1244px] md:left-[835px] font-epilogue font-normal font-[16px] leading-[32px] tracking-[3px] uppercase text-[#EF6D58]">
              About
            </h5>
            <h2 className="absolute md:w-[417px] md:h-[128px] md:top-[1296px] md:left-[835px] font-epilogue font-extrabold  text-[56px] leading-[64px] tracking-[-1px]  text-[#391400] ">
              An Experience
              Design Agency
            </h2>
            <p className="absolute md:w-[277px] md:h-[32px] md:top-[1450px] md:left-[835px] font-epilogue font-normal text-[20px] leading-[32px] tracking-[0px] text-[#391400]">
              Provides a full service range
            </p>
            <p className="absolute md:w-[470px] md:h-[98px] md:top-[1500px] md:left-[835px] font-epilogue font-normal text-[16px] leading-[32px] tracking-[0px] text-[#391400]/[0.64]">
              Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.
            </p>

            {/* buttin */}
            <button className="absolute md:w-[138px] md:h-[48px] md:top-[1632px] md:left-[835px] bg-[#ffffff] rounded-[6px] ">
              <p className="font-epilogue font-black text-[14px] leading-[100%] tracking-[0px] text-[#391400] uppercase text-center">About Us</p>
            </button>
          </div>

          {/* feature boxes */}
          <div>
            {/* boxes 1*/}
            <div className="absolute md:w-[391px] md:h-[176px] md:top-[1920px] md:left-[135px] border border-solid border-[#F3D1BF] rounded-tl-[6px] rounded-bl-[6px]">

              {/* box  1 */}
              <h3 className="absolute md:w-[77px] md:h-[48px] md:top-[45px] md:left-[48px] font-epilogue font-extrabold text-[40px] leading-[48px] tracking-[0px] text-[#391400]">
                42%
              </h3>
              <p className="absolute md:w-[198px] md:h-[32px] md:top-[106px] md:left-[48px] font-epilogue font-normal text-[20px] leading-[32px] tracking-[0px] text-[#391400]">
                Years of experience
              </p>
            </div>

            {/* box 2 */}
            <div className="absolute md:w-[391px] md:h-[176px] md:top-[1920px] md:left-[525px] border border-solid border-[#F3D1BF]  ">
              <h3 className="absolute md:w-[75px] md:h-[48px] md:top-[45px] md:left-[48px] font-epilogue font-extrabold text-[40px] leading-[48px] tracking-[0px] text-[#391400]">
                73+
              </h3>
              <p className="absolute md:w-[170px] md:h-[32px] md:top-[106px] md:left-[48px] font-epilogue font-normal text-[20px] leading-[32px] tracking-[0px] text-[#391400]">
                Agency members
              </p>
            </div>

            {/* box 3 */}
            <div className="absolute md:w-[391px] md:h-[176px] md:top-[1920px] md:left-[915px] border border-solid border-[#F3D1BF] rounded-tr-[6px] rounded-br-[6px]">
              <h3 className="absolute md:w-[75px] md:h-[48px] md:top-[45px] md:left-[48px] font-epilogue font-extrabold text-[40px] leading-[48px] tracking-[0px] text-[#391400]">
                5.000
              </h3>
              <p className="absolute md:w-[170px] md:h-[32px] md:top-[106px] md:left-[48px] font-epilogue font-normal text-[20px] leading-[32px] tracking-[0px] text-[#391400]">
                Projects complete
              </p>
            </div>
          </div>

          {/*  */}
          {/* how we work  --right side */}
          <div>
            <h5 className="absolute md:w-[149px] md:h-[32px] md:top-[2236px] md:left-[135px] font-epilogue font-normal text-[16px] leading-[32px] tracking-[3px] text-[#ef6d58] uppercase">
              How we work
            </h5>
            <h3 className="absolute md:w-[448px] md:h-[96px] md:top-[2285px] md:left-[135px] font-epilogue font-extrabold text-[40px] leading-[48px] tracking-[0px] text-[#391400]">
              Making Your Projects
              Look Awesome
            </h3>
            <p className="absolute md:w-[470px] md:h-[68px] md:top-[2412px] md:left-[135px] font-epilogue font-normal text-[16px] leading-[32px] tracking-[0px] text-[#391400]/[0.64]">
              Technical skills, design, business understanding, ability to put themselves in the merchant's shoes.
            </p>
            <p className="absolute md:w-[84px] md:h-[32px] md:top-[2508px] md:left-[135px] font-epilogue font-semibold text-[16px] leading-[32px] tracking-[0px] text-[#391400]">
              Read More
            </p>


          </div>

          {/* how we work  --left side */}
          <div>
            {/* number counting */}
            <h1 className="absolute md:w-[34px] md:h-[80px] md:top-[2308px] md:left-[735px] font-epilogue font-extrabold text-[72px] leading-[80px] tracking-[-2px] text-[#391400]">
              1
            </h1>
            <h1 className="absolute md:w-[46px] md:h-[80px] md:top-[2420px] md:left-[735px] font-epilogue font-extrabold text-[72px] leading-[80px] tracking-[-2px] text-[#391400]">
              2
            </h1>
            <h1 className="absolute md:w-[47px] md:h-[80px] md:top-[2532px] md:left-[735px] font-epilogue font-extrabold text-[72px] leading-[80px] tracking-[-2px] text-[#391400]">
              3
            </h1>
          </div>

          {/*H4 headings */}
          <div>
            <h4 className="absolute md:w-[334px] md:h-[32px] md:top-[2329px] md:left-[835px] font-epilogue font-bold text-[24px] leading-[32px] tracking-[0px] text-[#391400]">
              Full service range including
            </h4>
            <h4 className="absolute md:w-[402px] md:h-[32px] md:top-[2441px] md:left-[835px] font-epilogue font-bold text-[24px] leading-[32px] tracking-[0px] text-[#391400]">
              Technical skills, design, business
            </h4>
            <h4 className="absolute md:w-[367px] md:h-[32px] md:top-[2553px] md:left-[835px] font-epilogue font-bold text-[24px] leading-[32px] tracking-[0px] text-[#391400]">
              Themselves in the merchant's
            </h4>
          </div>

          {/* horizontal line */}
          <div className="absolute md:w-[1170px] md:h-[1px] md:top-[2720px] md:left-[135px] bg-[#f3d1bf]"></div>

          {/* video */}
          <div>
            <div className="absolute md:w-[570px] md:h-[368px] md:top-[2848px] md:left-[135px] rounded-[6px] bg-[#9b9b9b]">
              <img
                src="/images/about-section/Bitmap-img-4.png"
                alt="img.png" />

              {/* play button */}
              <div className="absolute md:w-[148px] md:h-[148px] md:top-[110px] md:left-[210px]">
                <button className="absolute md:w-[148px] md:h-[148px] rounded-full border-[1px] border-[#ffffff]">
                  <div className="absolute md:w-[32px] md:h-[22px] md:top-[58px] md:left-[90px] rounded-[2px]">
                    <div className="w-0 h-0 border-l-[16px] border-r-[16px] border-b-[22px] border-l-transparent border-r-transparent border-b-white rotate-[90deg] round-[2px]"></div>
                  </div>

                </button>
              </div>

              {/* time */}
              <div className="absolute md:w-[47px] md:h-[32px] md:top-[314px] md:left-[24px] rounded-[3px] font-epilogue font-normal text-[16px] leading-[32px] tracking-[0px] text-[#ffffff]">
                <p className="">1:45</p>
              </div>
            </div>

            <h5 className="absolute md:w-[114px] md:h-[32px] md:top-[2908px] md:left-[835px] font-epilogue text-[16px] font-normal leading-[32px] tracking-[3px] uppercase tracking-[3px] text-[#ef6d58] uppercase">
              Video Reel
            </h5>

            <h3 className="absolute md:w-[469px] md:h-[99px] md:top-[2957px] md:left-[835px] font-epilogue font-extrabold text-[40px] leading-[48px text-[#391400]">
              Unlock The Greatest Value Possible
            </h3>

            <p className="absolute md:w-[470px] md:h-[70px] md:top-[3084px] md:left-[835px] font-epilogue font-normal text-[16px] leading-[32px]  text-[#391400]/[0.64]">
              Design, business understanding, ability to put themselves in the merchant's shoes meant to partner.
            </p>
          </div>



        </section>

        {/* portfolio sectiom */}
        <section className="absolute md:w-[1440px] md:h-[2742px] md:top-[3316px]  bg-[#28293e]">

          <h5 className="absolute md:w-[104px] md:h-[32px] md:top-[92px] md:left-[669px] font-epilogue font-normal text-[16px]  leading-[32px] tracking-[3px] uppercase  text-[#ef6d58] uppercase">
            Portfolio
          </h5>

          <h2 className="absolute md:w-[342px] md:h-[64px] md:top-[144px] md:left-[548.5px] font-epilogue font-extrabold text-[56px] leading-[64px] tracking-[-1px] text-[#ffffff]">
            Latest Work
          </h2>

          {/* tabs */}
          <div className="absolute flex flex-row justify-between md:w-[574px] md:h-[40px] md:top-[244px] md:left-[437px] font-epilogue font-normal text-[16px] leading-[32px] text-[#ffffff]/[0.64]  ">
            <a href="" className="md:w-[64px] md:h-[32px] md:top-[8px]">Show All </a>
            <a href="" className=" md:w-[53px] md:h-[32px] md:top-[8px]">Design </a>
            <a href="" className=" md:w-[70px] md:h-[32px] md:top-[8px]">Branding </a>
            <a href="className= md:w-[85px] md:h-[32px] md:top-[8px]">Illustration </a>
            <a href="className= md:w-[55px] md:h-[32px] md:top-[8px]">Motion </a>

            <div className="absolute flex flex-row justify-between md:w-[14px] md:h-[14px] md:top-[-8px] font-epilogue font-normal text-[14px] leading-[24px] text-center text-[#ffffff]/[0.64] ">
              <p className="absolute md:w-[14px] md:h-[24px] md:left-[64px] ">14</p>
              <p className="absolute md:w-[9px] md:h-[24px] md:left-[177px]">6</p>
              <p className="absolute md:w-[8px] md:h-[24px] md:left-[307.5px]">4</p>
              <p className="absolute md:w-[8px] md:h-[24px] md:left-[452px]">3</p>
              <p className="absolute md:w-[6px] md:h-[24px] md:left-[567.5px]">1</p>

            </div>
          </div>

          {/* image cards */}
          <div>
            {/* imag cards 1 */}
            <div className="absolute  md:w-[470px] md:h-[416px] md:top-[352px] md:left-[135px] rounded-[6px]  bg-[#9b9b9b]">
              <img
                src="/images/porfolio-section/Bitmap-img-1.png"
                alt="img"
                className="z-1"
              />

              {/* overlays */}
              <div className="z-1  absolute md:w-[470px] md:h-[416px] md:top-[0px] bg-[#5c2000] rounded-[6px] opacity-[31.81%]"></div>

              <button className="absolute z-2 md:w-[84px] md:h-[38px] md:top-[256px] md:left-[48px] text-[#391400] bg-[#ffffff] rounded-full font-normal text-[16px] leading-[32px] tracking-[0px] ">
                Design
              </button>

              <h3 className="absolute z-2 md:w-[104px] md:h-[48px] md:top-[317px] md:left-[48px] text-white rounded-full font-extrabold text-[40px]  leading-[48px] tracking-[0px]  ">
                SOFA
              </h3>

            </div>

            {/* imag cards 2 */}
            <div className=" absolute  md:w-[670px] md:h-[416px] md:top-[352px] md:left-[635px] rounded-[6px] bg-[#9b9b9b] rounded-[6px]">
              <img
                src="/images/porfolio-section/Bitmap-img-2.png"
                alt="img"
              />

              {/* overlay */}
              <div className="absolute  md:w-[670px] md:h-[416px] md:top-[0px]  rounded-[6px] bg-[#5c2000] rounded-[6px] opacity-[31.81%] "></div>

              <button className="absolute z-2 md:w-[102px] md:h-[38px] md:top-[256px] md:left-[48px] text-[#391400] bg-[#ffffff] rounded-full font-normal text-[16px] leading-[32px] tracking-[0px] ">
                Branding
              </button>

              <h3 className="absolute z-2 md:w-[104px] md:h-[48px] md:top-[317px] md:left-[48px] text-white rounded-full font-extrabold text-[40px]  leading-[48px] tracking-[0px]  ">
                KeyBoard
              </h3>
            </div>

            {/* imag cards 3 */}
            <div className=" absolute  md:w-[670px] md:h-[416px] md:top-[800px] md:left-[135px] rounded-[6px] bg-[#9b9b9b] rounded-[6px]">
              <img
                src="/images/porfolio-section/Bitmap-img-3.png"
                alt="img"
              />

              {/* overlay */}
              <div className="absolute z-1 md:w-[670px] md:h-[416px] md:top-[0px] rounded-[6px] bg-[#5c2000] rounded-[6px] opacity-[31.81%] "></div>

              <button className="absolute z-2 md:w-[116px] md:h-[38px] md:top-[256px] md:left-[48px] text-[#391400] bg-[#ffffff] rounded-full font-normal text-[16px] leading-[32px] tracking-[0px] ">
                Illustration
              </button>

              <h3 className="absolute z-2 md:w-[244px] md:h-[48px] md:top-[317px] md:left-[48px] text-white rounded-full font-extrabold text-[40px]  leading-[48px] tracking-[0px]  ">
                Work Media
              </h3>
            </div>

            {/* imag cards 4 */}
            <div className=" absolute  md:w-[470px] md:h-[416px] md:top-[800px] md:left-[835px] rounded-[6px] bg-[#9b9b9b] rounded-[6px]">
              <img
                src="/images/porfolio-section/Bitmap-img-4.png"
                alt="img"
              />

              {/* overlay */}
              <div className="absolute  md:w-[470px] md:h-[416px] md:top-[0px]  rounded-[6px] bg-[#5c2000] rounded-[6px] opacity-[31.81%] "></div>

              <button className="absolute z-2 md:w-[86px] md:h-[38px] md:top-[256px] md:left-[48px] text-[#391400] bg-[#ffffff] rounded-full font-normal text-[16px] leading-[32px] tracking-[0px] ">
                Motion
              </button>

              <h3 className="absolute z-2 md:w-[161px] md:h-[48px] md:top-[317px] md:left-[48px] text-white rounded-full font-extrabold text-[40px]  leading-[48px] tracking-[0px]  ">
                DDDone
              </h3>
            </div>

          </div>

          {/* button */}
          <div className="absolute md:w-[170px] md:h-[48px] md:top-[1280px] md:left-[635px] border-[1px] border-[#ffffff]/[29.57%] rounded-[6px]">
            <button className="md:w-[170px] md:h-[48px] font-epilogue text-[#ffffff] font-black text-[14px] leading-[100%] tracking-[0px] uppercase text-center">
              Explore More
            </button>
          </div>

          {/* contact us -get started */}
          <div className="absolute md:w-[1170px] md:h-[336px] md:top-[1520px] md:left-[135px] bg-[#FDF0E9] rounded-[6px]">

            {/* icons */}
            <div className="absolute md:w-[148px] md:h-[148px] md:top-[-75px] md:left-[84px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="148"
                height="146"
                viewBox="0 0 148 146"
                fill="none"
              >
                <path
                  d="M74 111L56.2906 145.85L56.8052 106.762L24.9289 129.39L43.5496 95.0184L4.8088 100.241L37.2698 78.4599L0.539543 65.0803L39.4044 60.8796L13.0992 31.9632L49.4645 46.3051L39.6105 8.47625L65.1453 38.0752L74 0L82.8547 38.0752L108.39 8.47625L98.5355 46.3051L134.901 31.9632L108.596 60.8796L147.46 65.0803L110.73 78.4599L143.191 100.241L104.45 95.0184L123.071 129.39L91.1948 106.762L91.7094 145.85L74 111Z"
                  fill="#EF6D58"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                className="absolute md:w-[32px] md:h-[32px] md:top-[55px] md:left-[58px] "
              >
                <path d="M14 32H5C3.34315 32 2 30.6569 2 29V14H14V32ZM30 29C30 30.6569 28.6569 32 27 32H18V14H30V29ZM21 0C23.7614 0 26 2.23858 26 5V5.01172C26 5.15172 25.9998 5.552 25.9238 6H30C31.1046 6 32 6.89543 32 8V10C32 11.1046 31.1046 12 30 12H2C0.89543 12 0 11.1046 0 10V8C0 6.89543 0.89543 6 2 6H6.07617C6.02335 5.67336 5.99775 5.34259 6 5.01172V5C6 2.23858 8.23858 0 11 0C13.7614 0 16 2.23858 16 5C16 2.23858 18.2386 0 21 0ZM12.5 2.40234C11.5718 1.86645 10.4282 1.86645 9.5 2.40234C8.5719 2.93827 8 3.92827 8 5C8 5.17 8.00384 5.54835 8.08984 5.86035C8.10184 5.90791 8.11718 5.9546 8.13574 6H14V5C14 3.92827 13.4281 2.93827 12.5 2.40234ZM21 2C19.3431 2 18 3.34315 18 5V6H23.8643C23.8826 5.95452 23.8979 5.90785 23.9102 5.86035C23.9962 5.54835 24 5.17 24 5C24 3.34315 22.6569 2 21 2Z" fill="white" />
              </svg>
            </div>

            <h5 className="absolute md:w-[128px] md:h-[32px] md:top-[92px] md:left-[100px] font-[400px] font-epilogue text-[#EF6D58] text-[16px] leading-[32px] uppercase tracking-[3px]">
              Get Started
            </h5>

            <h4 className="absolute md:w-[248px] md:h-[64px] md:top-[137px] md:left-[100px] font-bold font-epilogue text-[#391400] text-[24px] leading-[32px]">
              We Help Companies
              Move Faster
            </h4>

            <div className="absolute md:w-[154px] md:h-[48px] md:top-[224px] md:left-[100px] bg-[#EF6D58] rounded-[6px] flex items-center justify-center">
              <button className="md:w-[95px] md:h-[14px] text-white font-black font-epilogue text-[14px] leading-[100%] text-center uppercase">
                Contact Us
              </button>
            </div>


            <div className="absolute  md:w-[274px] md:h-[176px] md:top-[96px] md:left-[448px] bg-[#ffffff]  box-shadow rounded-[6px]" ></div>
            <div className="absolute z-2 md:w-[306px] md:h-[176px] md:top-[88px] md:left-[432px] bg-white box-shadow rounded-[6px]"></div>

            <div className="absolute z-3 md:w-[338px] md:h-[176px] md:top-[80px] md:left-[416px] bg-white box-shadow rounded-[6px]">
              <div className="absolute z-2 md:w-[113px] md:h-[6px] md:top-[144px] md:left-[24px] bg-[#B550F8] rounded-[3px]"></div>
              <div className="absolute md:w-[289px] md:h-[6px] md:top-[144px] md:left-[24px] bg-[#F4E4FF] rounded-[3px]"></div>
              <div className="absolute md:w-[126px] md:h-[6px] md:top-[100px] md:left-[24px] bg-[#F5DED1] rounded-[3px]"></div>
              <div className="absolute md:w-[75px] md:h-[14px] md:top-[78px] md:left-[24px] bg-[#F5DED1] rounded-[2px]"></div>
              <div className="absolute md:w-[40px] md:h-[40px] md:top-[24px] md:left-[24px] bg-[#F7CC47]  rounded-full"></div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="94" height="57"
                viewBox="0 0 94 57"
                fill="none"
                className="absolute md:w-[56px] md:h-[93px] md:top-[0px] md:left-[232px]"
              >
                <path d="M93.4514 2.48038C93.6424 1.72298 93.2566 0.938717 92.5393 0.626862C91.8158 0.316605 90.9735 0.591885 90.5744 1.26944C90.3005 1.86402 90.0176 2.4545 89.7297 3.0419C87.6552 3.12032 85.5922 3.39334 83.5686 3.86124C82.4012 4.14556 81.2537 4.5093 80.136 4.9501C79.1464 5.20142 78.2511 5.73466 77.5578 6.48428C77.3999 6.7565 77.3767 7.08634 77.4953 7.37784C77.6141 7.66938 77.861 7.89011 78.1643 7.97452C79.1485 8.01445 80.1289 7.82339 81.0266 7.41788C82.0432 7.10675 83.0766 6.84563 84.1096 6.57999C85.5184 6.21349 86.9434 5.91454 88.3791 5.67862C85.3436 11.3455 81.6508 16.6431 77.3713 21.4589C67.8911 32.2339 56.1322 40.7737 42.9436 46.4608C36.3829 49.286 29.5254 51.3683 22.5002 52.6698C15.4561 53.8966 8.31968 54.5194 1.16917 54.5312V54.5302C0.428467 54.5417 0.211906 55.7469 0.989487 55.8642C9.22546 56.9742 17.593 56.6287 25.7092 54.8446C40.1309 51.8582 53.6932 45.6668 65.3879 36.7294C71.2795 32.262 76.6389 27.1351 81.3616 21.4501C83.8696 18.3723 86.1842 15.1464 88.2961 11.7929L88.3108 11.7187C88.7278 9.64071 89.1538 7.56644 89.5901 5.49405C89.8743 5.45483 90.1587 5.41681 90.4436 5.38272C91.9155 5.21175 92.0016 2.98721 90.4436 3.02042C90.3345 3.02217 90.2255 3.02735 90.1164 3.03018C90.2161 2.56932 90.314 2.10802 90.4153 1.64737L93.2922 2.85733C91.7837 5.92366 90.1146 8.90537 88.2961 11.7929L87.3596 16.494C87.5015 16.2475 87.764 16.0868 88.0578 16.0868C88.4134 16.087 88.7275 16.3196 88.8313 16.6591C89.2241 18.2412 89.3875 19.8086 89.633 21.414L86.4123 21.8515C86.4384 22.5525 86.9124 23.1826 87.6213 23.3778C88.4759 23.613 89.3642 23.1322 89.633 22.289C90.1118 20.6395 90.4634 18.9559 90.6848 17.2528L91.6223 12.4071C92.2648 9.10504 92.8744 5.79609 93.4514 2.48038ZM86.8948 18.537C86.6718 19.633 86.5033 20.7398 86.3918 21.8534L86.4123 21.8515C86.407 21.7076 86.419 21.5606 86.4534 21.414C86.6065 20.445 86.7317 19.4899 86.8948 18.537ZM87.3596 16.494C87.3297 16.546 87.3025 16.6 87.2844 16.6591C87.1254 17.2862 87.0019 17.9111 86.8948 18.537C87.0154 17.9439 87.151 17.3536 87.3039 16.7675L87.3596 16.494Z" fill="#EF6D58" />
              </svg>
            </div>

            <div className="absolute md:w-[282px] md:h-[242px] md:left-[792px] md:top-[47px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="282"
                height="242"
                viewBox="0 0 282 242"
                fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M203.057 13.3681C192.724 3.30359 178.353 -1.47454 164.053 0.40008C150.128 2.36018 137.759 10.3158 130.197 22.1741C125.881 28.8233 123.251 36.4257 122.536 44.3216L124.448 42.4062C106.753 40.8758 88.9499 43.6597 72.5657 50.5196C58.8066 57.0976 49.0869 69.9362 46.487 84.9666C45.1312 92.9438 46.823 101.139 51.2267 107.927L52.4998 104.801C30.8967 110.285 12.9549 125.289 3.73268 145.585C-0.397925 155.88 -1.1216 167.229 1.6678 177.966C4.3903 187.83 10.7034 196.319 19.3659 201.763C28.5991 207.849 40.0684 209.488 50.636 206.233L47.7064 204.57C54.0301 223.283 70.2022 236.949 89.7043 240.059C111.703 244.425 134.529 241.377 154.612 231.392C166.622 225.742 177.53 217.997 186.824 208.522L185.083 209.244C197.301 209.999 209.553 208.488 221.221 204.787C232.013 201.566 242.253 196.725 251.591 190.428C260.236 184.732 267.479 177.152 272.777 168.256C277.588 159.878 279.703 150.22 278.833 140.597C278.132 129.941 272.893 120.097 264.445 113.565V117.944C276.324 108.88 282.878 94.47 281.905 79.5577C280.765 68.0891 275.09 57.5519 266.143 50.2898C257.195 43.0277 245.718 39.6429 234.263 40.8884L236.053 45.2131C244.119 37.4795 246.322 25.4461 241.519 15.3558C236.475 5.54316 225.403 0.420857 214.661 2.92985C208.742 4.10066 203.463 7.41674 199.837 12.2418C199.178 13.3894 199.562 14.8538 200.699 15.5305C201.849 16.1668 203.295 15.7876 203.985 14.6692C209.631 8.04919 218.776 5.60249 226.972 8.51943C235.246 11.7486 240.181 20.2801 238.855 29.0647C238.371 33.9033 236.094 38.3855 232.472 41.6292C231.771 42.3617 231.57 43.439 231.957 44.3755C232.345 45.3121 233.249 45.9312 234.262 45.9539C247.545 44.4453 260.685 49.7825 269.156 60.1267C277.231 70.4194 279.294 84.2042 274.584 96.4107C272.171 103.275 267.747 109.253 261.887 113.565C261.218 113.969 260.77 114.656 260.67 115.432C260.57 116.207 260.83 116.986 261.375 117.546C275.396 130.011 278.216 150.85 268.01 166.594C262.645 175.242 255.335 182.518 246.664 187.844C237.131 193.916 226.713 198.47 215.783 201.342C209.876 202.957 203.826 203.991 197.718 204.432C194.756 204.624 191.782 204.606 188.817 204.51C187.365 204.279 185.889 204.243 184.427 204.402C183.145 205.08 182.034 206.04 181.175 207.208C173.481 214.662 164.712 220.917 155.161 225.766C136.985 235.454 116.238 239.224 95.8171 236.548C78.2614 234.923 62.6744 224.642 54.2666 209.142C53.4457 207.254 52.7872 205.299 52.298 203.299C51.938 202.039 50.6344 201.299 49.3678 201.637C31.6129 206.615 13.0343 197 6.84114 179.628C3.56271 169.971 3.5733 159.5 6.87125 149.849C10.1392 140.22 15.9578 131.658 23.707 125.075C32.4407 117.651 42.6353 112.144 53.6313 108.909C54.2645 108.726 54.7789 108.263 55.0271 107.652C55.2754 107.041 55.2301 106.35 54.9043 105.777C48.134 94.0813 49.1283 79.4478 57.4184 68.776C66.8794 56.6161 80.9806 48.9521 96.3283 47.6284C105.645 46.353 115.054 45.8854 124.45 46.231C125.496 46.2094 126.339 45.3676 126.363 44.3216C127.669 31.4409 134.373 19.7176 144.811 12.0611C155.444 4.48846 168.837 1.89601 181.527 4.95366C188.903 6.61641 195.784 9.9944 201.611 14.8137C202.016 15.1738 202.631 15.1557 203.015 14.7724C203.398 14.3891 203.416 13.7734 203.056 13.3681H203.057Z" fill="#E7C4B2" />
              </svg>
            </div>

            <div className="absolute md:w-[239px] md:h-[396px] md:top-[-60px] md:left-[848px]">
              <img src="/images/porfolio-section/Bitmap-img-5.png"
                alt="img"
              />
            </div>

            {/* team  */}
            <h5 className="absolute md:w-[103px] md:h-[32px] md:top-[430px] md:left-[0px] font-epilogue font-normal text-[16px] leading-[32px] text-[#ef6d68] uppercase tracking-[3px]">
              Our Team
            </h5>
            <h2 className="absolute md:w-[531px] md:h-[128px] md:top-[482px] md:left-[0px] font-epilogue font-extrabold text-[56px] leading-[64px] tracking-[-1px] text-white">
              Team of Designers
              and Developers
            </h2>

            {/* arrow buttons */}
            <div className="absolute md:w-[112px] md:h-[48px] md:top-[562px] md:left-[1058px]  text-white flex items-center justify-between ">
              <button className="relative md:w-[48px] md:h-[48px] rounded-full border-[1px] border-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M14 4.99967C14 4.72352 13.7761 4.49967 13.5 4.49967H1.70699L4.85399 1.35367C4.98047 1.22719 5.02986 1.04286 4.98357 0.870093C4.93727 0.697329 4.80233 0.562385 4.62957 0.516093C4.4568 0.469801 4.27247 0.519194 4.14599 0.645666L0.145994 4.64567C0.0519518 4.73947 -0.000900269 4.86684 -0.000900269 4.99967C-0.000900269 5.13249 0.0519518 5.25986 0.145994 5.35367L4.14599 9.35367C4.27247 9.48014 4.4568 9.52953 4.62957 9.48324C4.80233 9.43695 4.93727 9.302 4.98357 9.12924C5.02986 8.95648 4.98047 8.77214 4.85399 8.64567L1.70699 5.49967H13.5C13.7761 5.49967 14 5.27581 14 4.99967Z" fill="white" />
                </svg>
              </button>
              <button className="relative md:w-[48px] md:h-[48px] rounded-full border-[1px] border-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 4.99966C0 4.72351 0.223858 4.49966 0.5 4.49966H12.293L9.146 1.35366C8.95049 1.15815 8.95049 0.841164 9.146 0.645655C9.34151 0.450146 9.65849 0.450146 9.854 0.645655L13.854 4.64566C13.948 4.73946 14.0009 4.86683 14.0009 4.99966C14.0009 5.13248 13.948 5.25985 13.854 5.35365L9.854 9.35365C9.65849 9.54916 9.34151 9.54916 9.146 9.35365C8.95049 9.15815 8.95049 8.84116 9.146 8.64565L12.293 5.49966H0.5C0.223858 5.49966 0 5.2758 0 4.99966Z" fill="white" />
                </svg>
              </button>

            </div>

            {/* image carousel */}
            {/* <div>
              <div className="relative md:w-[270px] md:h-[272px] md:top-[676px] md:left-[0px] border-[1px] border-[#3a4c56] rounded-[6px] flex justify-center ">
                <img
                  src="/images/porfolio-section/carousel/Bitmap(16).png"
                  alt="img"
                  className="absolute  md:top-[22px] text-center flex align-center "
                />
              </div>

              <div className="absoluet md:left-[0px] font-epilogue font-bold text-[24px] leading-[32px]  text-[#ffffff]">
                <h4 className="relative md:w-[146px] md:h-[32px] md:top-[971px] ">
                  Azah Anyeni
                </h4>
                <p className="relative md:w-[70px] md:h-[32px] md:top-[1006px]  font-normal text-[16px] leading-[32px] text-[#ffffff]/[64%]">
                  Designer
                </p>
              </div>
            </div> */}

          </div>

        </section>


        {/* pricing section */}
        <section >

          {/* headings */}
          <div className="">
            <h5 className="absolute md:w-[77px] md:h-[32px] md:top-[6151px] md:left-[135px] font-epilogue font-normal text-[16px] leading-[32px] text-[#EF6D58] tracking-[3px] uppercase">
              Pricing
            </h5>
            <h2 className="absolute md:w-[358px] md:h-[128px] md:top-[6203px] md:left-[135px] font-epilogue font-extrabold text-[56px] leading-[64px] tracking-[-1px] text-[#391400]">
              Check Our
              Pricing Plans
            </h2>
          </div>

          {/* pricing cards */}
          <div>
            {/* card 1 */}
            <div className="absolute md:w-[391px] md:h-[512px] md:top-[6395px] md:left-[135px] font-epilogue  border-[1px] border-[#f3d1bf] md:rounded-tl-[6px] md:rounded-bl-[6px]">
              <h5 className="absolute md:w-[142px] md:h-[32px] md:top-[44px] md:left-[48px] text-[16px] leading-[32px] text-[#ef6d58] uppercase tracking-[3px]">
                Consultation
              </h5>

              <h3 className="absolute md:w-[93px] md:h-[48px] md:top-[93px] md:left-[48px] font-extrabold text-[40px] leading-[48px] text-[#391400]  ">
                Free
              </h3>

              <p className="absolute md:w-[295px] md:h-[69px] md:top-[156px] md:left-[48px] font-normal text-[16px] leading-[32px] text-[#391400]/[64%]">
                Your digital marketing efforts, instead of handling in-house.
              </p>

              {/* features */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute md:w-[16px] md:h-[16px] md:top-[263px] md:left-[48px] "
                >
                  <circle cx="8" cy="8" r="8" fill="#EF6D58" />
                  <path d="M8 4C8.55228 4 9 4.44772 9 5V7H11C11.5523 7 12 7.44772 12 8C12 8.55228 11.5523 9 11 9H9V11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11V9H5C4.44772 9 4 8.55228 4 8C4 7.44772 4.44772 7 5 7H7V5C7 4.44772 7.44772 4 8 4Z" fill="white" />

                </svg>

                <p className="absolute md:w-[103px] md:h-[32px] md:top-[252px] md:left-[80px] font-epilogue font-normal text-[16px] leading-[32px] text-[#391400]">
                  Brand Design
                </p>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute md:w-[16px] md:h-[16px] md:top-[310px] md:left-[48px] "
                >
                  <circle cx="8" cy="8" r="8" fill="#F6DACA" />
                  <rect x="4" y="7" width="8" height="2" rx="1" fill="white" />
                </svg>

                <p className="absolute md:w-[122px] md:h-[32px] md:top-[300px] md:left-[80px] font-epilogue font-normal text-[16px] leading-[32px] text-[#391400]/[64%]">
                  Market Analysis
                </p>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute md:w-[16px] md:h-[16px] md:top-[360px] md:left-[48px] "
                >
                  <circle cx="8" cy="8" r="8" fill="#F6DACA" />
                  <rect x="4" y="7" width="8" height="2" rx="1" fill="white" />
                </svg>

                <p className="absolute md:w-[103px] md:h-[32px] md:top-[354px] md:left-[80px] font-normal text-[16px] leading-[32px] text-[#391400]/[64%]">
                  Production
                </p>
              </div>

              {/* button */}
              <div className="absolute md:w-[154px] md:h-[48px] md:top-[433px] md:left-[48px] rounded-[6px] bg-[#ffffff] ">
                <button className="absolute md:w-[95px] md:h-[48px]  md:left-[31.73px] font-epilogue font-black text-[14px] leading-[100%] text-[#291400f] text-center uppercase">
                  Contact Us
                </button>
              </div>

            </div>

            {/* card 2 */}
            <div className="absolute md:w-[391px] md:h-[560px] md:top-[6347px] md:left-[525px] font-epilogue bg-[#ffffff]  border-[1px] border-[#f3d1bf] border md:rounded-tl-[6px] md:rounded-tr-[6px]">
              <h5 className="absolute md:w-[69px] md:h-[32px] md:top-[92px] md:left-[48px] text-[16px] leading-[32px] text-[#ef6d58] uppercase tracking-[3px]">
                Design
              </h5>

              <h3 className="absolute md:w-[93px] md:h-[48px] md:top-[141px] md:left-[48px] font-extrabold text-[40px] leading-[48px] text-[#391400]  ">
                $1500
              </h3>

              <p className="absolute md:w-[295px] md:h-[69px] md:top-[204px] md:left-[48px] font-normal text-[16px] leading-[32px] text-[#391400]/[64%]">
                Provide your business with a variety of digital solutions to promote.
              </p>


              {/* features */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute md:w-[16px] md:h-[16px] md:top-[310px] md:left-[48px] "
                >
                  <circle cx="8" cy="8" r="8" fill="#EF6D58" />
                  <path d="M8 4C8.55228 4 9 4.44772 9 5V7H11C11.5523 7 12 7.44772 12 8C12 8.55228 11.5523 9 11 9H9V11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11V9H5C4.44772 9 4 8.55228 4 8C4 7.44772 4.44772 7 5 7H7V5C7 4.44772 7.44772 4 8 4Z" fill="white" />

                </svg>

                <p className="absolute md:w-[103px] md:h-[32px] md:top-[300px] md:left-[80px] font-epilogue font-normal text-[16px] leading-[32px] text-[#391400]">
                  Brand Design
                </p>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute md:w-[16px] md:h-[16px] md:top-[362px] md:left-[48px] "

                >
                  <circle cx="8" cy="8" r="8" fill="#EF6D58" />
                  <path d="M8 4C8.55228 4 9 4.44772 9 5V7H11C11.5523 7 12 7.44772 12 8C12 8.55228 11.5523 9 11 9H9V11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11V9H5C4.44772 9 4 8.55228 4 8C4 7.44772 4.44772 7 5 7H7V5C7 4.44772 7.44772 4 8 4Z" fill="white" />

                </svg>

                <p className="absolute md:w-[122px] md:h-[32px] md:top-[354px] md:left-[80px] font-epilogue font-normal text-[16px] leading-[32px] text-[#391400]/[64%]">
                  Market Analysis
                </p>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute md:w-[16px] md:h-[16px] md:top-[410px] md:left-[48px] "
                >
                  <circle cx="8" cy="8" r="8" fill="#F6DACA" />
                  <rect x="4" y="7" width="8" height="2" rx="1" fill="white" />
                </svg>

                <p className="absolute md:w-[103px] md:h-[32px] md:top-[402px] md:left-[80px] font-normal text-[16px] leading-[32px] text-[#391400]/[64%]">
                  Production
                </p>
              </div>

              {/* button */}
              <div className="absolute md:w-[154px] md:h-[48px] md:top-[480px] md:left-[48px] rounded-[6px] bg-[#ef6d58] ">
                <button className="absolute md:w-[95px] md:h-[48px]  md:left-[31.73px]  font-epilogue font-black text-[14px] leading-[100%] text-[#ffffff] text-center uppercase">
                  Contact Us
                </button>
              </div>


            </div>

            {/* card 3 */}
            <div className="absolute md:w-[391px] md:h-[512px] md:top-[6395px] md:left-[915px] font-epilogue  border-[1px] border-[#f3d1bf]  md:rounded-tr-[6px] md:rounded-br-[6px]">
              <h5 className="absolute md:w-[134px] md:h-[32px] md:top-[44px] md:left-[48px] text-[16px] leading-[32px] text-[#ef6d58] uppercase tracking-[3px]">
                Design+Code
              </h5>

              <h3 className="absolute md:w-[93px] md:h-[48px] md:top-[93px] md:left-[48px] font-extrabold text-[40px] leading-[48px] text-[#391400]  ">
                $2900
              </h3>

              <p className="absolute md:w-[295px] md:h-[69px] md:top-[156px] md:left-[48px] font-normal text-[16px] leading-[32px] text-[#391400]/[64%]">
                Help you hit your marketing goals and grow your business.
              </p>

              {/* features */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute md:w-[16px] md:h-[16px] md:top-[263px] md:left-[48px] "
                >
                  <circle cx="8" cy="8" r="8" fill="#EF6D58" />
                  <path d="M8 4C8.55228 4 9 4.44772 9 5V7H11C11.5523 7 12 7.44772 12 8C12 8.55228 11.5523 9 11 9H9V11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11V9H5C4.44772 9 4 8.55228 4 8C4 7.44772 4.44772 7 5 7H7V5C7 4.44772 7.44772 4 8 4Z" fill="white" />

                </svg>

                <p className="absolute md:w-[103px] md:h-[32px] md:top-[252px] md:left-[80px] font-epilogue font-normal text-[16px] leading-[32px] text-[#391400]">
                  Brand Design
                </p>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute md:w-[16px] md:h-[16px] md:top-[311px] md:left-[48px] "
                >
                  <circle cx="8" cy="8" r="8" fill="#EF6D58" />
                  <path d="M8 4C8.55228 4 9 4.44772 9 5V7H11C11.5523 7 12 7.44772 12 8C12 8.55228 11.5523 9 11 9H9V11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11V9H5C4.44772 9 4 8.55228 4 8C4 7.44772 4.44772 7 5 7H7V5C7 4.44772 7.44772 4 8 4Z" fill="white" />

                </svg>

                <p className="absolute md:w-[122px] md:h-[32px] md:top-[300px] md:left-[80px] font-epilogue font-normal text-[16px] leading-[32px] text-[#391400]/[64%]">
                  Market Analysis
                </p>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute md:w-[16px] md:h-[16px] md:top-[364px] md:left-[48px] "

                >
                  <circle cx="8" cy="8" r="8" fill="#EF6D58" />
                  <path d="M8 4C8.55228 4 9 4.44772 9 5V7H11C11.5523 7 12 7.44772 12 8C12 8.55228 11.5523 9 11 9H9V11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11V9H5C4.44772 9 4 8.55228 4 8C4 7.44772 4.44772 7 5 7H7V5C7 4.44772 7.44772 4 8 4Z" fill="white" />

                </svg>

                <p className="absolute md:w-[103px] md:h-[32px] md:top-[354px] md:left-[80px] font-normal text-[16px] leading-[32px] text-[#391400]/[64%]">
                  Production
                </p>
              </div>

              {/* button */}
              <div className="absolute md:w-[154px] md:h-[48px] md:top-[433px] md:left-[48px] rounded-[6px] bg-[#ffffff] ">
                <button className="absolute md:w-[95px] md:h-[48px]  md:left-[31.73px] font-epilogue font-black text-[14px] leading-[100%] text-[#291400f] text-center uppercase">
                  Contact Us
                </button>
              </div>

            </div>


          </div>

        </section>

        {/* faq section */}
        <section>

          {/* left side */}
          <div>
            <h5 className="absolute md:w-[34px] md:h-[32px] md:top-[7063px] md:left-[135px] font-epilogue font-normal text-[16px] leading-[32px] text-[#ef6d58] tracking-[3px] uppercase">
              FAQ
            </h5>

            <h3 className="absolute md:w-[371px] md:h-[96px] md:top-[7112px] md:left-[135px] font-epilogue font-extrabold text-[40px] leading-[48px] tracking-[0] text-[#391400]">
              Frequently Asked
              Questions
            </h3>

            <p className="absolute md:w-[470px] md:h-[67px] md:top-[7239px] md:left-[135px] font-epilogue font-normal text-[16px] leading-[32px] text-[#391400]/[64%]">
              A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.
            </p>

            <a
              href=""
              className="absolute md:w-[88px] md:h-[32px] md:top-[7335px] font-epilogue font-normal text-[16px] leading-[32px] text-[#391400] md:left-[135px]  "
            >
              Contact Us
            </a>
          </div>

          {/* right side */}
          <div>
            <div className="absolute md:w-[570px] md:h-[273px] md:top-[7083px] md:left-[735px]">

              <details className="group w-full border border-[#f3d1bf] bg-[#fff] rounded-t-[6px] transition-all duration-300 bg-transparent open:shadow-md open:bg-white ">
                <summary className="flex justify-between items-center cursor-pointer px-6 py-6 text-[#391400] font-epilogue font-bold text-[24px] leading-[32px] text-[#391400]">
                  Hire to outsource your digital
                  <span className="flex items-center justify-center transition-transform duration-300 group-open:rotate-180 w-[32px] h-[32px] rounded-full bg-[#ef6d58]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.24701 0.860022L0.451011 6.34102C-0.114989 6.98802 0.345011 8.00002 1.20401 8.00002H10.796C11.1887 8.00036 11.5452 7.77087 11.7075 7.41333C11.8697 7.05578 11.8078 6.63635 11.549 6.34102L6.75301 0.861022C6.56311 0.643716 6.2886 0.519043 6.00001 0.519043C5.71142 0.519043 5.43691 0.643716 5.24701 0.861022V0.860022Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </summary>

                <div className="px-6 pb-6 text-[#391400]/[64%] font-epilogue text-[16px] leading-[32px]">
                  Digital marketing efforts, instead of handling in-house. They can provide your
                  business with a variety of digital solutions to promote your product or service
                  online and help you hit your marketing goals and grow your business.
                </div>
              </details>

              <details className="group w-full border border-[#f3d1bf] bg-[#fff]  transition-all duration-300 bg-transparent open:shadow-md open:bg-white ">
                <summary className="flex justify-between items-center cursor-pointer px-6 py-6 text-[#391400] font-epilogue font-bold text-[24px] leading-[32px] text-[#391400]">
                  A digital agency is a business
                  <span className="flex items-center justify-center transition-transform duration-300 group-open:rotate-180 w-[32px] h-[32px] rounded-full bg-[#ef6d58]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.24701 0.860022L0.451011 6.34102C-0.114989 6.98802 0.345011 8.00002 1.20401 8.00002H10.796C11.1887 8.00036 11.5452 7.77087 11.7075 7.41333C11.8697 7.05578 11.8078 6.63635 11.549 6.34102L6.75301 0.861022C6.56311 0.643716 6.2886 0.519043 6.00001 0.519043C5.71142 0.519043 5.43691 0.643716 5.24701 0.861022V0.860022Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </summary>

                <div className="px-6 pb-6 text-[#391400]/[64%] font-epilogue text-[16px] leading-[32px]">
                  Digital marketing efforts, instead of handling in-house. They can provide your
                  business with a variety of digital solutions to promote your product or service
                  online and help you hit your marketing goals and grow your business.
                </div>
              </details>

              <details className="group w-full border border-[#f3d1bf] bg-[#fff]  transition-all duration-300 bg-transparent open:shadow-md open:bg-white ">
                <summary className="flex justify-between items-center cursor-pointer px-6 py-6 text-[#391400] font-epilogue font-bold text-[24px] leading-[32px] text-[#391400]">
                  A digital agency is a business
                  <span className="flex items-center justify-center transition-transform duration-300 group-open:rotate-180 w-[32px] h-[32px] rounded-full bg-[#ef6d58]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.24701 0.860022L0.451011 6.34102C-0.114989 6.98802 0.345011 8.00002 1.20401 8.00002H10.796C11.1887 8.00036 11.5452 7.77087 11.7075 7.41333C11.8697 7.05578 11.8078 6.63635 11.549 6.34102L6.75301 0.861022C6.56311 0.643716 6.2886 0.519043 6.00001 0.519043C5.71142 0.519043 5.43691 0.643716 5.24701 0.861022V0.860022Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </summary>

                <div className="px-6 pb-6 text-[#391400]/[64%] font-epilogue text-[16px] leading-[32px]">
                  Digital marketing efforts, instead of handling in-house. They can provide your
                  business with a variety of digital solutions to promote your product or service
                  online and help you hit your marketing goals and grow your business.
                </div>
              </details>

              <details className="group w-full border border-[#f3d1bf] bg-[#fff] rounded-b-[6px] transition-all duration-300 bg-transparent open:shadow-md open:bg-white ">
                <summary className="flex justify-between items-center cursor-pointer px-6 py-6 text-[#391400] font-epilogue font-bold text-[24px] leading-[32px] text-[#391400]">
                  A digital agency is a business
                  <span className="flex items-center justify-center transition-transform duration-300 group-open:rotate-180 w-[32px] h-[32px] rounded-full bg-[#ef6d58]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.24701 0.860022L0.451011 6.34102C-0.114989 6.98802 0.345011 8.00002 1.20401 8.00002H10.796C11.1887 8.00036 11.5452 7.77087 11.7075 7.41333C11.8697 7.05578 11.8078 6.63635 11.549 6.34102L6.75301 0.861022C6.56311 0.643716 6.2886 0.519043 6.00001 0.519043C5.71142 0.519043 5.43691 0.643716 5.24701 0.861022V0.860022Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </summary>

                <div className="px-6 pb-6 text-[#391400]/[64%] font-epilogue text-[16px] leading-[32px]">
                  Digital marketing efforts, instead of handling in-house. They can provide your
                  business with a variety of digital solutions to promote your product or service
                  online and help you hit your marketing goals and grow your business.
                </div>
              </details>

            </div>
          </div>

          {/* map and contact form */}
          <div className="absolute md:w-[1440px] md:h-[720px] md:top-[7792px] bg-red-200">
            <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>

            {/* ocontact form */}
            <form
              action=""
              className="absolute z-2 md:w-[470px] md:h-[464px] md:top-[128px] md:left-[135px] rounded-[6px] bg-[#ffffff] "
            >

              <h4 className="absolute md:w-[153px] md:h-[32px] md:top-[57px] md:left-[32px] font-epilogue font-bold text-[24px] leading-[32px] text-[#391400]">
                Get In Touch
              </h4>

              <input
                type="email"
                placeholder="Your email"
                className="absolute md:w-[374px] md:h-[48px] md:top-[112px] md:left-[32px] border-[1px] border-[#f3d1bf] rounded-[6px] text-[#391400] font-epilogue font-bold text-[16px] leading-[32px] pl-[32px] 
                placeholder:text-[#391400]/[64%] placeholder:font-epilogue placeholder:text-[16px] placeholder:leading-[32px] placeholder:font-normal"
              />


              <div className="absolute md:w-[374px] md:h-[48px] md:top-[168px] md:left-[32px] border-[1px] border-[#f3d1bf] rounded-[6px] font-epilogue font-bold text-[16px] leading-[32px] text-[#391400] pl-[32px] relative">
                <select
                  className="w-full h-full appearance-none bg-transparent outline-none cursor-pointer text-[#391400]/[64%] font-epilogue text-[16px] leading-[32px] font-normal"
                  defaultValue=""
                  aria-placeholder="Subject"
                >
                  <option
                    value="" disabled
                    className="text-[#391400]/[64%] font-epilogue text-[16px] leading-[32px] font-normal"
                  >
                    Subject
                  </option>
                  <option value="apple">Option1</option>
                  <option value="banana">Option2</option>
                  <option value="orange">Option3</option>
                </select>

                {/* Custom dropdown icon */}
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#EF6D58]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                  >
                    <path d="M5 6L10 0H0L5 6Z" fill="#EF6D58" />
                  </svg>
                </div>
              </div>

              <textarea
                name=""
                placeholder="Message"
                className="absolute md:w-[374px] md:h-[124px] md:top-[240px] md:left-[32px] border-[1px] border-[#f3d1bf] rounded-[6px] text-[#391400] font-epilogue font-normal text-[16px] leading-[32px] 
              placeholder:text-[#391400]/[64%] placeholder:font-epilogue placeholder:text-[16px] placeholder:leading-[32px] placeholder:font-normal pl-[32px]"
              ></textarea>

              <button className="absolute md:w-[154px] md:h-[48px] md:top-[400px] md:left-[268px] rounded-[6px] bg-[#ef6d58] font-epilogue font-black text-[14px] leading-[100%] text-[#ffffff] text-center tracking-[0px] uppercase">
                Submit Now
              </button>

            </form>
          </div>
        </section>

      </main >

      <footer>
        <h4 className="absolute md:w-[90px] md:h-[32px] md:top-[8621px] md:left-[135px] font-epilogue font-bold text-[24px] leading-[32px] text-[#391400]">
          Agency
        </h4>

        <h5 className="absolute md:w-[52px] md:h-[32px] md:top-[8624px] md:left-[435px] font-epilogue font-normal text-[16px] leading-[32px] text-[#ef6d58] tracking-[3px] uppercase">
          Menu
        </h5>

        <h5 className="absolute md:w-[52px] md:h-[32px] md:top-[8624px] md:left-[735px] font-epilogue font-normal text-[16px] leading-[32px] text-[#ef6d58] tracking-[3px] uppercase">
          Service
        </h5>

        {/* logos */}
        <div className="absolute flex justify-between md:w-[160px] md:h-[48px] md:top-[8612px] md:left-[1145px]  ">

          <div className="relative md:w-[48px] md:h-[48px] md:top-[0px] md:left-[0px] bg-[#ef6d58] rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              className="absolute md:w-[9.33px] md:h-[16px] md:top-[16px] md:left-[19px]">
              <path d="M2.66667 5.33333H0V8H2.66667V16H6.66667V8H9.09333L9.33333 5.33333H6.66667V4.22267C6.66667 3.58533 6.79467 3.33333 7.41067 3.33333H9.33333V0H6.128C3.73067 0 2.66667 1.056 2.66667 3.07733V5.33333Z" fill="white" />
            </svg>
          </div>

          <div className="relative md:w-[48px] md:h-[48px] md:top-[0px] md:left-[0px] bg-[#ef6d58] rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="13"
              viewBox="0 0 16 13"
              fill="none"
              className="absolute md:w-[16px] md:h-[13px] md:top-[18px] md:left-[18px]"
            >
              <path d="M16 1.54C15.412 1.80133 14.7787 1.97733 14.1147 2.05733C14.7933 1.65067 15.312 1.008 15.5587 0.241333C14.924 0.617333 14.2213 0.890667 13.4733 1.03733C12.876 0.398667 12.0213 0 11.0787 0C8.95867 0 7.40133 1.97733 7.88 4.03067C5.15333 3.89333 2.73333 2.58667 1.11467 0.601333C0.254667 2.076 0.669333 4.00667 2.13067 4.984C1.59333 4.96667 1.088 4.81867 0.645333 4.57333C0.609333 6.09333 1.7 7.516 3.27867 7.83333C2.81733 7.95867 2.31067 7.988 1.796 7.88933C2.21333 9.19333 3.428 10.1413 4.86267 10.168C3.48 11.2507 1.74267 11.7347 0 11.5293C1.45333 12.4613 3.17733 13.004 5.03067 13.004C11.1267 13.004 14.5693 7.856 14.3613 3.23867C15.004 2.77733 15.56 2.19867 16 1.54Z" fill="white" />
            </svg>
          </div>

          <div className="relative md:w-[48px] md:h-[48px] md:top-[0px] md:left-[0px] bg-[#ef6d58] rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="absolute md:w-[16px] md:h-[16px] md:top-[16px] md:left-[16px]"
            >
              <path d="M8 0C10.1732 0 10.4453 0.00981153 11.2998 0.0498047C14.2064 0.181802 15.8214 1.7986 15.9521 4.70117C15.9908 5.55584 16 5.828 16 8C16 10.1733 15.9908 10.4455 15.9521 11.2988C15.8214 14.2067 14.2011 15.8188 11.2998 15.9521C10.4453 15.9908 10.1732 16 8 16C5.82667 16 5.55584 15.9908 4.70117 15.9521C1.79465 15.8188 0.181232 14.204 0.0478516 11.2988C0.0091849 10.4455 0 10.1733 0 8C0 5.828 0.0091849 5.55584 0.0478516 4.70117C0.181232 1.79466 1.79467 0.183195 4.70117 0.0498047C5.34209 0.0198085 5.65475 0.00645466 6.6875 0.00195312L8 0ZM8 1.44238C5.864 1.44238 5.61024 1.44961 4.76758 1.48828C2.59736 1.58706 1.58706 2.61468 1.48828 4.76758C1.45095 5.61024 1.44141 5.864 1.44141 8C1.44141 10.136 1.45095 10.3898 1.48828 11.2324C1.58839 13.38 2.59469 14.4116 4.76758 14.5117C5.61024 14.5504 5.864 14.5586 8 14.5586C10.1373 14.5586 10.3894 14.5491 11.2334 14.5117C13.4039 14.413 14.4136 13.3828 14.5137 11.2324C14.551 10.3898 14.5586 10.136 14.5586 8C14.5586 5.864 14.551 5.61158 14.5137 4.76758C14.4136 2.61587 13.4026 1.58793 11.2334 1.48926C10.3894 1.45059 10.136 1.44238 8 1.44238ZM8 3.8916C10.268 3.8916 12.1084 5.732 12.1084 8C12.1084 10.2693 10.268 12.1084 8 12.1084C5.732 12.1084 3.8916 10.2693 3.8916 8C3.8916 5.73067 5.732 3.8916 8 3.8916ZM8 5.33301C6.52667 5.33301 5.33301 6.528 5.33301 8C5.33301 9.47333 6.52667 10.667 8 10.667C9.472 10.667 10.668 9.47333 10.668 8C10.668 6.52667 9.472 5.33301 8 5.33301ZM12.2695 2.77051C12.8014 2.77061 13.2304 3.19996 13.2305 3.73047C13.2305 4.26107 12.8001 4.69032 12.2695 4.69043C11.7389 4.69043 11.3096 4.2598 11.3096 3.73047C11.3097 3.19989 11.7403 2.77051 12.2695 2.77051Z" fill="white" />
            </svg>
          </div>

        </div>

        {/* links */}
        <div className="absolute flex flex-col md:w-[69px] md:h-[128px] md:top-[8672px] md:left-[435px] font-normal font-epilogue text-[16px] leading-[32px] tracking-[0px] ">
          <a
            href=""
          >
            Home
          </a>
          <a
            href=""
          >
            About
          </a>
          <a
            href=""
          >
            About
          </a>
          <a
            href=""
          >
            Contact
          </a>
        </div>

        <div className="absolute flex flex-col md:w-[69px] md:h-[128px] md:top-[8672px] md:left-[735px] font-normal font-epilogue text-[16px] leading-[32px] tracking-[0px] ">
          <a
            href=""
          >
            Design
          </a>
          <a
            href=""
          >
            Development
          </a>
          <a
            href=""
          >
            Marketing
          </a>
          <a
            href=""
          >
            See More
          </a>
        </div>

        {/* horizontal line */}
        <div className="absolute  md:w-[1170px] md:h-[1px] md:top-[8868px] md:left-[135px] bg-[#F3D1BF] "></div>

        <p className="absolute md:w-[351px] md:h-[32px] md:top-[8912px] md:left-[135px] font-normal font-epilogue text-[16px] leading-[32px] tracking-[0px] text-[#391400]">
          Copyright © 2022 Laaqiq. All Rights Reserved.
        </p>

        <p className="absolute md:w-[102px] md:h-[32px] md:top-[8912px] md:left-[1030px] font-normal font-epilogue text-[16px] leading-[32px] tracking-[0px] text-[#391400]">
          Terms of Use
        </p>

        <p className="absolute md:w-[105px] md:h-[32px] md:top-[8912px] md:left-[1200px] font-normal font-epilogue text-[16px] leading-[32px] tracking-[0px] text-[#391400]">
          Privacy Policy
        </p>

      </footer>



    </>
  );
}
