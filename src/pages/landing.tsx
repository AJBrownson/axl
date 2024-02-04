// import React from 'react'
import RouletteWheel from "../component/rouletteWheel";
import SlotTimer from "../component/slotTimer";
import CommentBox from "../component/comments";
import RecentWinners from "../component/winners";


const Landing = () => {
  return (
    <main className="bg-[#090719] bg-hero-sm lg:bg-hero bg-center bg-cover bg-no-repeat text-white lg:h-[100vh]">
      {/* banner */}
      <div className='font-conthrax flex justify-between py-2 px-4 bg-transparent border border-transparent border-b-yellow-500 text-yellow-300'>
        <p className="tracking-[1.5em] text-xs lg:text-base lg:tracking-[2.5em] font-thin">XMAX SLOTS</p>
        <p className="hidden lg:block tracking-[0.5em] text-xs lg:text-base lg:tracking-[2.5em] font-thin">XMAX SLOTS</p>
      </div>

      {/* main content here */}
      <section className="container lg:mx-auto xl:max-w-7xl lg:flex lg:justify-between">
        <div className="hidden lg:block">
          <SlotTimer />
          <RecentWinners />
        </div>
        <RouletteWheel />
        <div className="hidden lg:block">
          <CommentBox />
        </div>
      </section>
    </main>
  );
};

export default Landing;
