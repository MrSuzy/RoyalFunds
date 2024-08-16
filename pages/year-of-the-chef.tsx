import React from "react";
import Header from "@/src/component/custom/Header";
import Header2 from "@/src/component/custom/Header2";
import Image from "next/image";

export default function YearOfTheChefPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Year of the Chef</h1>
        <Image
          src="/wallpaper.jpg"
          alt="Year of the Chef"
          width={800}
          height={400}
          className="rounded-lg mb-4"
        />
        <p className="text-lg">
          The Year of the Chef celebrates culinary arts by featuring unique
          hand-drawn chef illustrations for supporters of public goods.
        </p>
        <p className="text-lg mt-4">
          Join us in honoring the chefs who have dedicated their lives to
          creating delicious and meaningful meals that bring communities
          together.
        </p>
        
      </div>
      <Header2 />
    </>
  );
}
