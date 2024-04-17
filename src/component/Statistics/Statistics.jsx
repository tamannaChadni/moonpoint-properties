import React from "react";

const Statistics = () => {
  return (
    <div className="container mx-auto my-5 ">
        <h1 className="mx-auto text-center my-2 text-3xl font-bold ">How We help people</h1>
     <div className="stats stats-vertical lg:stats-horizontal shadow  w-full">
  
  <div className="stat bg-emerald-50">
    <div className="stat-title">Rent</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat bg-emerald-50">
    <div className="stat-title">Sell</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat bg-emerald-50">
    <div className="stat-title">Next Find</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
    </div>
  );
};

export default Statistics;
