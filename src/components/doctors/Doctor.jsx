import React from 'react';
import { FaUserMd, FaUserNurse, FaBriefcase } from 'react-icons/fa';
import Nav from '../home/Nav';

const staffMembers = [
  {
    name: 'Dr Hassaan Chughtai',
    role: 'General Practitioner',
    bio: `Dr. Hassaan Chughtai is a dedicated family physician with a passion for providing comprehensive medical care to patients of all ages. A proud graduate of Dow Medical College, where he earned his MBBS degree in 2009, Dr. Chughtai brings over a decade of experience in diagnosing and managing a wide range of health conditions.

Committed to patient-centered care, he focuses on building lasting relationships with his patients to promote their overall well-being. Dr. Chughtai's approach emphasizes preventive care and personalized treatment plans tailored to each individual's needs.

With a warm and approachable demeanor, Dr. Hassaan Chughtai is dedicated to ensuring his patients receive the highest standard of medical attention. He is passionate about improving quality of life through accurate diagnoses. and ongoing support for those with neurological conditions.`,
    qualifications: [
      'MBBS',
      '',
     
    ],
    icon: <FaUserMd className="text-5xl text-[#facc15]  mx-auto" />,
  },
  {
    name: 'Dr. Shamim Haider',
    role: 'Neurologist & Neurophysiologist ',
    bio: `Dr. Shamim Haider is a highly qualified and       experienced specialist in Neurology and Neurophysiology, dedicated to diagnosing and managing a wide spectrum of neurological disorders. He is a graduate of Dow Medical College, where he earned his MBBS.

Dr. Haider further honed his expertise by completing a Master’s in Clinical Neurology from the prestigious University College London (UCL). His multidisciplinary background and commitment to continuous learning equip him with the knowledge and skills to provide cutting-edge care in neurology.

Known for his patient-focused approach, Dr. Haider combines clinical expertise with compassion, ensuring his patients receive comprehensive care tailored to their unique needs. He is passionate about improving quality of life through accurate diagnoses, innovative treatments, and ongoing support for those with neurological conditions.`,   
qualifications: [
      'MBBS.',
      'MRCP (UK)',
      'MRCPI (Ireland',
      'MRCP (Acute Medicine)',
      'MSc Clinical Neurology (UCL)',
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

const Doctor = () => {
  return (
    <div>
      <div className="relative bg-black w-full h-auto overflow-hidden">
<Nav/>
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
                      <h4 className="text-lg font-bold text-[#facc15]   mb-2">Qualifications:</h4>
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

export default Doctor;
