// src/components/Header.js
import ConnectWallet from "./ConnectWallet";

const Header = () => (
    <header className="header">
      <div className="logo">ChainFunds</div>
      <nav className="nav">
        <a href="/product">Product</a>
        <a href="/team">Team</a>
        <a href="/contact">Contact</a>
      </nav>
      <ConnectWallet />
    </header>
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
  