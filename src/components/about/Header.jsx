import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className=''>
{/* <Servs/> */}
      <div className="relative w-full h-auto overflow-hidden">
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          src="1.mp4" 
        ></video> */}
        <img src="/ii.png"  className="absolute w-full h-full object-cover" alt="" />

        <div className="home-pic relative  z-10 flex flex-col items-center justify-center h-full p-10 text-[#facc15] space-y-4">
          <div className="bg">
            <div className="relative pt-20 w-full flex flex-col items-center justify-center">
              <div className="relative z-10 text-[#facc15] py-2 opacity-80 w-full max-w-3xl rounded-md text-center">
                {/* Centered Image */}
                <div className="flex justify-center items-center">
                  <img src="img.png" alt="" className="w-auto h-auto" />
                </div>
                <h1 className="text-[#facc15] mt-2 font-arbel text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold w-full">
                  Welcome to Fazal Medical Centre
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl px-4 text-[#facc15]">
                  We are a  Surgery located in Fazal Medical Centre
                </p>
              </div>
            </div>
            <div className="flex flex-col pt-12 pb-14 sm:flex-row items-center sm:items-center justify-center gap-8 mt-6">
              <div className="btn">
                <div className="btn">
                  <Link to="/main" >
                    <button className="bg-gradient-to-r font-semibold from-[#e7cd22] via-[#b29f1f] to-[#373317] text-black py-2 px-12 rounded-md w-full md:w-auto animate-button">
                      Medical 
                    </button>
                  </Link>

                </div>
              </div>


              <div className="btn ms-8">
                <div className="btn">
              
                  <Link to="/dent">
                    <button className="bg-gradient-to-r font-semibold px-12 from-[#e7cd22] via-[#b29f1f] to-[#373317] text-black py-2  rounded-md w-full md:w-auto animate-button">
                      Dental 
                    </button>
                  </Link>
                
                </div>
              </div>

            </div>


          </div>
        </div>
      </div>

      <div className="container-fluid bg-black text-[#facc15]">
        <div className="container mx-auto p-16">
          <div className="flex gap-8">
            <div className="col-md-4 bg-[#facc15] rounded-md w-1 h-96"></div>
            <div className="flex flex-col items-start justify-center w-full">
              <div className="flex  text-4xl text-[#2abd4f] flex-wrap p-4">

                <div className="flex-1 text-start">
                  <h1 className="text-center text-[#facc15] font-semibold">Important Update:</h1>
                </div>
              </div>
              <div>
                <h4 className='ms-8  text-lg text-start'>
                  <span className='text-start font-semibold'>Fazal Medical</span> Practice will now be led by <span className='font-bold'> Dr Asim Atiq</span>, All private patients will be automatically transferred to the care of <span className='font-bold'> Dr Asim Atiq</span>.
                </h4>
              </div>
              <div>
                <h1 className='text-3xl text-[#facc15] ms-4 text-start font-semibold pt-4'>For Patients:</h1>
                <h4 className=' ms-8 mt-2 text-lg text-start'>If you wish to transfer your care to our practice, please speak to your doctor to arrange for the transfer of your medical records.</h4>
                <h4 className='text-start ms-8'>For any inquiries, feel free to <a href="/contact" className='text-red-600 font-bold'>Email us</a> us for further information.</h4>
              </div>
              <div>
                <div className="flex mt-6 gap-1 text-3xl text-[#41f350]">

                  <div className="flex-1">
                    <h1 className=" text-2xl ms-4 font-bold text-[#facc15] text-start">A Message from Dr. Hassaan Chughtai:</h1>
                  </div>
                </div>
                <h4 className='mt-3 ms-8 text-start'>
                  <span className='font-bold'>Dr. Hassaan Chughtai</span> would like to extend heartfelt thanks to all the staff and patients for their support over the last 12 years. He wishes <span className='font-bold'> Dr Asim Atiq</span> many happy and successful years at <span className='font-bold'>Fazal Medical Centre</span>.
                </h4>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Header;
