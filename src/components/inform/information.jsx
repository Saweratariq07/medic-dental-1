import React from 'react';
import { FaPrescriptionBottleAlt, FaWheelchair, FaDog, FaSyringe, FaParking } from 'react-icons/fa'; // Importing icons
import Nav from '../home/Nav';

const Information = () => {
  return (
    <div>
      <div className="relative bg-black w-full h-auto overflow-hidden">
        <Nav />
        <div className="relative z-10 pt-20 flex flex-col items-center justify-center h-full p-10  text-[#facc15]  space-y-8">

          <div className="min-h-screen  py-12">
            <div className="max-w-4xl  pt-8 mx-auto px-5 md:px-10">
              <h1 className="text-2xl md:text-3xl mt-20   rounded-lg px-2 font-bold  bg-opacity-80 text-[#facc15]  mb-4 inline-block p-2">Our Services</h1>
              <div className=" bg-opacity-80 shadow-md  border-2 border-[#facc15]  rounded-md p-6 mb-10">
                <h2 className="text-2xl font-semibold text-[#facc15]  mb-4 flex items-center">
                  <FaSyringe className="text-[#facc15]  mr-3" /> Blood Tests
                </h2>
                <div className="space-y-4 text-[#facc15] ">
                  <p>
                    <strong>Fasting Bloods:</strong> Patients who are fasting are prioritised for appointments on Tuesday, Wednesday & Thursday mornings up to 11.30am.
                  </p>
                  <p>
                    <strong>Non Fasting Bloods:</strong> Patients can avail of this service on a Monday & Wednesday evening.
                  </p>
                  <p className="text-[#facc15]  font-semibold">
                    Please note there is a €20 administration charge for blood tests for all medical card holders.
                  </p>
                  <p>
                    In order to keep to appointments times, these appointments are for taking blood only. Any other problems will require a separate appointment. Blood results can take up to 21 days to be reviewed.
                  </p>
                  <p>
                    You can discuss your results with the doctor at your next visit or contact reception after 21 days.
                  </p>
                </div>
              </div>


              <div className=" border-2 border-[#facc15]  bg-opacity-80 shadow-md rounded-md p-6 mb-10">
                <h2 className="text-2xl font-semibold text-[#facc15]  mb-4 flex items-center">
                  <FaPrescriptionBottleAlt className="text-[#facc15]  mr-3" /> Prescription Service
                </h2>
                <p className="text-[#facc15]   mb-4">
                  If your medical condition is stable, i.e., blood pressure & blood tests are up to date, you can order your prescription at reception. Please contact reception with a list of the regular medications, their strengths, and quantity. This service requires 2 days notice.
                </p>
              </div>


              <div className="[#facc15]  border-2 border-[#facc15]   bg-opacity-80 shadow-md rounded-md p-6 mb-10">
                <h2 className="text-2xl font-semibold text-[#facc15]  mb-4 flex items-center">
                  <FaWheelchair className="text-[#facc15]  mr-3" /> Access
                </h2>
                <div className="space-y-4 text-[#facc15] ">
                  <p>
                    If you have any special needs, please let our staff know so that we can ensure that you get the same support in the future.
                  </p>
                  <p>
                    <strong>Wheelchair access:</strong> The Surgery has been specially designed to make it easier for disabled patients to visit. There are no steps at the entrance of the building, giving patients easy access.
                  </p>
                  <p>
                    <strong>Disabled Parking:</strong> There are several dedicated disabled car parking spaces available immediately outside the front entrance of the surgery.
                  </p>
                </div>
              </div>


              <div className="shadow-md  border-2 border-[#facc15]  bg-opacity-80 rounded-md p-6">
                <h2 className="text-2xl font-semibold text-[#facc15]  mb-4 flex items-center">
                  <FaDog className="text-[#facc15]  mr-3" /> Guide Dogs
                </h2>
                <p className="text-[#facc15] ">
                  Guide dogs are welcome at the surgery, but we ask that you be aware of other patients and staff who may have an allergy or fear of dogs.
                </p>
              </div>

            </div>
          </div>



        </div>

      </div>
    </div>
  );
};

export default Information;
