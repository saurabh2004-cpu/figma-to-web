import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
    return (
        <div>
            {/* Hero Section left side */}
            <h5 className="absolute md:w-[167px] md:h-[32px] md:left-[136px] md:top-[188px] font-epilogue leading-[32px] text-[#ef6d58] tracking-[3px] font-normal text-[16px] uppercase">
                MODERN STUDIO
            </h5>

            {/* decorative star */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="148"
                height="146"
                viewBox="0 0 148 146"
                fill="none"
                className="absolute z-0 md:w-[148px] md:h-[146px] md:left-[413px] md:top-[210px]  text-[#6a6c8e]"
            >
                <path
                    d="M81.8809 38.3018L82.3262 40.2188L83.6123 38.7285L106.338 12.3848L97.5674 46.0527L97.0713 47.957L98.9023 47.2354L131.267 34.4707L107.855 60.207L106.531 61.6621L108.488 61.874L143.078 65.6113L110.388 77.5205L108.539 78.1934L110.173 79.29L139.062 98.6748L104.584 94.0273L102.634 93.7646L103.571 95.4951L120.142 126.084L91.7734 105.946L90.1689 104.808L90.1953 106.775L90.6523 141.562L74.8916 110.547L74 108.793L73.1084 110.547L57.3467 141.562L57.8047 106.775L57.8311 104.808L56.2266 105.946L27.8574 126.084L44.4287 95.4951L45.3662 93.7646L43.416 94.0273L8.93652 98.6748L37.8271 79.29L39.4609 78.1934L37.6123 77.5205L4.9209 65.6113L39.5117 61.874L41.4688 61.6621L40.1445 60.207L16.7324 34.4707L49.0977 47.2354L50.9287 47.957L50.4326 46.0527L41.6611 12.3848L64.3877 38.7285L65.6738 40.2188L66.1191 38.3018L74 4.41309L81.8809 38.3018Z"
                    stroke="#6A6C8E"
                    strokeWidth="2"
                />
            </svg>

            {/* heading */}
            <h1 className="absolute z-10 md:w-[513px] md:h-[240px] md:left-[135px] md:top-[244px] font-extrabold font-epilogue text-[72px] text-white leading-[80px] tracking-[-2px]">
                We’re Help To Build Your Dream Project
            </h1>

            {/* description */}
            <p className="absolute md:w-[470px] md:h-[66px] md:left-[135px] md:top-[508px] text-[#ffffffa3] text-[16px] leading-[32px] font-epilogue font-normal">
                Agency provides a full service range including technical skills, design, business understanding.
            </p>

            {/* button */}
            <button className="absolute md:w-[154px] md:h-[48px] md:left-[135px] md:top-[608px] rounded-[8px] bg-[#ef6d58] text-white font-black text-sm uppercase font-epilogue leading-[48px] transition-all duration-200 hover:bg-[#d95c48] hover:shadow-lg active:scale-95">
                HOW WE WORK
            </button>

            {/* link */}
            <Link
                href="#"
                className="absolute md:w-[88px] md:h-[32px] md:left-[335px] md:top-[616px] text-white text-center text-base font-epilogue leading-[32px]"
            >
                Contact Us
            </Link>

            {/* right-side shapes */}
            <div className="absolute md:w-[370px] md:h-[370px] md:left-[835px] md:top-[278px] bg-[#32334c] rounded-full" />
            <div className="absolute z-2 md:w-[246px] md:h-[246px] md:left-[735px] md:top-[178px] bg-[#b550fb] rounded-full" />
            <div className="absolute z-2 md:w-[246px] md:h-[182px] md:left-[735px] md:top-[301px] bg-[#b550fb]" />

            {/* laptop image */}
            <Image
                src="/images/hero-laptop-img-4.png"
                alt="Laptop mock-up"
                width={255}
                height={265}
                className="absolute z-10 md:left-[756px] md:top-[202px]"
            />

            {/* orange circle + white star */}
            <div className="absolute md:w-[112px] md:h-[112px] md:left-[1039px] md:top-[218px] bg-[#EF6D58] rounded-full" />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="56"
                viewBox="0 0 42 56"
                fill="none"
                className="absolute z-10 md:w-[42px] md:h-[56px] md:left-[1074px] md:top-[246px] ">
                <path fillRule="evenodd" clipRule="evenodd" d="M34.999 0C34.7828 0 34.5904 0.13698 34.5196 0.341261V0.344761L33.6201 3.05027C33.2177 4.26128 32.2693 5.20978 31.0584 5.61228L28.3497 6.51529C28.1455 6.58611 28.0085 6.77858 28.0085 6.99479C28.0085 7.211 28.1455 7.40347 28.3497 7.47429L31.0549 8.37729C32.2648 8.77983 33.2142 9.72927 33.6166 10.9393L34.5196 13.6483C34.5904 13.8526 34.7828 13.9896 34.999 13.9896C35.2152 13.9896 35.4076 13.8526 35.4785 13.6483L36.3814 10.9393C36.7838 9.72927 37.7332 8.77983 38.9431 8.37729L41.6518 7.47429C41.856 7.40347 41.993 7.211 41.993 6.99479C41.993 6.77858 41.856 6.58611 41.6518 6.51529L38.9431 5.61228C37.7322 5.20978 36.7838 4.26128 36.3814 3.05027L35.4785 0.341261C35.4076 0.13698 35.2152 0 34.999 0ZM9.78071 4.01278C9.88363 3.70191 10.1742 3.49202 10.5016 3.49202C10.8291 3.49202 11.1196 3.70191 11.2226 4.01278L12.5769 8.07979C13.1823 9.8928 14.6032 11.3138 16.416 11.9193L20.4826 13.2738C20.7934 13.3768 21.0033 13.6674 21.0033 13.9948C21.0033 14.3223 20.7934 14.6129 20.4826 14.7158L16.416 16.0703C14.6033 16.6743 13.1809 18.0969 12.5769 19.9098L11.2226 23.9769C11.1196 24.2877 10.8291 24.4976 10.5016 24.4976C10.1742 24.4976 9.88363 24.2877 9.78071 23.9769L8.42635 19.9098C7.82241 18.0969 6.39999 16.6743 4.58726 16.0703L0.520699 14.7158C0.209865 14.6129 0 14.3223 0 13.9948C0 13.6674 0.209865 13.3768 0.520699 13.2738L4.58726 11.9193C6.39999 11.3153 7.82241 9.89272 8.42635 8.07979L9.78071 4.01278ZM23.2998 21.8594C23.6847 20.7043 25.3155 20.7043 25.7005 21.8594L27.9578 28.6389C28.9651 31.6605 31.3367 34.0311 34.3586 35.0369L41.1338 37.2944C42.2887 37.6794 42.2887 39.3104 41.1338 39.6954L34.3551 41.9529C31.3338 42.9604 28.9635 45.3323 27.9578 48.3545L25.7005 55.1305C25.5303 55.6493 25.0461 56 24.5001 56C23.9542 56 23.47 55.6493 23.2998 55.1305L21.0425 48.351C20.0359 45.3301 17.6657 42.9597 14.6452 41.9529L7.86641 39.6954C7.34769 39.5252 6.997 39.0409 6.997 38.4949C6.997 37.9489 7.34769 37.4647 7.86641 37.2944L14.6452 35.0369C17.6657 34.0301 20.0359 31.6597 21.0425 28.6389L23.2998 21.8594Z" fill="white" />
            </svg>
            /

      {/* squiggly SVG */ }
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="112"
        height="82"
        viewBox="0 0 112 82"
        fill="none"
        className="absolute md:w-[112px] md:h-[82px] md:left-[1193px] md:top-[258px]"
    >
        <path d="M13.33 26.47 ..." fill="#8082A5" />
    </svg>

    {/* person image & yellow shapes */ }
      <div className="absolute z-2 md:w-[246px] md:h-[246px] md:left-[1059px] md:top-[367px] bg-[#f7cc47] rounded-full" />
      <div className="absolute z-2 md:w-[246px] md:h-[182px] md:left-[1059px] md:top-[490px] bg-[#f7cc47]" />
      <Image
        src="/images/hero-person-img-6.png"
        alt="Person illustration"
        width={246}
        height={269}
        className="absolute z-10 md:left-[1059px] md:top-[405px]"
      />

    {/* white block + grey bars */ }
      <div className="absolute z-5 md:w-[214px] md:h-[112px] md:left-[791px] md:top-[609px] bg-white rounded-[6px]" />
      <div className="absolute z-10 md:w-[94px] md:h-[14px] md:left-[874px] md:top-[636px] bg-[#DFE0E9] rounded-[2px]" />
      <div className="absolute z-10 md:w-[78px] md:h-[6px]  md:left-[874px] md:top-[666px] bg-[#DFE0E9] rounded-[2px]" />
      <div className="absolute z-10 md:w-[94px] md:h-[6px]  md:left-[874px] md:top-[680px] bg-[#DFE0E9] rounded-[2px]" />
      <div className="absolute z-10 md:w-[62px] md:h-[6px]  md:left-[874px] md:top-[694px] bg-[#DFE0E9] rounded-[2px]" />

    {/* orange dot */ }
    <div className="absolute z-5 md:w-[45px] md:h-[45px] md:left-[808px] md:top-[627px] bg-[#EF6D58] rounded-full" />

    {/* tilted arrow */ }
    <div className="absolute md:w-[50px] md:h-[82px] md:left-[1108px] md:top-[780px]">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="94"
            height="35"
            viewBox="0 0 94 35"
            fill="none"
        >
            <path d="M16.33 12.98 ..." fill="#8082A5" />
        </svg>
    </div>

    {/* testimonial text */ }
      <p className="absolute md:w-[327px] md:h-[32px] md:left-[199px] md:top-[764px] text-base font-epilogue font-normal text-[#d3d3d3] leading-[32px]">
        “Put themselves in the merchant&apos;s shoes”
      </p>
      <p className="absolute md:w-[72px] md:h-[32px] md:left-[205px] md:top-[792px] text-base font-normal text-[#d3d3d3] leading-[32px]">
        Meta Inc.
      </p>
    </div >
  );
};

export default Hero;
