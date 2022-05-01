import React from "react";
import { data } from "./pools";

const Pools = () => {
  return (
    <div>
      {data.map(({token,apy,daily,tvl,network}) => {
        return (
        // Write html below
        <div>
            {token}
            {apy}
            {daily}
            {tvl}
            {network}
        </div>);
      })}
    </div>
  );
};

export default Pools;
