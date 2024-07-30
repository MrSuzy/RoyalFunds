// app/page.tsx

import Header from "@/src/component/custom/Header";

export default function HomePage() {

  // console.log(address);
  // // const balance = useWalletBalance(address);
  return (
    <>
      <Header></Header>

      <div className="text-center">
        <h1 className="text-3xl">This is my wallet address </h1>

      </div>
    </>
  );
}
