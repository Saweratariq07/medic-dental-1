import { FaMoneyBillWave, FaStethoscope, FaUserMd } from 'react-icons/fa'
import Nav from '../home/Nav'

const FeesSection = () => {
  return (
    <div className="">
        <div className="relative bg-black w-full h-auto overflow-hidden">
          <Nav/>
   <div className="relative pt-24 z-10 flex flex-col items-center justify-center h-full p-10  text-[#facc15]  space-y-8">
    
   
      <h2 className="text-2xl md:text-3xl    mt-20 rounded-lg px-2 font-bold  bg-opacity-80 text-[#facc15] mb-4 inline-block p-2">Fees</h2>

      <div className="mb-10 ">
        <h3 className="text-2xl    md:text-3xl rounded-lg px-2 font-bold  bg-opacity-80 text-[#facc15]  mb-4 inline-flex p-2">
          <FaUserMd className="mr-2 text-[#facc15] " /> Private Patients
        </h3>
        <table className="w-full  border-2 border-[#facc15]  border-collapse bg-transparent shadow-md">
        <tbody className=' bg-opacity-80'> 
        <tr className="border-b">
    <td className="p-4">General Physician Consultation</td>
    <td className="p-4 text-right font-semibold">PKR 1,000    </td>
  </tr>
  <tr className="border-b">
    <td className="p-4">Complete Blood Count (CBC)</td>
    <td className="p-4 text-right font-semibold">PKR 600    </td>
  </tr>
  <tr className="border-b">
    <td className="p-4">Electrocardiogram (ECG)</td>
    <td className="p-4 text-right font-semibold">PKR 700    </td>
  </tr>
  <tr className="border-b">
    <td className="p-4">Urine Complete Examination (Urine C/E)</td>
    <td className="p-4 text-right font-semibold"> PKR 500    </td>
  </tr>
  <tr className="border-b">
    <td className="p-4">Ultrasound (Abdominal)</td>
    <td className="p-4 text-right font-semibold"> PKR 2,000   </td>
  </tr>
  <tr className="border-b">
    <td className="p-4">X-Ray (Single View)</td>
    <td className="p-4 text-right font-semibold"> PKR 1,200    </td>
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
    </div>
  )
}

export default FeesSection
