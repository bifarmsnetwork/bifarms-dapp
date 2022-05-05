import React from "react";
import { data } from "../../data/pools";

const Pools = () => {
  return (
    <div>
      {data.map(({token,apy,daily,tvl,network}) => {
        return (
        // Write html below
        <div>
           


           
        </div>
        
        
        
        );
      })}
    </div>
  );
};

export default Pools;
