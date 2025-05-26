import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
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
            <div className="absolute md:w-[1440px] mx-auto lg:w-[100%] md:h-[720px] md:top-[7792px] bg-red-200">
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
                            // aria-placeholder="Subject"
                            placeholder="Subject"
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
                        placeholder="Message"
                        className="absolute md:w-[374px] md:h-[124px] md:top-[240px] md:left-[32px] border-[1px] border-[#f3d1bf] rounded-[6px] text-[#391400] font-epilogue font-normal text-[16px] leading-[32px] 
                                    placeholder:text-[#391400]/[64%] placeholder:font-epilogue placeholder:text-[16px] placeholder:leading-[32px] placeholder:font-normal pl-[32px]"
                    ></textarea>

                    <button className="absolute md:w-[154px] md:h-[48px] md:top-[400px] md:left-[268px] rounded-[6px] bg-[#ef6d58] font-epilogue font-black text-[14px] leading-[100%] text-[#ffffff] text-center tracking-[0px] uppercase
                             text-[#ffffff] 
                            transition-all duration-200
                            hover:bg-[#ef6d58] hover:text-[#ef6d58] hover:shadow-lg hover:text-[#ef6d58] hover:bg-[#ffffff]
                            active:scale-95"
                    >
                        Submit Now
                    </button>

                </form>
            </div>
        </>
    )
}

export default Map
