import React from "react";
// import { getjoincard } from "@/Components/ApiHits/GetData";
function JioningBrand(props) {
  let t = props.pad?.toString();
  return (
    <div
      className={`container mx-auto md:mx-32 rounded-xl flex flex-col lg:flex-row lg:justify-between lg:px-20 text-center py-4  bg-black  md:lg:py-28  bg-no-repeat`}
    >
      <div className="lg:flex lg:flex-col md:ml-3">
        <h1 className="text-white SEMIBF text-3xl lg:text-[3.5rem]">
          {"No title"}
        </h1>
        <p className="text-gray-500 text-xs lg:text-xl REGULARF lg:place-self-start lg:mt-8">
          {props?.data?.description || "No Description"}
        </p>
      </div>
      <button className="hover:text-white hover:bg-black mt-3 bg-white MEDF text-black md:text-[20px] text-[8.74px]   rounded-full w-40 text-center place-self-center p-2 py-3 px-6 ">
        {props?.data?.button || "No Description"}
      </button>
    </div>
  );
}
export default JioningBrand;