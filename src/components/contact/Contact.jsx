'use client'
import React, { useState } from 'react';
import Heeder from '../navbar/Heeder';

function Contact() {



  return (
    <div className="bg-black min-h-screen flex items-center justify-center pt-24 py-10">
     
      <div className="relative w-full max-w-2xl bg-gradient-to-r  from-[#e7cd22] via-[#b29f1f] to-[#373317] p-12 rounded-lg border-black">
        <form  className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value= ''
             
              className="w-full p-4 border-2 border-black bg-transparent placeholder-black focus:outline-none"
            />
            {/* {formErrors.name && <span className="text-red-500 text-sm">{formErrors.name}</span>} */}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <input
                type="email"
                name="email"
                placeholder="E Mail"
               
                className="w-full p-4 border-2 border-black bg-transparent placeholder-black focus:outline-none"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
              
                className="w-full p-4 border-2 border-black bg-transparent placeholder-black focus:outline-none"
              />
              {/* {formErrors.phone && <span className="text-red-500 text-sm">{formErrors.phone}</span>} */}
            </div>
          </div>

          <div>
            <select
              name="service"
              // value={formData.service}
              // onChange={handleInputChange}
              className="w-full p-4 border-2 border-black bg-transparent text-black focus:outline-none"
            >
              <option value="">Select Service</option>
              <option value="Service 1">Medical</option>
              <option value="Service 2">Dental </option>
            </select>
          </div>

          <div>
            <input
              type="date"
              name="date"
              // value={formData.date}
              // onChange={handleInputChange}
              className="w-full p-4 border-2 border-black bg-transparent placeholder-black focus:outline-none"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Additional Note"
              // value={formData.message}
              // onChange={handleInputChange}
              className="w-full h-32 p-4 border-2 border-black bg-transparent placeholder-black focus:outline-none"
            />
            {/* {formErrors.message && <span className="text-red-500 text-sm">{formErrors.message}</span>} */}
          </div>

          <div className="flex items-start text-black justify-between">
            <input
              type="checkbox"
              name="acceptedTerms"
              // checked={formData.acceptedTerms}
              // onChange={handleInputChange}
              className="mr-2 bg-black"
              required
            />
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </p>
          </div>
          {/* {formErrors.acceptedTerms && <span className="text-red-500 text-sm">{formErrors.acceptedTerms}</span>} */}

          <button
            type="submit"
            className="w-full bg-black text-yellow-400 font-semibold py-3 rounded-md hover:bg-yellow-600 transition duration-200"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
