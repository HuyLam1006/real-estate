import React from 'react'
import {
  Airbnb,
  Avatar,
  Avatar2,
  Avatar3,
  Building,
  Buzz,
  Chase,
  Gucc,
  HeaderImage,
  Img1,
  Img2,
  Img3,
  Microsoft,
  Office,
  Uber,
} from '../assets/images'
import {
  IconBuilding,
  IconFind,
  IconHand,
  IconHome,
  IconLine,
  IconLine2,
} from '../assets/svg'

const Main = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <header className="relative pt-9">
          <div className="hidden lg:bg-[#BDCCFF] w-[35%] h-full absolute right-0 top-0 z-0"></div>
          <div className="relative z-10 layout-container">
            <div className="flex items-center justify-between mb-[50px] lg:mb-[117px]">
              <a href="/#" className="font-extrabold text-[23px]">
                SmartSpace
              </a>
              {/* <ion-icon
                name="grid-outline"
                className="text-2xl lg:hidden"
              ></ion-icon> */}
              <ul className="fixed top-0 right-0 bottom-0 w-[300px] bg-white z-50 lg:static lg:w-auto md:flex items-center gap-x-[46px] font-dm text-[13px] transition-all translate-x-full menu-fixed lg:translate-x-0 lg:bg-transparent">
                <li>
                  <a
                    href="/#"
                    className="block p-3 font-bold text-black lg:p-0"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/#"
                    className="block p-3 font-bold text-black lg:p-0"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/#"
                    className="block p-3 font-bold text-black lg:p-0"
                  >
                    Service
                  </a>
                </li>
                <li>
                  <a
                    href="/#"
                    className="block p-3 font-bold text-black lg:p-0"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="/#"
                    className="block p-3 font-bold text-black lg:p-0"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/#"
                    className="block p-3 font-bold text-black lg:p-0"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="relative flex flex-col gap-y-10 lg:block">
              <div className="relative z-10">
                <h3 className="mb-3 font-bold uppecase lg:mb-6 text-orangeff">
                  RESIDENTIAL & OFFICE SPACES
                </h3>
                <h1 className="font-extrabold text-[30px] lg:text-[54px] lg:max-w-[484px] mb-6">
                  Smart Living Style for Smart People
                </h1>
                <p className="text-sm lg:text-[17px] text-gray31 max-w-[500px] mb-12">
                  Much did had call new drew that kept. Limits expect wonder law
                  she. Now has you views woman noisy match money rooms.
                </p>
                <div className="flex flex-col lg:flex-row w-full max-w-[756px] shadow-properties bg-white mb-10 lg:mb-[145px]">
                  <div className="flex items-center flex-1 p-5 mb-3 border gap-x-5 border-grayda lg:border-r-0 lg:mb-0">
                    <img src={IconHome} alt="" />
                    <input
                      type="text"
                      placeholder="Enter Zipcode to search properties"
                      className="flex-1 text-sm font-normal lg:text-xl text-gray31"
                    />
                  </div>
                  <button className="text-white bg-orangef8 p-6 lg:py-8 lg:px-[42.5px] font-bold text-[17px] leading-none">
                    Search Now!
                  </button>
                </div>
                <p className="text-[17px] text-gray31 mb-7">
                  Our Amazing Partners
                </p>
                <div className="grid grid-cols-2 gap-5 lg:flex items-center gap-x-[20px] md:gap-x-[50px]">
                  <img src={Buzz} alt="" />
                  <img src={Chase} alt="" />
                  <img src={Microsoft} alt="" />
                  <img src={Gucc} alt="" />
                  <img src={Airbnb} alt="" />
                  <img src={Uber} alt="" />
                </div>
              </div>
              <div className="lg:absolute lg:right-0 lg:top-0">
                <img src={HeaderImage} alt="" />
              </div>
            </div>
          </div>
        </header>
        <main className="mt-[50px] lg:mt-[223px]">
          <section className="pb-[50px] lg:pb-[225px]">
            <div className="layout-container">
              <h2 className="text-center font-semibold text-[30px] lg:text-[40px] mb-10 lg:mb-[70px]">
                How it works?
              </h2>
              <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-work">
                <div className="flex flex-col items-center text-center">
                  <div className="w-[90px] h-[90px] rounded-[20px] flex items-center justify-center bg-[#9672FF] shadow-purple mb-[50px]">
                    <img src={IconFind} alt="" />
                  </div>
                  <h3 className="mb-4 text-[22px] font-semibold">
                    Research Suburbs
                  </h3>
                  <p className="font-roboto text-gray33">
                    Wonder twenty hunted and put income set desire expect. Am
                    cottage calling.
                  </p>
                </div>
                <img
                  src={IconLine}
                  alt=""
                  className="relative hidden lg:block top-10"
                />
                <div className="flex flex-col items-center text-center">
                  <div className="w-[90px] h-[90px] rounded-[20px] flex items-center justify-center bg-[#4DDFFD] shadow-blue mb-[50px]">
                    <img src={IconHand} alt="" />
                  </div>
                  <h3 className="mb-4 text-[22px] font-semibold">
                    Instant Valuation
                  </h3>
                  <p className="font-roboto text-gray33">
                    Conveying or northward offending admitting perfectly my.
                    Colonel gravit and moonlight.
                  </p>
                </div>
                <img
                  src={IconLine2}
                  alt=""
                  className="relative hidden lg:block top-10"
                />
                <div className="flex flex-col items-center text-center">
                  <div className="w-[90px] h-[90px] rounded-[20px] flex items-center justify-center bg-[#F2B8EC] shadow-pink mb-[50px]">
                    <img src={IconBuilding} alt="" />
                  </div>
                  <h3 className="mb-4 text-[22px] font-semibold">
                    Track Property
                  </h3>
                  <p className="font-roboto text-gray33">
                    Moderate children at of outweigh it. Unsatiable it
                    considered invitation he travelling insensible.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="pb-[50px] lg:pb-[243px]">
            <div className="layout-container">
              <div className="flex flex-col gap-y-5 lg:flex-row items-start justify-between mb-[50px]">
                <div className="max-w-[470px]">
                  <h2 className="text-[30px] lg:text-[40px] font-semibold mb-4">
                    Best Real Estate Deals
                  </h2>
                  <p>
                    Colonel gravity get thought fat smiling add but. Wonder
                    twenty hunted and put income set desire expect.
                  </p>
                </div>
                <a
                  href="/#"
                  className="shadow-orange py-[22px] px-[33px] text-white bg-orangef8 text-[17px] rounded-lg font-medium capitalize"
                >
                  View All Property
                </a>
              </div>
              <div className="flex items-center gap-x-[54px] mb-11 overflow-x-auto whitespace-nowrap">
                <div className="text-[19px] pb-3 border-b border-orangef8 text-orangef8">
                  Residential Property
                </div>
                <div className="text-[19px] pb-3 border-b border-transparent">
                  Commercial Property
                </div>
                <div className="text-[19px] pb-3 border-b border-transparent">
                  Agriculture Property
                </div>
                <div className="text-[19px] pb-3 border-b border-transparent">
                  Industrial Property
                </div>
              </div>
              <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-3 gap-x-[30px]">
                <div className="relative">
                  <img
                    src={Img1}
                    className="object-cover w-full h-full"
                    alt=""
                  />
                  <div className="absolute top-[14px] left-[14px] z-10 flex gap-x-[6px]">
                    <span className="text-white inline-block py-2 px-3 border border-white rounded-md bg-[rgba(0,0,0,0.4)]">
                      Featured
                    </span>
                    <span className="text-white inline-block py-2 px-3 border border-white rounded-md bg-[rgba(0,0,0,0.4)]">
                      3D
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={Img2}
                    className="object-cover w-full h-full"
                    alt=""
                  />
                  <div className="absolute top-[14px] left-[14px] z-10 flex gap-x-[6px]">
                    <span className="text-white inline-block py-2 px-3 border border-white rounded-md bg-[rgba(0,0,0,0.4)]">
                      Featured
                    </span>
                    <span className="text-white inline-block py-2 px-3 border border-white rounded-md bg-[rgba(0,0,0,0.4)]">
                      3D
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={Img3}
                    className="object-cover w-full h-full"
                    alt=""
                  />
                  <div className="absolute top-[14px] left-[14px] z-10 flex gap-x-[6px]">
                    <span className="text-white inline-block py-2 px-3 border border-white rounded-md bg-[rgba(0,0,0,0.4)]">
                      Featured
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="pb-[50px] lg:pb-[196px]">
            <div className="layout-container">
              <h2 className="text-[30px] lg:text-[40px] font-semibold text-center mb-[40px] lg:mb-[70px]">
                Featured Listing of the Week
              </h2>
              <div className="flex flex-col lg:flex-row p-5 lg:p-10 bg-[#F1FFFF] justify-between gap-x-[77px]">
                <div className="w-ful max-w-[492px] relative">
                  <img src={Building} alt="" />
                  <img
                    src={Office}
                    alt=""
                    className="lg:absolute lg:bottom-0 lg:left-2/4 lg:-translate-x-2/4"
                  />
                </div>
                <div className="w-full mt-5 lg:mt-0 lg:max-w-[421px]">
                  <h3 className="text-2xl lg:text-[31px] font-semibold mb-7">
                    The and collecting for the motionless difficulty son.
                  </h3>
                  <p className="mb-11 text-[#545A58]">
                    Conveying or northward offending admitting perfectly my.
                    Colonel gravity get thought fat smiling add but difficult
                    situations.
                  </p>
                  <div className="flex items-start justify-between mb-9">
                    <div className="flex flex-col text-[17px]">
                      <span className="mb-3 font-bold">Budget</span>
                      <span className="text-[#545A58]">Confidential</span>
                    </div>
                    <div className="flex flex-col text-[17px]">
                      <span className="mb-3 font-bold">Size</span>
                      <span className="text-[#545A58]">1200 m2</span>
                    </div>
                    <div className="flex flex-col text-[17px]">
                      <span className="mb-3 font-bold">Type</span>
                      <span className="text-[#545A58]">Office</span>
                    </div>
                  </div>
                  <div className="flex items-start justify-between mb-9">
                    <div className="flex flex-col text-[17px]">
                      <span className="mb-3 font-bold">Status</span>
                      <span className="text-[#545A58]">Done</span>
                    </div>
                    <div className="flex flex-col text-[17px]">
                      <span className="mb-3 font-bold">Location</span>
                      <span className="text-[#545A58]">Switzerland</span>
                    </div>
                    <div className="flex flex-col text-[17px]">
                      <span className="mb-3 font-bold">Flat</span>
                      <span className="text-[#545A58]">8 Room</span>
                    </div>
                  </div>
                  <a
                    href="/#"
                    className="block w-full py-3 text-sm font-medium text-center text-white uppercase rounded-md bg-orangef8 px-9 shadow-orange lg:text-lg "
                  >
                    YES! I WANT BOOK “OFFICE PACKAGE”
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="pb-[50px] lg:pb-[106px]">
            <div className="layout-container">
              <h2 className="text-[30px] lg:text-[40px] font-semibold max-w-[570px] mb-12">
                Loved by businesses, and individuals across the globe.
              </h2>
              <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-3 gap-x-[30px]">
                <div className="py-[52px] px-[38px] border border-[#EBEBEB] rounded-xl">
                  <div className="mb-8 flex items-center gap-x-1 text-[#fbb040]">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                  <p className="text-gray33 mb-[53px] h-[100px]">
                    Moderate children at of outweigh it. Unsatiable it
                    considered invitation he travelling insensible. Consulted
                    admitting oh mr up as described.
                  </p>
                  <div className="flex items-center gap-x-5">
                    <img
                      src={Avatar}
                      alt=""
                      className="object-cover w-12 h-12"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold">Jane Cooper</h4>
                      <span className="text-sm text-[#666]">
                        Los Angeles, CA
                      </span>
                    </div>
                  </div>
                </div>
                <div className="py-[52px] px-[38px] border border-[#EBEBEB] rounded-xl">
                  <div className="mb-8 flex items-center gap-x-1 text-[#fbb040]">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                  <p className="text-gray33 mb-[53px] h-[100px]">
                    The and collecting motionless difficulty son. His hearing
                    staying ten colonel met. Sex drew six easy four dear cold
                  </p>
                  <div className="flex items-center gap-x-5">
                    <img
                      src={Avatar2}
                      alt=""
                      className="object-cover w-12 h-12"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold">Robert Fox</h4>
                      <span className="text-sm text-[#666]">
                        New York City, NY
                      </span>
                    </div>
                  </div>
                </div>
                <div className="py-[52px] px-[38px] border border-[#EBEBEB] rounded-xl">
                  <div className="mb-8 flex items-center gap-x-1 text-[#fbb040]">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                  <p className="text-gray33 mb-[53px] h-[100px]">
                    Sociable on as carriage my position weddings raillery
                    consider. Peculiar trifling absolute and wandered vicinity
                    property yet.
                  </p>
                  <div className="flex items-center gap-x-5">
                    <img
                      src={Avatar3}
                      alt=""
                      className="object-cover w-12 h-12"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold">Leslie Alexander</h4>
                      <span className="text-sm text-[#666]">Buffalo, NJ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-[#fbfcfc] pt-[50px] lg:pt-[162px] pb-10">
          <div className="layout-container">
            <h2 className="text-[30px] lg:text-[45px] font-semibold text-center mb-3">
              Get Our Newsletter
            </h2>
            <p className="text-2xl font-bold text-center mb-9">
              To join the worldwide community
            </p>
            <div className="pb-[160px] mb-[60px] border-b border-[#dedfe1]">
              <div className="max-w-[686px] mx-auto shadow-white py-[26px] px-[30px] bg-white flex items-center rounded-lg flex-col lg:flex-row gap-y-5">
                <div className="flex flex-col flex-1 pr-[30px]">
                  <label
                    htmlFor="email"
                    className="block mb-3 text-gray31 opacity-20"
                  >
                    Type your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="huy.lamgia1601@gmail.com"
                    value="huy.lamgia1601@gmail.com"
                    className="text-xl font-bold text-black "
                  />
                </div>
                <button className="w-full px-10 py-6 text-lg font-medium text-white rounded-lg bg-orangef8 font-dm lg:w-auto">
                  Send Now
                </button>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-between mb-[69px]">
              <a href="/#" className="font-extrabold text-[23px]">
                SmartSpace
              </a>
              <ul className="hidden lg:flex items-center gap-x-[46px] font-dm text-[13px]">
                <li>
                  <a href="/#" className="font-bold text-black">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#" className="font-bold text-black">
                    About
                  </a>
                </li>
                <li>
                  <a href="/#" className="font-bold text-black">
                    Service
                  </a>
                </li>
                <li>
                  <a href="/#" className="font-bold text-black">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="/#" className="font-bold text-black">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/#" className="font-bold text-black">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-xs font-bold text-center">
              Copyright © 2021 AR Shakir . All Rights Reseved.
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Main
