import React from 'react'
import { FaClock, FaPhoneAlt, FaExclamationTriangle } from 'react-icons/fa';
import Nav from '../home/Nav';

function Open() {
  return (
    <div>
      <div className="relative bg-black w-full h-auto overflow-hidden">
      <Nav/>
        <div className="relative z-10 md:pt-24 flex flex-col items-center justify-center h-full p-4 md:p-10 text-[#facc15]  space-y-8">
          <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 bg-transparent rounded-lg">

            <div className="mb-8 ">
              <h2 className="text-2xl md:text-3xl rounded-lg px-2 font-bold  bg-opacity-80 text-[#facc15]  mb-4 inline-block p-2">
                <FaClock className="inline mr-2" /> Opening Hours
              </h2>

              <div className="flex justify-center items-center text-center  border-2 border-[#facc15]  p-4">
                <div className="text-[#facc15]  bg-opacity-80 inline-block p-4 rounded-md">
                  <ul className="list-disc text-lg list-outside pl-6 text-start">
                    <li className="mb-1"><span className="font-semibold">Monday:</span> 9:30 AM to 12:30 PM, 2:30 PM to 5:00 PM</li>
                    <li className="mb-1"><span className="font-semibold">Tuesday:</span> 9:30 AM to 12:30 PM, Closed in the afternoon</li>
                    <li className="mb-1"><span className="font-semibold">Wednesday:</span> 9:30 AM to 12:30 PM, 2:30 PM to 5:30 PM</li>
                    <li className="mb-1"><span className="font-semibold">Thursday:</span> 9:30 AM to 12:30 PM, 2:30 PM to 5:00 PM</li>
                    <li className="mb-1"><span className="font-semibold">Friday:</span> 9:30 AM to 12:30 PM, 2:30 PM to 5:00 PM</li>
                  </ul>
                </div>
              </div>
    </div>
 <div className="mb-8">
              <h2 className="text-2xl md:text-3xl rounded-lg px-2 font-bold  bg-opacity-80 text-[#facc15]  mb-4 inline-block p-2">
                <FaPhoneAlt className="inline mr-2" /> Phone Service Hours
              </h2>
              <div className="flex  border-2 border-[#facc15]  justify-center">
                <div className="relative w-full md:w-72 text-center p-4">
                  <div className="absolute inset-0 text-start  bg-opacity-80"></div>
                  <div className="relative">
                    <p className="text-[#facc15] ">Our phone service is in operation:</p>
                    <p className="text-[#facc15]  text-lg">
                      <span className="font-semibold">Monday to Friday:</span> 9:30 AM to 12:30 PM and 2:00 PM to 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl rounded-lg px-2 font-bold  bg-opacity-80 text-[#facc15]  mb-4 inline-block p-2">Important Notes</h2>
              <div className="relative rounded-lg  border-2 border-[#facc15]  inline-block w-full md:w-auto">
                <div className="absolute inset-0  opacity-80"></div>
                <div className="relative text-[#facc15]  p-4">
                  <ul className="list-disc pl-5 text-start text-lg">
                    <li className="mb-2">The surgery is closed on Tuesday afternoons from 12:30 PM.</li>
                    <li className="mb-2">The surgery is also closed on Monday, Wednesday, Thursday, and Friday between 12:30 PM and 2:00 PM.</li>
                    <li>Please refrain from coming to the practice during these closed times, as we are unable to answer the door. Instead, please contact us during our posted hours.</li>
                  </ul>
                </div>
              </div>

            </div>

            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl rounded-lg px-2 font-bold  bg-opacity-80 text-[#f02a2a] mb-4 inline-block p-2">
                <FaExclamationTriangle className="inline mr-2" /> For Emergencies Only
              </h2>
              <div className="relative  border-2 border-[#facc15]  inline-block w-full md:w-auto p-4">
                <div className="absolute inset-0  opacity-80"></div>
                <div className="relative ">
                  <ul className="list-disc pl-5  text-[#facc15]  text-lg">
                    <li className="mb-2">On Tuesday afternoons, for emergencies only, please call <span className="font-semibold">071 96 63386</span>.</li>
                    <li>For all other inquiries, please ring the surgery during our normal hours.</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Open
