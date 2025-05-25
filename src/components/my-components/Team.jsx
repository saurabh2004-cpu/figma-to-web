'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselApi,
    useCarousel
} from "@/components/ui/carousel"


const Team = () => {

    const carouselItems = [
        {
            id: 1,
            img: "/images/porfolio-section/carousel/Bitmap(16).png",
            height: 196,
            width: 247,
            name: "Azah Anyeni",
            subtitle: "Designer"
        },
        {
            id: 2,
            img: "/images/porfolio-section/carousel/Bitmap(17).png",
            height: 259,
            width: 232,
            name: "Roelof Bekkenenks",
            subtitle: "React Developer"
        },
        {
            id: 3,
            img: "/images/porfolio-section/carousel/Bitmap(18).png",
            height: 205,
            width: 238,
            name: "Leonardo Oliveira",
            subtitle: "Illustrator"
        },
        {
            id: 4,
            img: "/images/porfolio-section/carousel/Bitmap(19).png",
            height: 230,
            width: 233,
            name: "Izabella Tabakova",
            subtitle: "Product Designer"
        },
        {
            id: 5,
            img: "/images/porfolio-section/carousel/Bitmap(19).png",
            height: 230,
            width: 233,
            name: "John Doe",
            subtitle: "designer"
        },
        {
            id: 6,
            img: "/images/porfolio-section/carousel/Bitmap(19).png",
            height: 230,
            width: 233,
            name: "John Doe",
            subtitle: "designer"
        }
    ]

    const [api, setApi] = useState()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <>
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

                <div className="absolute md:w-[154px] md:h-[48px] md:top-[224px] md:left-[100px] bg-[#EF6D58] text-white rounded-[6px] flex items-center justify-center transition-all duration-200
                            hover:text-[#EF6D58] hover:bg-white hover:shadow-lg
                            active:scale-95 hover:text-[#EF6D58]">
                    <button className="md:w-[95px] md:h-[14px]  font-black font-epilogue text-[14px] leading-[100%] text-center uppercase ">
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

                <div className="w-full  py-16 px-4 absolute md:top-[600px] md:left-[0px]">
                    <div className="max-w-7xl mx-auto">
                        <Carousel
                            setApi={setApi}
                            className="w-full"
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                        >
                            <CarouselContent className="-ml-2 md:-ml-4">
                                {carouselItems.map((member) => (
                                    <CarouselItem key={member.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                        <div className="p-1">
                                            <Card className="bg-transparent border-none shadow-none">
                                                <CardContent className="p-0 flex flex-col justify-between">
                                                    <div className="text-center space-y-4 ">
                                                        <div className="relative w-[270px] h-[272px] mx-auto justify-center relative md:w-[270px] md:h-[272px] border-[1px] border-[#3a4c56] rounded-[6px] flex justify-center">
                                                            <Image
                                                                src={member.img || "/placeholder.svg"}
                                                                alt={member.name}
                                                                fill
                                                                className="object-cover rounded-lg"
                                                            />
                                                        </div>
                                                        <div className="space-y-1 left-[0px]">
                                                            <h3 className="text-white text-xl font-semibold">{member.name}</h3>
                                                            <p className="text-gray-400 text-base">{member.subtitle}</p>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            {/* Navigation arrows - hidden on mobile, visible on larger screens */}
                            <CarouselPrevious className="relative md:top-[-512px] md:left-[1041px] md:w-[48px] md:h-[48px] rounded-full border-[1px] border-white flex items-center justify-center fill-none bg-white/1 text-white hover:bg-white/20" />
                            <CarouselNext className="relative md:w-[48px] md:h-[48px] md:top-[-560px] md:left-[1106px] rounded-full border-[1px] border-white flex items-center justify-center fill-none bg-white/1 text-white hover:bg-white/20" />
                        </Carousel>

                        {/* Dot indicators */}
                        <div className="flex justify-center relative h-[12px] md:top-[-30px] space-x-2">
                            {Array.from({ length: count }).map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${index + 1 === current ? "bg-orange-500" : "bg-gray-500"
                                        }`}
                                    onClick={() => api?.scrollTo(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Team
