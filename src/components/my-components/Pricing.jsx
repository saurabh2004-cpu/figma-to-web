import React from 'react'

const Pricing = () => {
    return (
        <>

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
                    <div className="absolute md:w-[154px] md:h-[48px] md:top-[433px] md:left-[48px] rounded-[6px] bg-[#ffffff] text-[#391400]
                            transition-all duration-200
                            hover:bg-[#ef6d58] hover:text-white hover:shadow-lg hover:text-white
                            active:scale-95"
                    >
                        <button
                            className="absolute md:w-[95px] md:h-[48px] md:left-[31.73px] font-epilogue font-black text-[14px] leading-[100%]  text-center uppercase"
                            style={{ borderRadius: 6 }}
                        >
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
                    <div className="absolute md:w-[154px] md:h-[48px] md:top-[480px] md:left-[48px] rounded-[6px] bg-[#ef6d58] text-[#ffffff] 
                            transition-all duration-200
                            hover:bg-[#ef6d58] hover:text-[#ef6d58] hover:shadow-lg hover:text-[#ef6d58] hover:bg-[#ffffff]
                            active:scale-95"
                    >
                        <button className="absolute md:w-[95px] md:h-[48px]  md:left-[31.73px]  font-epilogue font-black text-[14px] leading-[100%]  text-center uppercase">
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
                    <div className="absolute md:w-[154px] md:h-[48px] md:top-[433px] md:left-[48px] rounded-[6px] bg-[#ffffff] text-[#391400]
                            transition-all duration-200
                            hover:bg-[#ef6d58] hover:text-white hover:shadow-lg hover:text-white
                            active:scale-95">
                        <button className="absolute md:w-[95px] md:h-[48px]  md:left-[31.73px] font-epilogue font-black text-[14px] leading-[100%]  text-center uppercase">
                            Contact Us
                        </button>
                    </div>

                </div>


            </div>


        </>
    )
}

export default Pricing
