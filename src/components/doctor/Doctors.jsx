import React from 'react';
import { FaUserMd, FaUserNurse, FaBriefcase } from 'react-icons/fa';
import Nav from '../home/Nav';
import Heeder from '../navbar/Heeder';

const staffMembers = [
  {
    name: 'Dr Asim Atiq',
    role: 'Dental Surgeon',
    bio: ``,
    qualifications: [
      'BDS',
     
    ],
    icon: <FaUserMd className="text-5xl text-[#facc15]  mx-auto" />,
  },
  {
    name: '',
    role: ' ',
    bio: ``,
    qualifications: [
      ``
    ],
    icon: <FaUserMd className="text-5xl text-[#facc15]  mx-auto" />,
  },
  // {
  //   name: 'Mr. .....',
  //   role: 'HR Manager',
  //   qualifications: [],
  //   bio: '',
  //   icon: <FaBriefcase className="text-5xl text-[#facc15]  mx-auto" />,
  // },
  // {
  //   name: 'Dr. .....',
  //   role: 'HR Manager/IT Adviser',
  //   qualifications: [],
  //   bio: '',
  //   icon: <FaBriefcase className="text-5xl text-[#facc15]  mx-auto" />,
  // },
  // {
  //   name: 'Ruth Kelly',
  //   role: 'Staff Nurse',
  //   qualifications: [],
  //   bio: '',
  //   icon: <FaUserNurse className="text-5xl text-[#facc15]  mx-auto" />,
  // },
  // {
  //   name: 'Margaret O’Gara',
  //   role: 'Medical Secretary/ Assistant',
  //   qualifications: [],
  //   bio: '',
  //   icon: <FaBriefcase className="text-5xl text-[#facc15]  mx-auto" />,
  // },
  // {
  //   name: 'Karen Drury',
  //   role: 'Medical Secretary',
  //   qualifications: [],
  //   bio: '',
  //   icon: <FaBriefcase className="text-5xl text-[#facc15]  mx-auto" />,
  // },
];

const Doctors = () => {
  return (
    <div>
      <div className="relative bg-black w-full h-auto overflow-hidden">
<Heeder/>
        <div className="relative z-10 pt-44 flex flex-col items-center justify-center h-full p-10 text-[#facc15]  space-y-8">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-2xl md:text-3xl rounded-lg px-2 font-bold  bg-opacity-80 text-[#facc15]  inline-block p-2 mb-14">
              Clinic Staff
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-6">
              {staffMembers.map((member, index) => (
                <div
                  key={index}
                  className=" bg-opacity-80  shadow-lg rounded-lg  border-2 border-[#facc15]  p-6 flex flex-col items-center"
                >
                  <div className="mb-4">{member.icon}</div>
                  <div className="text-center ">
                    <h3 className="text-2xl font-bold text-[#facc15] ">{member.name}</h3>
                    <p className="text-[#facc15]  text-lg mb-4">{member.role}</p>
                  </div>
                  {member.bio && <p className="text-[#facc15]  mb-4 text-justify">{member.bio}</p>}
                  {member.qualifications.length > 0 && (
                    <div className="text-center">
                      <h4 className="text-lg font-bold text-[#facc15]  mb-2">Qualifications:</h4>
                      <ul className="list-none text-[#facc15] ">
                        {member.qualifications.map((qualification, idx) => (
                          <li key={idx} className="mb-1">
                            {qualification}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
