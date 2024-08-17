// components/Hero.tsx
import React from 'react';
import { IconCoinBitcoin } from "@tabler/icons-react";


const HeroFoodBank: React.FC = () => {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: '/wallpaper.jpg' }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl font-bold mb-6">Food Bank Wallet</h1>
        <p className="text-xl mb-4">Redistributed all funds to approved public goods on Potlock registry.</p>
        <p className="text-xl">Used by YEAR of CHEF for auto-redistribution of royalties.</p>
        <div className="mt-4 text-3xl font-semibold flex-row">
            <IconCoinBitcoin/>
            Total Funded 34.40N~$137.94
        </div>
      </div>
    </section>
  );
};

export default HeroFoodBank;
