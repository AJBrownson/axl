import { useState } from "react"
import Stopper from '../assets/stopper.svg'
import Wheelz from '../assets/wheelz-image.svg'


const Wheeler = () => {
    return (
        <>
        <section className="flex items-center xl:col-span-3 justify-center py-4 px-2 xl:-mt-14 self-start w-full h-full">

<div className="roulette-ring">
    <div className={`roulette-pointer ${(disable && count !== 0) && 'animate-ringBlinker'}`}>
        {/* <div className="z-30 border-[6px] border-[#A61746] rounded-full">
            <Image
                src="/wheelz/rous-blue.svg"
                alt="rous"
                width={25}
                height={25}
            />
        </div> */}

        <img
            src={Stopper}
            alt="rous"
            width={70}
            height={68}
            className="z-30 mt-5"
        />
    </div>

    <div className="roulette-holder flex justify-center ">
        <button
            onClick={() => connected ? spinWheel() : setIsModalOpen(true)}
            disabled={(disable)}
            className={`absolute h-14 w-[120%] border-4 border-black 
                        bg-gradient-to-r
                         ${(connected && address && !disable) ? spin : not_spin} 
                        flex justify-center items-center
                         -bottom-9 rounded-tl-3xl rounded-tr-3xl`}>
            <span className="text-center text-3xl select-none">
                {connected && address ? 'SPIN' : (
                    <ConnectButtonWheel
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                    />
                )}
            </span>
        </button>
    </div>

    <div className="roulette-container">
        <div className="roulette-middle p-1">
            <img
                src={Wheelz}
                alt="wheelz"
                // fill
            />
        </div>

        <div
            ref={wheel}
            className="roulette-wheel">

            {AdaWheelz[wheelz].wheel.map((item, i) => {
                    return (
                        <div className={`roulette-spin ${item.backgroundImage} bg-cover bg-no-repeat`} style={{ backgroundColor: item.background, transform: rotate(calc(${360 / AdaWheelz[wheelz].wheel.length}deg * ${i + 1})) }}
                            key={i}>
                            <span style={{ color: item.textColor }} className="transform rotate-45 w-full text-end pr-[1.4rem] sm:pr-[1.7rem]">
                                <p className=" text-[0.57rem] md:text-[0.77rem]">
                                    {item.name}
                                </p>
                            </span>
                        </div>
                    )
                })
            }

        </div>

    </div>

</div>

</section>
        </>
    )
}

export default Wheeler;