// src/app/test/page.tsx
import React from 'react';

const TestPage = () => {
  return (
    <div className="relative h-[657px] bg-white">
      <div className="absolute w-[317px] h-[330px] left-[41px] top-[41px]">
        {/* Additional content can go here */}
      </div>
      <img
        className="absolute w-[228px] h-[221px] left-[-16px] top-[134px]"
        src="/image.png"
        alt="Placeholder"
      />
      <div className="absolute w-[222px] h-[34px] left-[186px] top-[189px] text-[#1a1a1a] text-2xl font-normal font-['Patrick Hand']">
        Hey, <span>name</span>
      </div>
      <div className="absolute w-[222px] h-[34px] left-[118px] top-[338px] text-[#1a1a1a] text-2xl font-normal font-['Patrick Hand']">
        You want to spend
      </div>
      <div className="absolute w-[142px] h-8 left-[129px] top-[461px] text-[#1a1a1a] text-2xl font-normal font-['Patrick Hand']">
        This equates to
      </div>
      <div className="absolute w-[131px] h-16 left-[134px] top-[371px] text-[#1a1a1a] text-5xl font-normal font-['Patrick Hand']">
        $57.65
      </div>
      <div className="absolute w-[319px] h-[53px] left-[45px] top-[486px] text-[#1a1a1a] text-5xl font-normal font-['Patrick Hand']">
        3.84 hours of work
      </div>
      <div className="absolute w-[333px] h-16 left-[45px] top-[64px] text-[#1a1a1a] text-5xl font-normal font-['Patrick Hand'] leading-[60px]">
        Savings Protector
      </div>
      <div className="absolute w-[169px] h-20 left-[212px] top-[219px] text-[#1a1a1a] text-2xl font-normal font-['Patrick Hand']">
        Are you sure you want to purchase this?
      </div>
      <div className="absolute w-[204px] left-[93px] top-[435px] border-2 border-black"></div>
      <div className="absolute w-[319px] left-[45px] top-[547px] border-2 border-black"></div>
    </div>
  );
};

export default TestPage;