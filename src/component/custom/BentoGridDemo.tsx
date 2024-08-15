// import { cn } from "@/lib/utils";

import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconFilter,

  IconHandClick,
  IconEye,

} from "@tabler/icons-react";


function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-8xl mx-auto h-full w-full">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-1 w-full h-full justify-center min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900   to-neutral-800">
    {children}
  </div>
);
const items = [
  {
    title: "Food Bank Wallet",
    description: "Redistributed all funds to apporved public goods on Potlock registry Used by YE...",
    header: (
      <Skeleton>
<img src="/wallpaper.jpg" alt="some random shit" />
      </Skeleton>
    ),

    icon: <IconEye className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "YEAR OF THE CHEF",
    description: "The Free mint of 2024 hand-drawn dragon chef for public-goods supporters...",
    header: (
      <Skeleton>
<img src="/wallpaper.jpg" alt="some random shit" />
      </Skeleton>
    ),
    icon: <IconHandClick className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Potlock",
    description: "Potlock is bringing funding to the table. First public goods funding platform but...",
    header: (
      <Skeleton>
<img src="/wallpaper.jpg" alt="some random shit" />
      </Skeleton>
    ),
    icon: <IconFilter className="h-4 w-4 text-neutral-500" />,
  },
];

export default BentoGridDemo;
