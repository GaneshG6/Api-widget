import React from "react";
import { CryptoPriceChart, NasaChart, StockPriceChart } from "./Container";

function DashBoard() {
    return <div className="d-flex flex-wrap">
        <CryptoPriceChart/>
        <StockPriceChart/>
        <NasaChart/>
    </div>
}
export {DashBoard}