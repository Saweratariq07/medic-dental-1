'use client'
import React from 'react'
import './styles.css';
import  { useState, useEffect, useRef } from "react";

function Meen() {
    const [placeholderText, setPlaceholderText] = useState("");
    const [highlightText, setHighlightText] = useState(false); 
    const placeholderWords = ["Enhance", "Strenghen", "Boost", "Elevate","Advance","Refine","Optimize", "Amplify","Elevate","Facilities","Drive","Empower","Perfect","Streamline","Transform","Reinforce"];
    const typingSpeed = 200;
    const wordPauseDuration = 2000; 
    const highlightDuration = 1000; 
    const wordIndex = useRef(0);
    const charIndex = useRef(0);
  
    useEffect(() => {
      const typeNextChar = () => {
        const word = placeholderWords[wordIndex.current];
        if (charIndex.current < word.length) {
          setPlaceholderText((prev) => word.slice(0, charIndex.current + 1));
          charIndex.current++;
          setTimeout(typeNextChar, typingSpeed); 
        } else {
          setTimeout(() => {
            setHighlightText(true); 
            setTimeout(() => {
              setHighlightText(false);
              setPlaceholderText(""); 
              wordIndex.current = (wordIndex.current + 1) % placeholderWords.length;
              charIndex.current = 0;
              setTimeout(typeNextChar, typingSpeed); 
            }, highlightDuration); 
          }, wordPauseDuration);
        }
      };
  
      typeNextChar();  
    }, []);
  
  return (
    <div>
      <div className=''>

<div className="relative w-full h-auto overflow-hidden">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute w-full h-full object-cover"
    src="1.mp4" // Replace with the path to your video file or a hosted video URL
  ></video>

  <div className="home-pic relative py-48 z-10 flex flex-col items-center justify-center h-full p-10 text-[#facc15] space-y-4">
    <div className="bg">
      <div className="relative pt-16 w-full flex flex-col items-center justify-center">
        <div className="relative  z-10 text-[#facc15] py-2 opacity-80 w-full max-w-3xl rounded-md text-center">
       
          <h1 className="text-[#facc15] mt-2 font-arbel text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold w-full">
            Welcome to Fazal Medical Centre
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl px-4 text-[#facc15]">
            We are a Surgery located in Fazal Medical Centre.
          </p>
          <div className="font-normal mt-16 flex flex-col md:flex-row items-center justify-center gap-12 space-y-4 md:space-y-0 md:space-x-4">
          <div className="btn ">
                    <a href="https://www.gpline.ie/" target="_blank" rel="noopener noreferrer">
  <button className="bg-gradient-to-r font-semibold from-[#e7cd22] via-[#b29f1f] to-[#373317] text-black py-2 px-4 rounded-md w-full md:w-auto animate-button">
    Book  Tele-consultation
  </button>
</a>

                    </div>
                    <div className="btn">
                    <a href="https://www.gpline.ie/doctorLogin" target="_blank" rel="noopener noreferrer">
  <button className="bg-gradient-to-r font-semibold from-[#e7cd22] px-6 via-[#b29f1f] to-[#373317] text-black py-2  rounded-md w-full md:w-auto animate-button">
   Login
  </button>
</a>

                    </div>
                </div>

        
        </div>
      </div>
      {/* <div className="text-lg">
            We{" "}
            <span className="relative inline-block">
              <input
                type="text"
                className={`w-[110px] h-8 bg-transparent border-white border-[1px] rounded px-2 outline-none focus:ring-0 focus:border-white placeholder-white text-[#facc15] font-bold
                  ${highlightText ? 'highlighted-text' : ''}`}  
                value={placeholderText}
                readOnly
                style={{
                  transition: 'background-color 0.5s, color 0.5s',
                }}  
              />
              <span className="absolute top-0 right-0 border-t border-white w-full"></span>
            </span>{" "}
            the successfull execution of your technology solutions.
          </div> */}


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
          <h4 className='ms-8 mt-1 text-lg text-start'>
            <span className='text-start font-semibold'>Fazal Medical</span> Practice will now be led by <span className='font-bold'>Dr. Fazal</span>, as <span className='font-bold'>Dr. ....</span> transitions to a part-time role under his guidance. All medical card and private patients will be automatically transferred to the care of <span className='font-bold'>Dr. Fazal</span>.
          </h4>
        </div>
        <div>
          <h1 className='text-3xl text-[#facc15] ms-4 text-start font-semibold'>For Patients:</h1>
          <h4 className=' ms-8 mt-2 text-lg text-start'>If you wish to transfer your care to another practice, please speak to your new GP to arrange for the transfer of your medical records.</h4>
          <h4 className='text-start ms-8'>For any inquiries, feel free to <a href="/contact" className='text-red-600 font-bold'>Email us</a> us for further information.</h4>
        </div>
        <div>
          <div className="flex mt-6 gap-1 text-3xl text-[#41f350]">

            <div className="flex-1">
              <h1 className=" text-2xl ms-4 font-bold text-[#facc15] text-start">A Message from Dr. Donnelly:</h1>
            </div>
          </div>
          <h4 className='mt-3 ms-8 text-start'>
            <span className='font-bold'>Dr. ...</span> would like to extend heartfelt thanks to all the staff and patients for their support over the last 12 years. He wishes <span className='font-bold'>Dr. Fazal</span> many happy and successful years at <span className='font-bold'>Fazal Medical Centre</span>.
          </h4>
        </div>
      </div>

    </div>
  </div>
</div>

</div> 
    </div>
  )
}

export default Meen
