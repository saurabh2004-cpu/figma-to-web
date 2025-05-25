import React from 'react'

const HowWeWorks = () => {
  return (
    <>
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
        <a href="" className="absolute md:w-[84px] md:h-[32px] md:top-[2508px] md:left-[135px] font-epilogue font-semibold text-[16px] leading-[32px] tracking-[0px] text-[#391400]">
          Read More
        </a>


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
          <div className=" z-3 absolute md:w-[148px] md:h-[148px] md:top-[110px] md:left-[210px]">
            <button
              className="absolute md:w-[148px] md:h-[148px] rounded-full border-[1px] border-white 
                            flex items-center justify-center
                            transition-all duration-300 ease-in-out
                            hover:bg-white/10 hover:scale-105
                            active:scale-95 active:bg-white/20"
            >
              <div className="w-0 h-0 border-l-[16px] border-r-[16px] border-b-[22px] 
                                  border-l-transparent border-r-transparent border-b-white 
                                  rotate-[90deg] rounded-[2px]">
              </div>
            </button>

          </div>


          {/* time */}
          <div className="absolute md:w-[47px] md:h-[32px] md:top-[314px] md:left-[24px] rounded-[3px] font-epilogue font-normal text-[16px] leading-[32px] tracking-[0px] text-[#ffffff]">
            <p className="">1:45</p>
          </div>
        </div>

        {/* overlay */}
        <div className="absolute z-2 md:w-[570px] md:h-[368px] md:top-[2848px] md:left-[135px] rounded-[6px] bg-[#5C2000] opacity-[31.81%]"></div>


        <h5 className="absolute md:w-[114px] md:h-[32px] md:top-[2908px] md:left-[835px] font-epilogue text-[16px] font-normal leading-[32px] tracking-[3px] uppercase  text-[#ef6d58] uppercase">
          Video Reel
        </h5>

        <h3 className="absolute md:w-[469px] md:h-[99px] md:top-[2957px] md:left-[835px] font-epilogue font-extrabold text-[40px] leading-[48px text-[#391400]">
          Unlock The Greatest Value Possible
        </h3>

        <p className="absolute md:w-[470px] md:h-[70px] md:top-[3084px] md:left-[835px] font-epilogue font-normal text-[16px] leading-[32px]  text-[#391400]/[0.64]">
          Design, business understanding, ability to put themselves in the merchant's shoes meant to partner.
        </p>
      </div>
    </>
  )
}

export default HowWeWorks
