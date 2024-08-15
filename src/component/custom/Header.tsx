// src/components/Header.js
import ConnectWallet from "./ConnectWallet";

const Header = () => (
  <nav className="bg-black text-white p-4 flex justify-between items-center">
  <div className="text-xl font-bold">
      Royal-Funds
      <span className="border-b border-gray-700 block mt-1"></span>
  </div>
  <div className="flex space-x-8">
      <a href="#" className="hover:text-gray-300">Product</a>
      <a href="#" className="hover:text-gray-300">Team</a>
      <a href="#" className="hover:text-gray-300">Contact</a>
  </div>
  <ConnectWallet></ConnectWallet>
  
</nav>
  );
  
// const HeaderNew = () => (
//   <header>
//     <nav className="flex justify-between">
//       <div>
//         Logo
//       </div>
//       <div>
//         <a href="">Link 1</a>
//         <a href="">Link 2</a>
//         <a href="">Link 3</a>
//         <a href="">Link 4</a>
//       </div>
//       <div>
//         <ConnectWallet />
//       </div>
//     </nav>
//   </header>
// )

  export default Header;
  