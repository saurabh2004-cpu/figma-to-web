import React from 'react'

const FooterSection = () => {
    return (
        <>
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
            <div className="absolute flex justify-between md:w-[160px] md:h-[48px] md:top-[8612px] md:left-[1145px]">
                {/* Facebook */}
                <div className="relative md:w-[48px] md:h-[48px] bg-[#ef6d58] rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[#d95c48] active:scale-95 cursor-pointer group">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="16"
                        viewBox="0 0 10 16"
                        fill="none"
                        className="md:w-[9.33px] md:h-[16px] transition-all duration-200 group-hover:scale-110 group-active:scale-90"
                    >
                        <path d="M2.66667 5.33333H0V8H2.66667V16H6.66667V8H9.09333L9.33333 5.33333H6.66667V4.22267C6.66667 3.58533 6.79467 3.33333 7.41067 3.33333H9.33333V0H6.128C3.73067 0 2.66667 1.056 2.66667 3.07733V5.33333Z" fill="white" />
                    </svg>
                </div>

                {/* Twitter */}
                <div className="relative md:w-[48px] md:h-[48px] bg-[#ef6d58] rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[#d95c48] active:scale-95 cursor-pointer group">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="13"
                        viewBox="0 0 16 13"
                        fill="none"
                        className="md:w-[16px] md:h-[13px] transition-all duration-200 group-hover:scale-110 group-active:scale-90"
                    >
                        <path d="M16 1.54C15.412 1.80133 14.7787 1.97733 14.1147 2.05733C14.7933 1.65067 15.312 1.008 15.5587 0.241333C14.924 0.617333 14.2213 0.890667 13.4733 1.03733C12.876 0.398667 12.0213 0 11.0787 0C8.95867 0 7.40133 1.97733 7.88 4.03067C5.15333 3.89333 2.73333 2.58667 1.11467 0.601333C0.254667 2.076 0.669333 4.00667 2.13067 4.984C1.59333 4.96667 1.088 4.81867 0.645333 4.57333C0.609333 6.09333 1.7 7.516 3.27867 7.83333C2.81733 7.95867 2.31067 7.988 1.796 7.88933C2.21333 9.19333 3.428 10.1413 4.86267 10.168C3.48 11.2507 1.74267 11.7347 0 11.5293C1.45333 12.4613 3.17733 13.004 5.03067 13.004C11.1267 13.004 14.5693 7.856 14.3613 3.23867C15.004 2.77733 15.56 2.19867 16 1.54Z" fill="white" />
                    </svg>
                </div>

                {/* Instagram */}
                <div className="relative md:w-[48px] md:h-[48px] bg-[#ef6d58] rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[#d95c48] active:scale-95 cursor-pointer group">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="md:w-[16px] md:h-[16px] transition-all duration-200 group-hover:scale-110 group-active:scale-90"
                    >
                        <path d="M8 0C10.1732 0 10.4453 0.00981153 11.2998 0.0498047C14.2064 0.181802 15.8214 1.7986 15.9521 4.70117C15.9908 5.55584 16 5.828 16 8C16 10.1733 15.9908 10.4455 15.9521 11.2988C15.8214 14.2067 14.2011 15.8188 11.2998 15.9521C10.4453 15.9908 10.1732 16 8 16C5.82667 16 5.55584 15.9908 4.70117 15.9521C1.79465 15.8188 0.181232 14.204 0.0478516 11.2988C0.0091849 10.4455 0 10.1733 0 8C0 5.828 0.0091849 5.55584 0.0478516 4.70117C0.181232 1.79466 1.79467 0.183195 4.70117 0.0498047C5.34209 0.0198085 5.65475 0.00645466 6.6875 0.00195312L8 0ZM8 1.44238C5.864 1.44238 5.61024 1.44961 4.76758 1.48828C2.59736 1.58706 1.58706 2.61468 1.48828 4.76758C1.45095 5.61024 1.44141 5.864 1.44141 8C1.44141 10.136 1.45095 10.3898 1.48828 11.2324C1.58839 13.38 2.59469 14.4116 4.76758 14.5117C5.61024 14.5504 5.864 14.5586 8 14.5586C10.1373 14.5586 10.3894 14.5491 11.2334 14.5117C13.4039 14.413 14.4136 13.3828 14.5137 11.2324C14.551 10.3898 14.5586 10.136 14.5586 8C14.5586 5.864 14.551 5.61158 14.5137 4.76758C14.4136 2.61587 13.4026 1.58793 11.2334 1.48926C10.3894 1.45059 10.136 1.44238 8 1.44238ZM8 3.8916C10.268 3.8916 12.1084 5.732 12.1084 8C12.1084 10.2693 10.268 12.1084 8 12.1084C5.732 12.1084 3.8916 10.2693 3.8916 8C3.8916 5.73067 5.732 3.8916 8 3.8916ZM8 5.33301C6.52667 5.33301 5.33301 6.528 5.33301 8C5.33301 9.47333 6.52667 10.667 8 10.667C9.472 10.667 10.668 9.47333 10.668 8C10.668 6.52667 9.472 5.33301 8 5.33301ZM12.2695 2.77051C12.8014 2.77061 13.2304 3.19996 13.2305 3.73047C13.2305 4.26107 12.8001 4.69032 12.2695 4.69043C11.7389 4.69043 11.3096 4.2598 11.3096 3.73047C11.3097 3.19989 11.7403 2.77051 12.2695 2.77051Z" fill="white" />
                    </svg>
                </div>
            </div>

            {/* links */}
            <div className="absolute flex flex-col md:w-[69px] md:h-[128px] md:top-[8672px] md:left-[435px] font-normal font-epilogue text-[16px] leading-[32px] tracking-[0px]">
                <a
                    href=""
                    className="no-underline hover:underline hover:text-[#EF6D58]"
                >
                    Home
                </a>
                <a
                    href=""
                    className="no-underline hover:underline hover:text-[#EF6D58]"
                >
                    About
                </a>
                <a
                    href=""
                    className="no-underline hover:underline hover:text-[#EF6D58]"
                >
                    About
                </a>
                <a
                    href=""
                    className="no-underline hover:underline hover:text-[#EF6D58]"
                >
                    Contact
                </a>
            </div>

            <div className="absolute flex flex-col md:w-[69px] md:h-[128px] md:top-[8672px] md:left-[735px] font-normal font-epilogue text-[16px] leading-[32px] tracking-[0px]">
                <a
                    href=""
                    className="no-underline hover:underline hover:text-[  #EF6D58]"
                >
                    Design
                </a>
                <a
                    href=""
                    className="no-underline hover:underline hover:text-[#EF6D58]"
                >
                    Development
                </a>
                <a
                    href=""
                    className="no-underline hover:underline hover:text-[#EF6D58]"
                >
                    Marketing
                </a>
                <a
                    href=""
                    className="no-underline hover:underline hover:text-[#EF6D58]"
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


        </>
    )
}

export default FooterSection
