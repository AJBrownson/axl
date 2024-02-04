// import React from 'react'
import Ellipse from "../assets/Ellipse 940.svg";
// import Smile from "../assets/smile.svg";
// import Sent from "../assets/sent.svg";


const CommentBox = () => {
  const commentsData = [
    {
      id: 1,
      name: "ADXp...HSqu",
      date: "17/1/24",
      time: "7:00 PM",
      comment:
        "I really messed up the game and lost heavily. when will my turn reach?",
    },
    {
      id: 2,
      name: "ADXp...HSqu",
      date: "17/1/24",
      time: "7:10 PM",
      comment: "I actually WON!!!",
    },
    {
      id: 3,
      name: "ADXp...HSqu",
      date: "17/1/24",
      time: "7:30 PM",
      comment:
        "I really messed up the game and lost heavily. when will my turn reach?",
    },
    {
      id: 4,
      name: "ADXp...HSqu",
      date: "17/1/24",
      time: "8:10 PM",
      comment: "I actually WON!!!",
    },
    {
      id: 5,
      name: "ADXp...HSqu",
      date: "17/1/24",
      time: "8:30 PM",
      comment:
        "I really messed up the game and lost heavily. when will my turn reach?",
    },
  ];
  // max-w-[16rem]
  return (
    <>
      <div className="lg:mt-10 font-conthrax max-h-[34rem] max-w-full lg:max-w-[20rem] bg-[#090719] bg-opacity-100 lg:bg-opacity-75 text-white">
        <div className="flex justify-center items-center bg-amber-300">
          <img src={Ellipse} alt="" />
          <h1 className="card-header p-4 text-slate-950">1101</h1>
        </div>

        <div className="card-body px-5">
          {commentsData.map((comment) => (
            <div key={comment.id}>
              <div className="flex items-center mb-2">
                <h1 className="text-xs font-bold text-blue-500 mr-2">
                  {comment.name}
                </h1>
                <div className="text-gray-500 text-xs">
                  {comment.date} {comment.time}
                </div>
              </div>
              {/* Comment content */}
              <p className="text-xs">{comment.comment}</p>
            </div>
          ))}
        </div>
        
        {/* comment box */}
        <input 
          type="text"
          placeholder='Message'
          className="card-body placeholder:text-white text-xs w-full flex-row bg-[#090719] bg-opacity-75 border border-neutral focus:border-red-600 justify-between items-center px-5 py-2"
        />
        {/* <div className="card-body flex-row bg-[#090719] border border-neutral justify-between items-center px-5 py-2">
          <span className="flex items-center">
            <img src={Smile} alt="" />
            <p className="text-xs ml-3">Message</p>
          </span>
          <div>
            <img src={Sent} alt="" />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default CommentBox;
