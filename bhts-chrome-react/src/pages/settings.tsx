import React from 'react';

const SettingsComponent = () => {
  return (
    <div className="relative h-[657px] bg-white">
      <div className="absolute w-7 h-3.5 pr-[11px] left-[301px] top-[181px] bg-[#d7d7d7] rounded-[44px] border-2 border-[#1a1a1a] justify-start items-center inline-flex">
        <div className="relative w-5 h-5 bg-white rounded-[44px] border-2 border-[#1a1a1a]" />
      </div>
      <div className="absolute w-7 h-3.5 pl-[11px] left-[133px] top-[181px] bg-[#1a1a1a] rounded-[44px] border-2 border-[#1a1a1a] justify-end items-center inline-flex">
        <div className="relative w-5 h-5 bg-white rounded-[44px] border-2 border-[#1a1a1a]" />
      </div>
      <div className="absolute left-[43px] top-[178px] text-[#1a1a1a] text-base font-normal font-['Patrick Hand'] uppercase leading-tight tracking-tight">
        Save MODE
      </div>
      <div className="absolute left-[202px] top-[178px] text-[#1a1a1a] text-base font-normal font-['Patrick Hand'] uppercase leading-tight tracking-tight">
        Invest Mode
      </div>
      <div className="absolute w-[155px] h-[62px] left-[128px] top-[62px] text-[#1a1a1a] text-5xl font-normal font-['Patrick Hand'] leading-[60px]">
        Settings
      </div>
      <div className="absolute w-[286px] left-[43px] top-[224px] text-[#1a1a1a] text-base font-normal font-['Patrick Hand'] uppercase leading-tight tracking-tight">
        Edit Wage Type
      </div>
      <div className="absolute h-10 pl-4 pr-9 py-3 left-[38px] top-[254px] bg-white rounded-lg border-2 border-[#1a1a1a] justify-start items-center gap-2 inline-flex">
        <div className="text-[#1a1a1a] text-base font-normal font-['Patrick Hand'] tracking-tight">Select</div>
        <div className="w-6 h-6 pl-[6.75px] pr-[6.70px] justify-center items-center flex" />
      </div>
      <div className="absolute w-[286px] h-[74px] left-[38px] top-[314px] flex flex-col justify-start items-start gap-1.5 inline-flex">
        <div className="self-stretch text-[#1a1a1a] text-base font-normal font-['Patrick Hand'] uppercase leading-tight tracking-tight">
          Edit Wages
        </div>
        <div className="self-stretch pl-3.5 pr-12 py-3 bg-white rounded-lg border-2 border-[#1a1a1a] justify-start items-start gap-2 inline-flex">
          <div className="grow shrink basis-0 h-6 text-[#1a1a1a] text-lg font-normal font-['Patrick Hand'] leading-normal tracking-tight">
            Ex. 50,000
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsComponent;