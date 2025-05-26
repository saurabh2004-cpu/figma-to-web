import React from 'react';

const About = () => {
    return (
        <div>
            {/* Logos */}
            <div className="absolute flex flex-row justify-between md:w-[1170px] md:h-[47px] md:top-[953px] md:left-[135px] bg-[#FDF0E9]">
                <img
                    src="/images/about-section/logo/Bitmap-logo-1.png"
                    alt="Logo 1"
                    className="relative md:w-[147px] md:h-[42px] md:top-[3px]"
                />
                <img
                    src="/images/about-section/logo/Bitmap-logo-2.png"
                    alt="Logo 2"
                    className="relative md:w-[108px] md:h-[32px] md:top-[8px]"
                />
                <img
                    src="/images/about-section/logo/Bitmap-logo-3.png"
                    alt="Logo 3"
                    className="relative md:w-[119px] md:h-[47px]"
                />
                <img
                    src="/images/about-section/logo/Bitmap-logo-4.png"
                    alt="Logo 4"
                    className="relative md:w-[86px] md:h-[21px] md:top-[16px]"
                />
                <img
                    src="/images/about-section/logo/Bitmap-logo-5.png"
                    alt="Logo 5"
                    className="relative md:w-[126px] md:h-[24px] md:top-[17px]"
                />
            </div>

            {/* Horizontal Line */}
            <div className="absolute md:w-[1170px] md:h-[1px] md:top-[1072px] md:left-[135px] bg-[#F3D1BF]" />

            {/* Image and Graphic Left Side */}
            <div className="absolute md:w-[566px] md:h-[585px] md:top-[1174px] md:left-[139px]">
                <img
                    src="/images/about-section/Bitmap-img-1.png"
                    alt="Decorative"
                    className="relative z-5 md:w-[219px] md:h-[219px] md:top-[366px] md:left-[4px]"
                />
                <div className="absolute z-2 md:w-[470px] md:h-[319px] md:top-[155px] md:left-[96px] rounded-[6px] bg-[#b4abba]">
                    <img
                        src="/images/about-section/Bitmap-img-2.png"
                        alt="Agency"
                        className="absolute z-4 md:w-[470px] md:h-[319px]"
                    />
                </div>

                {/* White Rectangle */}
                <div className="absolute z-2 md:w-[216px] md:h-[68px] md:top-[53px] md:left-[294px] bg-[#ffffff] rounded-[6px]">
                    <div className="absolute z-2 md:w-[51px] md:h-[6px] md:top-[42px] md:left-[131px] bg-[#F5DED1] rounded-[3px]" />
                    <div className="absolute z-2 md:w-[62px] md:h-[14px] md:top-[20px] md:left-[131px] bg-[#F5DED1] rounded-[3px]" />
                    <div className="absolute z-3 md:w-[40px] md:h-[40px] md:top-[14px] md:left-[79px] bg-[#f7cc47] rounded-full border-[4px] border-[#ffffff]" />
                    <div className="absolute z-2 md:w-[40px] md:h-[40px] md:top-[14px] md:left-[47px] bg-[#B550F8] rounded-full border-[4px] border-[#ffffff]" />
                    <div className="absolute z-1 md:w-[40px] md:h-[40px] md:top-[14px] md:left-[15px] bg-[#EF6D58] rounded-full border-[4px] border-[#ffffff]" />
                </div>

                {/* SVG Shape */}
                <div className="absolute z-1 md:w-[193px] md:h-[89px] md:top-[0px] md:left-[360px]">
                    {/* Keep your SVG here - No changes needed */}
                </div>

                {/* Path Image */}
                <img
                    src="/images/about-section/Path-img-3.png"
                    alt="Path Graphic"
                    className="absolute z-1 md:w-[192.98px] md:h-[166.07px] md:top-[76px] md:left-[16px]"
                />

                {/* Background Rectangle */}
                <div className="absolute md:w-[384px] md:h-[319px] md:top-[15px] md:left-[68px] bg-[#F9E5DA] rounded-[6px]" />
            </div>

            {/* Right Side Text Section */}
            <div>
                <h5 className="absolute md:w-[62px] md:h-[32px] md:top-[1244px] md:left-[835px] font-epilogue font-normal text-base leading-[32px] tracking-[3px] uppercase text-[#EF6D58]">
                    About
                </h5>
                <h2 className="absolute md:w-[417px] md:h-[128px] md:top-[1296px] md:left-[835px] font-epilogue font-extrabold text-[56px] leading-[64px] tracking-[-1px] text-[#391400]">
                    An Experience Design Agency
                </h2>
                <p className="absolute md:w-[277px] md:h-[32px] md:top-[1450px] md:left-[835px] font-epilogue text-[20px] leading-[32px] text-[#391400]">
                    Provides a full service range
                </p>
                <p className="absolute md:w-[470px] md:h-[98px] md:top-[1500px] md:left-[835px] font-epilogue text-[16px] leading-[32px] text-[#391400]/[0.64]">
                    Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.
                </p>
                <button className="absolute md:w-[138px] md:h-[48px] md:top-[1632px] md:left-[835px] bg-white rounded-[6px] hover:bg-[#f5e8dd]  hover:shadow-md active:scale-95 transition-all duration-300 ease-in-out
                font-epilogue font-black text-[14px] leading-[100%] tracking-[0px] text-[#391400] uppercase text-center ">
                    {/* <span className="font-epilogue font-black text-[14px] leading-[100%] tracking-[0px] text-[#391400] uppercase text-center"> */}
                    About Us
                    {/* </span> */}
                </button>
            </div>

            {/* Feature Boxes */}
            <div>
                {/* Box 1 */}
                <div className="absolute md:w-[391px] md:h-[176px] md:top-[1920px] md:left-[135px] border border-solid border-[#F3D1BF] rounded-tl-[6px] rounded-bl-[6px]">
                    <h3 className="absolute md:w-[77px] md:h-[48px] md:top-[45px] md:left-[48px] font-epilogue font-extrabold text-[40px] leading-[48px] text-[#391400]">
                        42%
                    </h3>
                    <p className="absolute md:w-[198px] md:h-[32px] md:top-[106px] md:left-[48px] font-epilogue text-[20px] leading-[32px] text-[#391400]">
                        Years of experience
                    </p>
                </div>

                {/* Box 2 */}
                <div className="absolute md:w-[391px] md:h-[176px] md:top-[1920px] md:left-[525px] border border-solid border-[#F3D1BF]">
                    <h3 className="absolute md:w-[75px] md:h-[48px] md:top-[45px] md:left-[48px] font-epilogue font-extrabold text-[40px] leading-[48px] text-[#391400]">
                        73+
                    </h3>
                    <p className="absolute md:w-[170px] md:h-[32px] md:top-[106px] md:left-[48px] font-epilogue text-[20px] leading-[32px] text-[#391400]">
                        Agency members
                    </p>
                </div>

                {/* Box 3 */}
                <div className="absolute md:w-[391px] md:h-[176px] md:top-[1920px] md:left-[915px] border border-solid border-[#F3D1BF] rounded-tr-[6px] rounded-br-[6px]">
                    <h3 className="absolute md:w-[75px] md:h-[48px] md:top-[45px] md:left-[48px] font-epilogue font-extrabold text-[40px] leading-[48px] text-[#391400]">
                        5.000
                    </h3>
                    <p className="absolute md:w-[170px] md:h-[32px] md:top-[106px] md:left-[48px] font-epilogue text-[20px] leading-[32px] text-[#391400]">
                        Projects complete
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
