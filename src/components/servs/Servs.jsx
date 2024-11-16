'use client'
import React from 'react'
import { FaMoneyBillWave, FaStethoscope, FaUserMd } from 'react-icons/fa'
import Heeder from '../navbar/Heeder'
function Servs() {
  return (
    <div className='bg-black'>
      <Heeder/>
     <div className="relative pt-24 z-10 flex flex-col items-center justify-center h-full p-10  text-[#facc15]  space-y-8">
  
   
    <h2 className="text-2xl md:text-3xl    mt-20 rounded-lg px-2 font-bold  bg-opacity-80 text-[#facc15] mb-4 inline-block p-2">Services</h2>

    <div className="mb-10 ">
      <h3 className="text-2xl    md:text-3xl rounded-lg px-2 font-bold  bg-opacity-80 text-[#facc15]  mb-4 inline-flex p-2">
        <FaUserMd className="mr-2 text-[#facc15] " /> 
      </h3>
      <table className="w-full  border-2 border-[#facc15]  border-collapse bg-transparent shadow-md">
      <tbody className=' bg-opacity-80'> 
      <tr className="border-b">
  <td className="p-4">Teeth Cleaning and Polishing (Prophylaxis) </td>
</tr>
<tr className="border-b">
  <td className="p-4">Dental Fillings (Dental Fillings )</td>
</tr>
<tr className="border-b">
  <td className="p-4">Root Canal Treatment (Endodontics)</td>
 
</tr>
<tr className="border-b">
  <td className="p-4">Tooth Extractions</td>
</tr>
<tr className="border-b">
  <td className="p-4">Dental Implants  </td>
</tr>
<tr className="border-b">
  <td className="p-4">Crowns and Bridges
  </td>
</tr>
<tr className="border-b">
  <td className="p-4">Teeth Whitening

  </td>
</tr>
<tr className="border-b">
  <td className="p-4">Veneers and Bonding
  </td>
</tr>
<tr className="border-b">
  <td className="p-4">Sealants
  </td>
</tr>
<tr className="border-b">
  <td className="p-4">Root Canal Treatment (Endodontics)</td>
  {/* <td className="p-4 text-right font-semibold">(Endodontics)
  </td> */}
</tr>
<tr className="border-b">
  <td className="p-4">Fluoride Treatments  </td>
  {/* <td className="p-4 text-right font-semibold">(Endodontics)
  </td> */}
</tr>
<tr className="border-b">
  <td className="p-4">Oral Surgery (Wisdom Tooth Extraction)
  </td>

</tr>
<tr className="border-b">
  <td className="p-4">Pediatric Dentistry
  </td>

</tr>
<tr className="border-b">
  <td className="p-4">Smile Makeovers
  </td>
 
</tr>
<tr className="border-b">
  <td className="p-4">Emergency Dental Care
  </td>

</tr>
<tr className="border-b">
  <td className="p-4">TMJ and Jaw Pain Treatment</td>
  <td className="p-4 text-right font-semibold">
  </td>
</tr>
</tbody>

      </table>
    </div>
    
    {/* <div className="mb-10">
    <h3 className="text-2xl   md:text-3xl rounded-lg px-2 font-bold  bg-opacity-80 text-[#facc15]  mb-4 inline-flex p-2">
    <FaStethoscope className="mr-2 text-[#facc15] " /> GMS Patients
    </h3>
      <table className="w-full  border-2 border-[#facc15]   border-collapse bg-transparent shadow-md">
      <tbody className=' bg-opacity-80'> 
<tr className="border-b">
  <td className="p-4">Blood Test</td>
  <td className="p-4 text-right font-semibold">&euro;20</td>
</tr>
<tr className="border-b">
  <td className="p-4">Joint Injection</td>
  <td className="p-4 text-right font-semibold">&euro;40</td>
</tr>
</tbody>

      </table>
    </div>

    <div className="mb-10">
      <h3 className="text-2xl md:text-3xl rounded-lg px-2 font-bold  bg-opacity-80 text-[#facc15]  mb-4 inline-flex p-2">
        <FaMoneyBillWave className="mr-2 text-[#facc15] " /> All Patients
      </h3>
      <table className="w-full border-collapsez bg-transparent  border-2 border-[#facc15]  shadow-md">
      <tbody className=' bg-opacity-80'> 
<tr className="border-b">
  <td className="p-4">Medical Certificate (more than 3 days)</td>
  <td className="p-4 text-right font-semibold">&euro;20</td>
</tr>
<tr className="border-b">
  <td className="p-4">Driving Licence</td>
  <td className="p-4 text-right font-semibold">&euro;50</td>
</tr>
</tbody>

      </table>
    </div> */}
  </div>
    </div>
  )
}

export default Servs
