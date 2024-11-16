import React, { useState } from 'react';
import Nav from '../home/Nav';

function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    doctor: '',
    reason: '',
    isNewPatient: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <div>
        <Nav/>
      </div>
    <div className="relative bg-black w-full h-auto overflow-hidden">

      <div className="relative pt-44 z-10 pb-16 flex flex-col items-center justify-center h-full text-[#facc15] space-y-8">
        <div className="bg-transparent p-10 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl rounded-lg px-4 sm:px-6 md:px-8 font-bold  bg-opacity-70 text-[#facc15] mb-4 inline-block py-2">
  Book a Doctor's Appointment
</h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
            
              <div>
             
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  placeholder='Name'
                  onChange={handleChange}
                  required
                  className="mt-1 block text-[#000000]  w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-[#facc15]  focus:border-[#facc15] "
                />
              </div>

              <div>
               
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block text-black w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-[#facc15]  focus:border-[#facc15] "
                />
              </div>

              <div>
              
                <input
                  type="tel"
                  id="phone"
                  placeholder='Phone'
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 block text-black w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-[#facc15]  focus:border-[#facc15] "
                />
              </div>

              <div>
               
                <input
                  type="date"
                  placeholder='Appoinment Date'
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="mt-1 block text-black w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-[#facc15]  focus:border-[#facc15] "
                />
              </div>
            </div>

         
            <div className="space-y-4">
            
              <div>
               
                <input
                  type="time"
                  placeholder='Appoinment Time'
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="mt-1 block text-black w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-[#facc15]  focus:border-[#facc15] "
                />
              </div>

              <div>
               
                <select
                  id="doctor"
                  name="doctor"
                  placeholder='Choose docor'
                  value={formData.doctor}
                  onChange={handleChange}
                  required
                  className="mt-1 block text-black w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-[#facc15]  focus:border-[#facc15] "
                >
                  <option value="" disabled>Select a Doctor</option>
                  <option value="Dr. Muhammad Ghaznain">Dr Hassaan Chughtai</option>
                  <option value="Dr. Catherine Donnelly">Dr. Shamim Haider                  </option>
                </select>
              </div>

              <div>
               
                <textarea
                  id="reason"
                  name="reason"
                  placeholder='Reason For Visit'
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  className="mt-1 block text-black w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-[#facc15]  focus:border-[#facc15] "
                />
              </div>

           
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isNewPatient"
                  name="isNewPatient"
                  checked={formData.isNewPatient}
                  onChange={handleChange}
                  className="h-4 w-4 text-black border-gray-300 rounded focus:ring-[#facc15] "
                />
                <label htmlFor="isNewPatient" className="ml-2 block text-lg text-[#facc15]  font-bold">
                  I am a new patient
                </label>
              </div>
            </div>

          
            <div className="col-span-1 md:col-span-2">
              
            <a
  href="mailto:info@frenchparkmedicalcentre.com"
  className="w-full bg-[#facc15]  text-black font-bold py-2 px-4 rounded-md shadow hover:bg-[#facc15]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#facc15]  text-center block"
>
  Submit Appointment
</a>

            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Appointment;
