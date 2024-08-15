// app/page.tsx

import Header from "@/src/component/custom/Header";
import Header2 from "@/src/component/custom/Header2";
import Image from "next/image"
import { AspectRatio } from "@/src/component/ui/aspect-ratio"
import './globals.css';
import BentoGridDemo from "@/src/component/custom/BentoGridDemo"

export default function HomePage() {

  // console.log(address);
  // // const balance = useWalletBalance(address);
  return (
    <>

    <Header/>
    

      <div className="Container">
        <AspectRatio ratio={16 / 4} className="bg-muted">
          <Image
            src="/Chain-Funds (2).svg"
            alt="Photo by Drew Beamer"
            fill
            className="rounded-2xl object-cover"
          />
        </AspectRatio>

        
      </div>
      <Header2/>
      <div className="flex justify-center items-center mx-auto max-w-screen-lg p-4"> 
        <BentoGridDemo/>

      </div>
      <div className="flex justify-center items-center mx-auto max-w-screen-lg p-4"> 
        <BentoGridDemo/>
        
      </div>


      

    </>
  );
}
