import React from "react";
import { data } from "../../data/farms";

const Farms = ()=>{
    return(
        <div>
      {data.map(({pair,apy,daily,tvl,network}) => {
        return (
        // Write html below
        <div>
            {pair}
            {apy}
            {daily}
            {tvl}
            {network}
        </div>);
      })}
    </div>

    )
}

export default Farms