import React from 'react'

const Portfolio = () => {
    return (
        <>
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

                    <button
                        className="absolute z-2 md:w-[84px] md:h-[38px] md:top-[256px] md:left-[48px] 
                          text-[#391400] bg-white rounded-full font-normal text-[16px] leading-[32px] 
                          tracking-[0px]
                          transition-all duration-300 ease-in-out
                          hover:bg-[#f3e8e0] hover:shadow-md
                          active:scale-95 active:bg-[#e6d4c4]"
                    >
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

                    <button
                        className="absolute z-2 md:w-[102px] md:h-[38px] md:top-[256px] md:left-[48px] 
                            text-[#391400] bg-white rounded-full font-normal text-[16px] leading-[32px] 
                            tracking-[0px]
                            transition-all duration-300 ease-in-out
                            hover:bg-[#f3e8e0] hover:shadow-md
                            active:scale-95 active:bg-[#e6d4c4]"
                    >
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

                    <button
                        className="absolute z-2 md:w-[116px] md:h-[38px] md:top-[256px] md:left-[48px] 
                          text-[#391400] bg-white rounded-full font-normal text-[16px] leading-[32px] 
                          tracking-[0px] 
                          transition-all duration-300 ease-in-out
                          hover:bg-[#f3e8e0] hover:shadow-md
                          active:scale-95 active:bg-[#e6d4c4]"
                    >
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

                    <button className="absolute z-2 md:w-[86px] md:h-[38px] md:top-[256px] md:left-[48px] text-[#391400] bg-[#ffffff] rounded-full font-normal text-[16px] leading-[32px] tracking-[0px]
                                transition-all duration-300 ease-in-out
                                hover:bg-[#f3e8e0] hover:shadow-md
                                active:scale-95 active:bg-[#e6d4c4]"
                    >
                        Motion
                    </button>

                    <h3 className="absolute z-2 md:w-[161px] md:h-[48px] md:top-[317px] md:left-[48px] text-white rounded-full font-extrabold text-[40px]  leading-[48px] tracking-[0px]  ">
                        DDDone
                    </h3>
                </div>

            </div>

            {/* button */}
            <div className="absolute md:w-[170px] md:h-[48px] md:top-[1280px] md:left-[635px] border-[1px] border-[#ffffff]/[29.57%] rounded-[6px]">
                <button
                    className="md:w-[170px] md:h-[48px] font-epilogue text-[#ffffff] font-black text-[14px] leading-[100%] tracking-[0px] uppercase text-center bg-transparent border border-white/30 rounded-[6px] transition-all duration-200 hover:bg-[#ef6d58] hover:text-white active:scale-95"
                >
                    Explore More
                </button>
            </div>

           
        </>
    )
}

export default Portfolio
