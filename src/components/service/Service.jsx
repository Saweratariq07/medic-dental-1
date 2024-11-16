import { FaHeartbeat, FaFemale, FaChild, FaNotesMedical, FaSyringe } from 'react-icons/fa'
import Nav from '../home/Nav';

const Service = () => {
  return (
    <div className="w-full h-auto">
      <div className="relative bg-black w-full h-auto overflow-hidden">
       <Nav/>
        <div className="relative z-10 md:pt-32 flex flex-col items-center justify-center h-full p-6 md:p-10 text-[#facc15] ">
          <h2 className="text-2xl md:text-3xl rounded-lg px-2 font-bold bg-[#000000]  bg-opacity-80 text-[#facc15]  mb-4 inline-block p-2">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 md:gap-20">
            <div className="service-section">
            <h3 className="text-2xl md:text-3xl rounded-lg inline-flex px-2 font-bold bg-[#000000]  bg-opacity-80 text-[#facc15]  mb-4 p-2">
  <FaHeartbeat className="mr-2 text-xl text-black" />General Health Care
</h3>
              <ul className="list-disc  border-2 border-[#facc15]  text-lg ml-2 rounded-lg w-full bg-[#000000] text-[#facc15]  bg-opacity-80 text-start space-y-0 p-2 md:p-4 list-inside">
                <li className="relative p-2">Medical Consultations</li>
                <li className="relative p-2">Chronic Disease Management Programme</li>
                <li className="relative p-2">Dementia Work-up Clinic</li>
                <li className="relative p-2">Travel Vaccines/Advice</li>
                <li className="relative p-2">Skin Issue Management</li>
                <li className="relative p-2">Medical Certificates</li>
                <li className="relative p-2">Driving License Renewal / Insurance  Medical Examination</li>
                <li className="relative p-2">Pre-employment Medical Examination</li>
                <li className="relative p-2">Repeat Prescriptions</li>
                <li className="relative p-2">Referral for Counselling</li>
                <li className="relative p-2">Warfarin Management</li>
                <li className="relative p-2">24-Hour Blood Pressure Monitoring</li>
                <li className="relative p-2">ECG</li>
                <li className="relative p-2">Phlebotomy / Blood Testing</li>
                <li className="relative p-2">Therapeutic Phlebotomy for  Management of Haemochromatosis</li>
                <li className="relative p-2">Ear Syringing</li>
                <li className="relative p-2">Contraception</li>
                <li className="relative p-2">STI Screening & Treatment</li>
                <li className="relative p-2">Joint Injections</li>
                <li className="relative p-2">Cryotherapy for Warts, Verrucae, and Other Skin Lesions</li>
              </ul>
            </div>

            <div className="service-section">
            <h3 className="text-2xl md:text-3xl rounded-lg inline-flex px-2 font-bold bg-[#000000]  bg-opacity-80 text-[#facc15]  mb-4 p-2">
  <FaFemale className="mr-2 text-xl text-black" /> Women's and Men's Health
</h3>

              <ul className="bg-[#000000]  border-2 border-[#facc15]   text-[#facc15]  bg-opacity-80 rounded-lg p-2 w-full list-disc text-lg ml-2 text-start space-y-2 list-inside">
                <li className="text-[#facc15] ">Well-Man Check-Up</li>
                <li className="text-[#facc15] ">Well-Woman Check-Up</li>
                <li className="text-[#facc15] ">Women’s Health Issues</li>
                <li className="text-[#facc15] ">Cervical Smears</li>
                <li className="text-[#facc15] ">Antenatal Care</li>
                <li className="text-[#facc15] ">Pre-conception Advice</li>
                <li className="text-[#facc15] ">STI Screening and Treatment</li>
                <li className="text-[#facc15] ">Maternity and Infant Scheme</li>
                <li className="text-[#facc15] ">Prostate Check</li>
              </ul>

              <div className="service-section mt-8">
              <h3 className="text-2xl md:text-3xl rounded-lg inline-flex px-2 font-bold bg-[#000000]  bg-opacity-80 text-[#facc15] [#facc15]  mb-4 p-2">
  <FaNotesMedical className="mr-2 text-xl text-[#facc15] " /> Chronic Disease Management
</h3>
               
                <ul className="bg-[#000000]  border-2 border-[#facc15]   text-black bg-opacity-80 w-full rounded-lg p-2 list-disc text-lg ml-2 text-start space-y-2 list-inside">
                  <li className="text-[#facc15] ">Asthma</li>
                  <li className="text-[#facc15] ">COPD</li>
                  <li className="text-[#facc15] ">Type 2 Diabetes</li>
                  <li className="text-[#facc15] ">Atrial Fibrillation</li>
                  <li className="text-[#facc15] ">Post Heart Attack</li>
                  <li className="text-[#facc15] ">Post Stroke</li>
                </ul>
              </div>
            </div>

            <div className="service-section"blackblack>
            <h3 className="text-2xl md:text-3xl rounded-lg inline-flex px-2 font-bold bg-[#000000]  bg-opacity-80 text-[#facc15] [#facc15]  mb-4 p-2">
  <FaChild className="mr-2 text-xl text-black" />Pediatrics
</h3>
             
              <ul className="bg-[#000000]  border-2 border-[#facc15]  bg-opacity-80 rounded-lg p-2 w-full list-disc text-lg ml-2 text-start space-y-2 list-inside">
                <li className="text-[#facc15] ">2 week and 6 week check ups</li>
                <li className="text-[#facc15] ">Infant Feeding</li>
                <li className="text-[#facc15] ">Under 6s Medical Card</li>
                <li className="text-[#facc15] ">Asthma Cycle of Care</li>
                <li className="text-[#facc15] ">2 years and 5 years checks</li>
              </ul>
            </div>

            <div className="service-section">
            <h3 className="text-2xl md:text-3xl rounded-lg inline-flex px-2 font-bold bg-[#000000]  bg-opacity-80 text-[#facc15]  mb-4 p-2">
  <FaSyringe className="mr-2 text-xl text-black" />Vaccinations
</h3>
              
              <ul className="bg-[#000000] black  border-2 border-[#facc15]  bg-opacity-80 rounded-lg p-2 w-full list-disc text-lg ml-2 text-start space-y-2 list-inside">
                <li className="text-[#facc15] ">Childhood Immunisation Schedule</li>
                <li className="text-[#facc15] ">Annual Flu Vaccine</li>
                <li className="text-[#facc15] ">Pneumococcal Vaccine</li>
                <li className="text-[#facc15] ">Tetanus boosters</li>
                <li className="text-[#facc15] ">Occupational Vaccines e.g., Hepatitis B</li>
                <li className="text-[#facc15] ">Vaccines titres to check for response to vaccines / immune status</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service;
