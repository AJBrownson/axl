import { useState } from "react";
// import { FaBars } from "react-icons/fa";
import Logo from "../assets/Vector Logo.svg";
import { FaDiscord, FaBars, FaTimes } from 'react-icons/fa'
import { BsTwitterX } from "react-icons/bs";


const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleMenuClick = () => {
    setOpenMobileMenu(!openMobileMenu)
  }

  return (
    <>
      <nav className="font-conthrax">
        <div className="bg-[#14112D] lg:py-5 px-5 lg:px-10 navbar">
          <div className="navbar-start">
            <img src={Logo} alt="" className="w-8 lg:w-12 rounded-full" />
            <a className="navbar-item text-cyan-400 text-lg lg:text-2xl font-semibold">
              XMAX
            </a>
            <div className="ml-10 hidden lg:block">
              <a className="navbar-item">Home</a>
              <a className="navbar-item">Casino</a>
              <a className="navbar-item">Whitepaper</a>
            </div>
          </div>
          <div className="hidden lg:flex navbar-end">
            <BsTwitterX className="cursor-pointer lg:w-16" />
            <FaDiscord className="cursor-pointer lg:w-16" />
            <button className="bg-transparent btn px-10 rounded-none border border-white navbar-item">Connect Wallet</button>
          </div>

          {/* mobile menu div */}
          <div onClick={handleMenuClick} className='block lg:hidden'>
            {openMobileMenu ? <FaTimes size={25} /> : <FaBars size={25} />}
          </div>
          <ul className={openMobileMenu ? `lg:hidden bg-[#14112D] px-3 z-40 fixed left-0 top-16 w-full h-full ease-in-out duration-500`: `ease-in-out duration-500 fixed top-16 bottom-0 left-[-100%]`}>
              <li className="navbar-item">Home</li>
              <li className="navbar-item">Casino</li>
              <li className="navbar-item">Whitepaper</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;