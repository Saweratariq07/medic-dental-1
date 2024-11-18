import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isPolicyDropdownOpen, setIsPolicyDropdownOpen] = useState(false);
  const [isPracticeDropdownOpen, setIsPracticeDropdownOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavItemClick = () => {
    setIsNavOpen(false);
  };

  return (
    <div>
      <nav className="container-fluid navbar-transparent">
        <div className="container-fluid">
          <div className="marquee-container">
            <div className="marquee">
              <p>Walk in clinic for flu and covid vaccine.</p>
            </div>
          </div>
        </div>

        <div className=" mx-auto max-w-full px-4 sm:px-6  py-5 text-[#facc15]">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center">
          
              <Link to="/" onClick={handleNavItemClick} className="flex items-center">
                <img
                  src="/logo.png" 
                  alt="Logo"
                  className="h-28 w-28  mr-2" 
                />
              </Link>

              <button
                type="button"
                className="md:hidden inline-flex items-center justify-center rounded-md bg-white p-2 text-blue-950 hover:bg-blue-950 hover:text-white focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isNavOpen}
                onClick={handleMenuToggle}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isNavOpen ? 'hidden' : 'block'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className={`${isNavOpen ? 'block' : 'hidden'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden md:flex  py-2 px-4 rounded-lg opacity-75 ms-32 space-x-4 text-[#facc15] flex-wrap">
              <Link to="/" className="nav-item relative rounded-md px-3 py-2 text-lg font-semibold hover:text-[#facc15] transition-all" onClick={handleNavItemClick}>Home</Link>
              <Link to="/hours" className="nav-item relative rounded-md px-3 py-2 text-lg font-semibold hover:text-[#facc15] transition-all" onClick={handleNavItemClick}>Opening Hours</Link>
              <Link to="/doctors" className="nav-item relative rounded-md px-3 py-2 text-lg font-semibold hover:text-[#facc15] transition-all" onClick={handleNavItemClick}>Staff</Link>
              <Link to="/appoin" className="nav-item relative rounded-md px-3 py-2 text-lg font-semibold hover:text-[#facc15] transition-all" onClick={handleNavItemClick}>Appointments</Link>
              <Link to="/blog" className="nav-item relative rounded-md px-3 py-2 text-lg font-semibold hover:text-[#facc15] transition-all" onClick={handleNavItemClick}>Blogs</Link>

              <div className="relative group nav-item">
                <Link to="/service" className="nav-item relative rounded-md px-3 py-2 text-lg font-semibold text-[#facc15] hover:text-[#facc15] transition-all" onClick={handleNavItemClick}>Services</Link>
              </div>

              <div
                className="relative nav-item"
                onMouseEnter={() => setIsPolicyDropdownOpen(true)}
                onMouseLeave={() => setIsPolicyDropdownOpen(false)}
              >
                <span className="relative rounded-md px-3 py-2 text-lg font-semibold text-[#facc15] hover:text-[#facc15] transition-all cursor-pointer">Policy</span>
                {isPolicyDropdownOpen && (
                  <div className="absolute left-0 mt-2 rounded-md shadow-lg z-20 bg-blue-900 text-[#facc15]">
                    <ul className="py-1 cursor-pointer">
                      <Link to="/state" onClick={handleNavItemClick}>
                        <li className="px-4 py-2 font-semibold hover:bg-white hover:text-blue-950">Statements</li>
                      </Link>
                      <Link to="/patient" onClick={handleNavItemClick}>
                        <li className="px-4 py-2 font-semibold hover:bg-white hover:text-blue-950">Patient Rights</li>
                      </Link>
                    </ul>
                  </div>
                )}
              </div>

              <div
                className="relative nav-item"
                onMouseEnter={() => setIsPracticeDropdownOpen(true)}
                onMouseLeave={() => setIsPracticeDropdownOpen(false)}
              >
                <span className="relative rounded-md px-3 py-2 text-lg font-semibold text-[#facc15] hover:text-[#facc15] transition-all cursor-pointer">Practice Information</span>
                {isPracticeDropdownOpen && (
                  <div className="absolute left-0 mt-2 rounded-md shadow-lg z-20 bg-blue-900 text-white">
                    <ul className="py-1 cursor-pointer">
                      <Link to="/fees" onClick={handleNavItemClick}>
                        <li className="px-4 py-2 font-semibold hover:bg-white hover:text-blue-950">Fees</li>
                      </Link>
                      <Link to="/links" onClick={handleNavItemClick}>
                        <li className="px-4 py-2 font-semibold hover:bg-white hover:text-blue-950">Useful Links</li>
                      </Link>
                      <Link to="/info" onClick={handleNavItemClick}>
                        <li className="px-4 py-2 font-semibold hover:bg-white hover:text-blue-950">More Information</li>
                      </Link>
                    </ul>
                  </div>
                )}
              </div>

              <div className="hidden md:block">
                <Link to="/contact">
                  <button
                    type="button"
                    className="relative rounded-full text-[#facc15] px-4 py-2 text-lg font-semibold border-2 border-[#facc15] hover:text-white hover:border-[#facc15] hover:bg-[#facc15] bg-transparent"
                  >
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={`md:hidden ${isNavOpen ? 'block' : 'hidden'}`} id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3 bg-blue-950 text-white">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/hours" className="block px-3 py-2 rounded-md text-base font-medium">Opening Hours</Link>
            <Link to="/doctors" className="block px-3 py-2 rounded-md text-base font-medium">Staff</Link>
            <Link to="/appoin" className="block px-3 py-2 rounded-md text-base font-medium">Appointments</Link>
            <Link to="/blog" className="block px-3 py-2 rounded-md text-base font-medium">Blogs</Link>
            <Link to="/service" className="block px-3 py-2 rounded-md text-base font-medium">Services</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium">Contact Us</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
