import { useState } from "react";
import Stopper from "../assets/stopper.svg";
import Handle from "../assets/Stopper handle.svg";
import Logo from "../assets/Vector Logo.svg";
import Black from "../assets/Vector Black Ring.svg";
import Gold from "../assets/Vector Gold Ring.svg";
import Vector from "../assets/Vector.svg";
import Connect from "../assets/fill btn.svg";
import Join from "../assets/join btn.svg";
import GoldSpin from "../assets/Gold spin 1.svg";
import Tag01 from "../assets/sale-tag-01-1.svg";
import Tag02 from "../assets/sale-tag-01.svg";
import SlotTimer from "./slotTimer";
import CommentBox from '../component/comments'
import { FaComments, FaTrophy } from "react-icons/fa6";
import RecentWinners from "./winners";


const RouletteWheel = () => {
  const [isJoinClicked, setIsJoinClicked] = useState(false);
  const [comments, setComments] = useState(false);
  const [winners, setWinners] = useState(false);

  const handleComments = () => {
    setComments(!comments)
  }

  const handleWinners = () => {
    setWinners(!winners)
  }

  const handleImageClick = () => {
    // On the first click, toggle between Connect and Join images
    if (!isJoinClicked) {
      setIsJoinClicked(true);
    } else {
      // On the second click (Join image), show the modal
      document.getElementById("modal-1")?.click();
    }
  };

  const handleModalClose = () => {
    // Reset state to make Connect image appear after modal is closed
    setIsJoinClicked(false);
  };

  return (
    <>
      <section className="lg:mt-28 lg:flex lg:items-center h-full">
        <div className="hidden lg:flex">
          <div className="relative px-5 rounded-full outline outline-4 outline-blue-800">
            <div className="flex items-center justify-center">
              <img
                src={Stopper}
                alt=""
                className="w-24 bottom-[22rem] absolute z-[1]"
              />
              <img src={Handle} alt="" className="w-36 bottom-[23rem] absolute" />
            </div>

            <ul className="z-0 relative w-60 lg:w-[25rem] h-60 lg:h-[25rem] border-[15px] border-[hsl(36,100%,75%)] border-solid mx-auto my-4 rounded-full overflow-hidden p-0">
              <li className="bg-[#090719] border-l border-[#E98100] transform rotate-0 skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                <div className="absolute -left-[100%] width-[200%] height-[200%]">
                  <img
                    src={GoldSpin}
                    alt=""
                    className="object-cover w-full h-full transform rotate-[40deg] skew-y-[50deg]"
                  />
                </div>
              </li>
              <li className="bg-[#090719] border-l border-[#FA00FF] transform rotate-[30deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                <div className="absolute -left-[100%] width-[200%] height-[200%]">
                  2
                </div>
              </li>
              <li className="bg-[#090719] border-l border-[#00FFFF] transform rotate-[60deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                <div className="absolute -left-[100%] width-[200%] height-[200%]">
                  3
                </div>
              </li>
              <li className="bg-[#090719] border-l border-[#E98100] transform rotate-[90deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                <div className="absolute -left-[100%] width-[200%] height-[200%]">
                  4
                </div>
              </li>
              <li className="bg-[#090719] border-l border-[#007BFF] transform rotate-[120deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                <div className="absolute -left-[100%] width-[200%] height-[200%]">
                  5
                </div>
              </li>
              <li className="bg-[#090719] border-l border-[#00FFFF] transform rotate-[150deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                <div className="absolute -left-[100%] width-[200%] height-[200%]">
                  6
                </div>
              </li>
              <li className="bg-[#090719] border-l border-[#E98100] transform rotate-[180deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                <div className="absolute -left-[100%] width-[200%] height-[200%]">
                  7
                </div>
              </li>
              <li className="bg-[#090719] border-l border-[#FA00FF] transform rotate-[210deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                <div className="absolute -left-[100%] width-[200%] height-[200%]">
                  8
                </div>
              </li>
              <li className="bg-[#090719] border-l border-[#00FFFF] transform rotate-[240deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                <div className="absolute -left-[100%] width-[200%] height-[200%]">
                  9
                </div>
              </li>
              <li className="bg-[#090719] border-l border-[#E98100] transform rotate-[270deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                <div className="absolute -left-[100%] width-[200%] height-[200%]">
                  10
                </div>
              </li>
              <li className="bg-[#090719] border-l border-[#007BFF] transform rotate-[300deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                <div className="absolute -left-[100%] width-[200%] height-[200%]">
                  11
                </div>
              </li>
              <li className="bg-[#090719] border-l border-[#007BFF] transform rotate-[330deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                <div className="absolute -left-[100%] width-[200%] height-[200%]">
                  12
                </div>
              </li>
            </ul>

            {/* div for logo */}
            <div className="flex items-center justify-center">
              <img
                src={Black}
                alt=""
                className="w-12 lg:w-16 absolute bottom-28 lg:bottom-[11.5rem] llg:eft-[11.75rem]"
              />
              <img
                src={Gold}
                alt=""
                className="w-8 lg:w-12 absolute bottom-[7.5rem] lg:bottom-48 lg:left-[12.25rem]"
              />
              <img
                src={Logo}
                alt=""
                className="w-6 lg:w-10 absolute bottom-[7.75rem] lg:bottom-[12.25rem] lg:left-[12.5rem] rounded-full"
              />
            </div>

            {/* wheel base */}
            <div className="flex items-center">
              <img
                src={Vector}
                alt=""
                className="absolute left-16 lg:left-32 lg:top-[25.5rem]"
              />
              {/* <img
              src={Connect}
              alt=""
              className="absolute left-[6.5rem] top-[29rem] w-60"
            /> */}
              <img
                src={isJoinClicked ? Join : Connect}
                alt="Connect/Join"
                onClick={handleImageClick}
                className="absolute left-10 lg:left-[6.5rem] top-[19rem] lg:top-[29rem] w-60 cursor-pointer"
              />
            </div>
          </div>
        </div>


        {/* this displays the recent winners and chatbox widgets on mobile view */}
        <div className='lg:hidden flex justify-between p-10'>
        <div onClick={handleWinners}>
          {winners ? <FaTrophy /> : <FaTrophy />}
          </div>
          <div className={winners ? `z-40 fixed left-0 bottom-0 ease-in-out duration-1000`: `ease-in-out duration-1000 z-40 fixed left-0 -bottom-[100%]`}>
          <RecentWinners />
          </div>
          
          <div onClick={handleComments}>
          {comments ? <FaComments /> : <FaComments />}
          </div>
          <div className={comments ? `z-40 fixed left-0 bottom-0 ease-in-out duration-1000`: `ease-in-out duration-1000 z-40 fixed left-0 -bottom-[100%]`}>
          <CommentBox />
          </div>
        </div>

        {/* this displays the wheel on mobile view */}
        <div className="mt-20 flex-col lg:hidden">
        <div className="flex justify-center items-center">
          <div className="relative px-5 rounded-full outline outline-blue-500">
            <div className="flex items-center justify-center">
              <img
                src={Stopper}
                alt=""
                className="w-14 bottom-56 absolute z-[1]"
              />
              <img src={Handle} alt="" className="w-28 bottom-52 absolute" />
            </div>
            <ul className="z-0 relative w-60 lg:w-[25rem] h-60 lg:h-[25rem] border-[15px] border-[hsl(36,100%,75%)] border-solid mx-auto my-4 rounded-full overflow-hidden p-0">
              <li className="bg-[#E98100] border-l border-[#E98100] transform rotate-0 skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                <div className="absolute -left-[100%] width-[200%] height-[200%]">
                  <img
                    src={GoldSpin}
                    alt=""
                    className="object-cover w-full h-full transform rotate-0 skew-y-60"
                  />
                </div>
              </li>
              <li className="bg-[#090719] border-l border-[#FA00FF] transform rotate-[30deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                <div className="absolute -left-[100%] width-[200%] height-[200%]">
                  2
                </div>
              </li>
              <li className="bg-[#090719] border-l border-[#00FFFF] transform rotate-[60deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                <div className="absolute -left-[100%] width-[200%] height-[200%]">
                  3
                </div>
              </li>
              <li className="bg-[#090719] border-l border-[#E98100] transform rotate-[90deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                <div className="absolute -left-[100%] width-[200%] height-[200%]">
                  4
                </div>
              </li>
              <li className="bg-[#090719] border-l border-[#007BFF] transform rotate-[120deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                <div className="absolute -left-[100%] width-[200%] height-[200%]">
                  5
                </div>
              </li>
              <li className="bg-[#090719] border-l border-[#00FFFF] transform rotate-[150deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                <div className="absolute -left-[100%] width-[200%] height-[200%]">
                  6
                </div>
              </li>
              <li className="bg-[#090719] border-l border-[#E98100] transform rotate-[180deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                <div className="absolute -left-[100%] width-[200%] height-[200%]">
                  7
                </div>
              </li>
              <li className="bg-[#090719] border-l border-[#FA00FF] transform rotate-[210deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                <div className="absolute -left-[100%] width-[200%] height-[200%]">
                  8
                </div>
              </li>
              <li className="bg-[#090719] border-l border-[#00FFFF] transform rotate-[240deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                <div className="absolute -left-[100%] width-[200%] height-[200%]">
                  9
                </div>
              </li>
              <li className="bg-[#090719] border-l border-[#E98100] transform rotate-[270deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                <div className="absolute -left-[100%] width-[200%] height-[200%]">
                  10
                </div>
              </li>
              <li className="bg-[#090719] border-l border-[#007BFF] transform rotate-[300deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                <div className="absolute -left-[100%] width-[200%] height-[200%]">
                  11
                </div>
              </li>
              <li className="bg-[#090719] border-l border-[#007BFF] transform rotate-[330deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                <div className="absolute -left-[100%] width-[200%] height-[200%]">
                  12
                </div>
              </li>
            </ul>

            {/* div for logo */}
            <div className="flex items-center justify-center">
              <img
                src={Black}
                alt=""
                className="w-12 lg:w-16 absolute bottom-28 lg:bottom-[11.5rem] llg:eft-[11.75rem]"
              />
              <img
                src={Gold}
                alt=""
                className="w-8 lg:w-12 absolute bottom-[7.5rem] lg:bottom-48 lg:left-[12.25rem]"
              />
              <img
                src={Logo}
                alt=""
                className="w-6 lg:w-10 absolute bottom-[7.75rem] lg:bottom-[12.25rem] lg:left-[12.5rem] rounded-full"
              />
            </div>

            {/* wheel base */}
            <div className="flex items-center justify-center">
              <img src={Vector} alt="" className="absolute left-12" />
              <img
                src={isJoinClicked ? Join : Connect}
                alt="Connect/Join"
                onClick={handleImageClick}
                className="absolute left-5 top-[19rem] w-60 cursor-pointer"
              />
            </div>
          </div>
          </div>

          <div className="lg:hidden flex justify-center mt-24">
          <SlotTimer />
          </div>
        </div>


        {/* this displays the modal when triggered */}
        <input className="modal-state" id="modal-1" type="checkbox" />
        <div className="modal">
          <label
            className="modal-overlay"
            htmlFor="modal-1"
          ></label>
          <div className="py-6 bg-slate-950 border border-neutral-400 modal-content card rounded-none items-center flex flex-col gap-5">
            <span className="relative mt-4">
              <img src={Tag02} alt="" />
              <img src={Tag01} alt="" className="absolute bottom-5 right-4" />
            </span>
            <div className="text-center">
              <h1 className="text-lg">PRESALE LAUNCH</h1>
              <p className="text-sm">
                XMAX slots will be available for gamers after token presale
              </p>
            </div>
              <label
                onClick={handleModalClose}
                htmlFor="modal-1"
                className="text-black cursor-pointer px-4 py-3.5 text-base font-semibold w-28 h-12 bg-cyan-400 hover:bg-fuchsia-500 justify-center items-center gap-2.5 inline-flex"
              >
                ok
              </label>
          </div>
        </div>
      </section>
    </>
  );
};

export default RouletteWheel;