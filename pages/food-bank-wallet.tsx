import React from "react";
import Header from "@/src/component/custom/Header";
import Header2 from "@/src/component/custom/Header2";
import Image from "next/image"
import './globalss.css';
import { AspectRatio } from "@/src/component/ui/aspect-ratio"
import BentoGridDemo from "@/src/component/custom/BentoGridDemo"
export default function FoodBankWallet() {
  return (
    <>
      <Header />
      <div style={{ backgroundColor: 'black', color: 'white' }} className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Food Bank Wallet</h1>
        <Image
          src="/wallpaper.jpg"
          alt="Food Bank Wallet"
          width={800}
          height={400}
          className="rounded-lg mb-4"
        />
        <p className="text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p className="text-lg mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <Header2 />
    </>
  );
}
