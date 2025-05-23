import Image from "next/image";
import Link from "next/link";
import { Gift, Star } from 'lucide-react';


export default function Home() {
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

      {/* about section */}
      <section className="bg-[#fdf0e9] md:w-[1440px] md:h-[2500px] md:top-[880px]  ">

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
        <div className="absolute md:w-[1170px] md:h-[336px] md:top-[1520px] md:left-[135px] bg-[#FDF0E9] ">

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

        </div>

      </section>




    </>
  );
}
