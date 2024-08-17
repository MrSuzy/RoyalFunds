import React from "react";
import Header from "@/src/component/custom/Header";
import './globalss.css';
import HeroFoodBank from "@/src/component/custom/HeroFoodBank";
import DonateBox from "@/src/component/custom/DonateBox";
import { Component } from "@/src/component/custom/BarChart"

export default function FoodBankWallet() {
  return (
    <>
      <Header />
      <HeroFoodBank/>
      <DonateBox/>
      <Component></Component>


      {/* <div className="Container" >
        <AspectRatio ratio={16 /4} className="bg-muted ">
          <Image
            src="/wallpaper.jpg"
            alt="Photo by Drew Beamer"
            fill
            style={{ width: '100%', filter: 'blur(2px)' }} 
            className="rounded-2x1 object-contain"
          />
        </AspectRatio>
        <h1 className="text-4xl font-bold mb-4">Food Bank Wallet</h1>
        <p className="text-lg">
        Redistributed all funds to approved public goods on Potlock registry
        </p>
        <p>
        Used by YEAR of CHEF for auto-redistrobution of royalties
        </p>
        <div>
          <IconCoinBitcoin/>
          <p>Total Funded  34.40ETH~$137.94  </p>
        </div>
        <span className="border-b border-gray-700 block mt-1"></span> */}

      {/* </div> */}


    </>
  );
}
