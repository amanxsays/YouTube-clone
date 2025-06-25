import React from "react";

const ShimmerCard = () => {
  return (
    <div className="pt-2">
      <div className="shimmerCard w-[60vh]  rounded-lg h-[30vh] " />
      <div className="flex">
        <div className="shimmerCard w-8 h-8 mt-1.5 mr-2 rounded-full " />
        <div>
          <div className="shimmerCard my-1.5 w-[48vh]  h-[2vh] " />
          <div className="shimmerCard my-1.5 w-[28vh]  h-[2vh]" />
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
