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
    

        <div className="Container" >
        <AspectRatio ratio={16 /4} className="bg-muted ">
          <Image
            src="/header5.webp"
            alt="Photo by Drew Beamer"
            fill
            style={{ width: '100%', filter: 'blur(2px)' }} 
            className="rounded-2x1 object-contain"
          />
        </AspectRatio>
        <div style={{ position: 'absolute', top: '30%', left: '10%', transform: 'translate(-20%, 0%)', color: 'white', textAlign: 'left' }}>
        <h1 style={{ fontSize: '68px', fontWeight: '700', fontFamily: 'Roboto, sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>Royal Funds</h1>
        <h2 style={{ fontSize: '28px',fontWeight: '400',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>Funding everywhere</h2>
  </div>
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
