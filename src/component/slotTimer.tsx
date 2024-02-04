// import React from 'react'
import Timer from '../assets/time-02.svg'


const SlotTimer = () => {
  const timer = "04:03";
  return (
    <>
      <section className='lg:mt-10 font-conthrax flex flex-col'>
        <div className="max-w-[20rem] lg:max-w-[24rem] mb-5 p-4 shadow-md bg-gray-800 text-white text-center">
          <div className="pb-4 border-bottom">
            <p>SLOT DETAILS</p>
          </div>
          <div className="w-full">
            <div className="bg-black card rounded-none mb-5">
              <div className="card-body py-5 items-center">
                <span className='flex items-center'>
                <img src={Timer} alt='' className='w-8 h-8 mr-3' />
                <h1 className="lg:text-3xl font-semibold">{timer}</h1>
                </span>
              </div>
            </div>

            {/* bottom cards grid */}
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-black card rounded-none">
                <div className="card-body px-3 py-2">
                  <h1 className="text-xs text-neutral">WAGER</h1>
                  <p className="text-[#FA00FF]">10 ADA</p>
                </div>
              </div>
              <div className="bg-black card rounded-none">
                <div className="card-body px-3 py-2">
                  <h1 className="text-xs text-neutral">PRIZE POOL</h1>
                  <p className="text-[#00FFFF]">50.00 ADA</p>
                </div>
              </div>
              <div className="bg-black card rounded-none">
                <div className="card-body px-3 py-2">
                  <h1 className="text-xs text-neutral">ENTRIES</h1>
                  <p>1/12</p>
                </div>
              </div>
              <div className="bg-black card rounded-none">
                <div className="card-body px-3 py-2">
                  <h1 className="text-xs text-neutral">SLOT NO</h1>
                  <p>1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SlotTimer;
