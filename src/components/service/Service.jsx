'use client'
import React from 'react'
import { FaMoneyBillWave, FaStethoscope, FaUserMd } from 'react-icons/fa'
import Heeder from '../navbar/Heeder'

function Service() {
  return (
    <div className='bg-black'>
      <Heeder />
      <div className="relative pt-24 z-10 flex flex-col items-center justify-center h-full p-10 text-[#facc15] space-y-8">
        <h2 className="text-2xl md:text-3xl mt-20 rounded-lg px-2 font-bold bg-opacity-80 text-[#facc15] mb-4 inline-block p-2">
          Services
        </h2>
        <div className="mb-10 w-full flex flex-col md:flex-row gap-4">
          {/* Left Table */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl rounded-lg px-2 font-bold bg-opacity-80 text-[#facc15] mb-4 inline-flex p-2">
              <FaUserMd className="mr-2 text-[#facc15]" /> General Services
            </h3>
            <table className="w-full border-2 border-[#facc15] border-collapse bg-transparent shadow-md">
              <tbody className="bg-opacity-80">
                <tr className="border-b">
                  <td className="p-4">Standard Consultation (10 mins)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Extended Consultation (20 mins)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Review (within 2 weeks of initial consult)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Review & Bloods</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Teleconsultation (10 mins)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Child Consultation</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Consultation & Bloods</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Nurse Consultation</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Right Table */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl rounded-lg px-2 font-bold bg-opacity-80 text-[#facc15] mb-4 inline-flex p-2">
              <FaStethoscope className="mr-2 text-[#facc15]" /> Specialized Services
            </h3>
            <table className="w-full border-2 border-[#facc15] border-collapse bg-transparent shadow-md">
              <tbody className="bg-opacity-80">
                <tr className="border-b">
                  <td className="p-4">STI screening</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Well Man/Well Woman</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">ECG</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Cryotherapy – First Consultation</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Pre-Employment Medical</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Driving Licence Medical – Group 1</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Joint Injections</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Blood Tests</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
