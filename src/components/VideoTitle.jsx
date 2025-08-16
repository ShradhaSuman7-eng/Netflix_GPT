import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-12 w-screen aspect-video text-white absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>

      <div>
        <button className="bg-white text-black p-4 px-12 text-xl  rounded-lg hover:bg-orange-50%">
          <span>
            <i class="fa-solid fa-play"></i>
          </span>{" "}
          Play
        </button>

        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          <span>
           <i class="fa-solid fa-circle-info"></i>
          </span>{" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
