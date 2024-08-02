import React from 'react';

const TestPage = () => {
  return (
<div className="h-[657px] bg-white">
  <div className="w-[286px] h-[74px] left-[57px] top-[346px] absolute flex-col justify-start items-start gap-1.5 inline-flex">
    <div className="self-stretch text-[#1a1a1a] text-base font-normal font-['Patrick Hand'] uppercase leading-tight tracking-tight">Input Wages</div>
    <div className="self-stretch pl-3.5 pr-12 py-3 bg-white rounded-lg border-2 border-[#1a1a1a] justify-start items-start gap-2 inline-flex">
      <div className="grow shrink basis-0 h-6 text-[#1a1a1a] text-lg font-normal font-['Patrick Hand'] leading-normal tracking-tight">Ex. 50,000</div>
    </div>
    <div className="text-right"></div>
  </div>
  <div className="w-[286px] h-[72px] left-[57px] top-[161px] absolute flex-col justify-start items-start gap-1.5 inline-flex">
    <div className="self-stretch text-[#1a1a1a] text-base font-normal font-['Patrick Hand'] uppercase leading-tight tracking-tight">Name</div>
    <div className="self-stretch pl-3.5 pr-12 py-3 bg-white rounded-lg border-2 border-[#1a1a1a] justify-start items-start gap-2 inline-flex">
      <div className="grow shrink basis-0 h-6 text-[#1a1a1a] text-lg font-normal font-['Patrick Hand'] leading-normal tracking-tight">Ex. John Doe</div>
    </div>
    <div className="text-right"></div>
    <div className="self-stretch"></div>
  </div>
  <div className="left-[57px] top-[258px] absolute text-[#1a1a1a] text-base font-normal font-['Patrick Hand'] uppercase leading-tight tracking-tight">Select Wage Type</div>
  <div className="h-10 px-4 py-2 left-[146px] top-[469px] absolute bg-white rounded-md border-2 border-[#1a1a1a] justify-center items-center gap-2 inline-flex">
    <div className="text-center text-[#1a1a1a] text-lg font-normal font-['Patrick Hand'] leading-normal tracking-tight">Get Started</div>
  </div>
  <div className="w-[319px] h-[58px] left-[48px] top-[65px] absolute text-[#1a1a1a] text-5xl font-normal font-['Patrick Hand'] leading-[60px]">Savings Protector</div>
  <div className="h-10 pl-4 pr-9 py-3 left-[57px] top-[282px] absolute bg-white rounded-lg border-2 border-[#1a1a1a] justify-start items-center gap-2 inline-flex">
    <div className="text-[#1a1a1a] text-base font-normal font-['Patrick Hand'] tracking-tight">Select</div>
    <div className="w-6 h-6 pl-[6.75px] pr-[6.70px] justify-center items-center flex" />
  </div>
</div>
  );
};

export default TestPage;