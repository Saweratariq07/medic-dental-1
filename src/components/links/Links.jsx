import React from 'react';
import { FaFileAlt, FaCar, FaFileMedical } from 'react-icons/fa'; 
import Nav from '../home/Nav';

const Links = () => {
  const links = [
    {
      category: 'Medical Forms',
      icon: <FaFileMedical className="inline-block text-[#facc15]  mr-2" />,  
      items: [
        { name: 'Medical Card and GP Visit Card Application Form - People Aged 70 Years or Older', url: 'https://www.who.int/' },
        { name: 'GP Visit Card Registration Form (Under 6\'s)', url: 'https://www2.hse.ie/services/schemes-allowances/gp-visit-cards/under-8s/' },
        { name: 'Drugs Payment Scheme Application Form', url: 'https://www2.hse.ie/services/schemes-allowances/drugs-payment-scheme/apply/' },
        { name: 'Long Term Illness Scheme Application Form', url: 'http://www.hse.ie/eng/services/list/1/schemes/lti/ltiform.pdf' },
        { name: 'Maternity Benefit Form', url: 'https://www.gov.ie/redirects/?from=https://www.welfare.ie/en/pdf/mb10.pdf' },
      ],
      note: 'Maternity form needs to be signed and stamped by the practice after the 24th completed week of pregnancy and no less than 6 weeks before the commencement of maternity leave.'
    },
    {
      category: 'Driving Forms',
      icon: <FaCar className="inline-block text-[#facc15]  mr-2" />, 
      items: [
        { name: 'Driving License Application Form', url: 'https://www.ndls.ie/images/Documents/DrivingLicence/D401_Full_Licence_app_form.pdf' },
        { name: 'Driving License Eyesight Form', url: 'https://www.google.com/search?q=155076_NDLS_Eyesight_Rep_V9_Online_FA_BD_PDFX.pdf&oq=155076_NDLS_Eyesight_Rep_V9_Online_FA_BD_PDFX.pdf&aqs=chrome..69i57j69i60.1292j0j7&sourceid=chrome&ie=UTF-8' },
        { name: 'Driving License Medical Form', url: 'https://www.google.com/search?q=171315_NDLS_Medical_Form_JAN_2022_WEB_HR.pdf&sca_esv=c59eb27f93225518&sxsrf=ADLYWIKqICKgjbunsL1UsYCZ7nY6iFD6cA%3A1730235835026&ei=u00hZ9adAb6J7NYP58y9yAM&ved=0ahUKEwiW58vivrSJAxW-BNsEHWdmDzkQ4dUDCA8&uact=5&oq=171315_NDLS_Medical_Form_JAN_2022_WEB_HR.pdf&gs_lp=Egxnd3Mtd2l6LXNlcnAiLDE3MTMxNV9ORExTX01lZGljYWxfRm9ybV9KQU5fMjAyMl9XRUJfSFIucGRmSOyZElD1kRJY9ZEScAd4AJABAJgBkgKgAZICqgEDMi0xuAEDyAEA-AEB-AECmAIBoAJHqAIQwgIHECMYJxjqAsICDRAuGMcBGCcY6gIYrwHCAhQQABiABBiRAhi0AhiKBRjqAtgBAZgDR4gGAboGBggBEAEYAZIHATGgB2A&sclient=gws-wiz-serp' },
      ],
    },
    {
      category: 'Other Forms',
      icon: <FaFileAlt className="inline-block text-[#facc15]  mr-2" />,  
      items: [
        { name: 'European Health Insurance Card Application Form', url: 'http://www.hse.ie/eng/services/list/1/schemes/EHIC/EHIC_Application_Form.pdf' },
        { name: 'Medical Card and GP Visit Application', url: 'https://www.google.com/search?q=Medical_Card_or_GP_Visit_Card_change_of_GP_Form.pdf&sca_esv=c59eb27f93225518&sxsrf=ADLYWIKhS_eQWKu_AqYOO9XhQbD0Emd3dQ%3A1730236240307&ei=UE8hZ9utEsiXxc8P0fqx0Ac&ved=0ahUKEwjbleyjwLSJAxXIS_EDHVF9DHoQ4dUDCA8&uact=5&oq=Medical_Card_or_GP_Visit_Card_change_of_GP_Form.pdf&gs_lp=Egxnd3Mtd2l6LXNlcnAiM01lZGljYWxfQ2FyZF9vcl9HUF9WaXNpdF9DYXJkX2NoYW5nZV9vZl9HUF9Gb3JtLnBkZkjKFVDMDljMDnABeACQAQCYAe0CoAHtAqoBAzMtMbgBA8gBAPgBAfgBApgCAaACT6gCEMICBxAjGCcY6gLCAg0QLhjHARgnGOoCGK8BwgIUEAAYgAQYkQIYtAIYigUY6gLYAQHCAhoQLhiABBiRAhjRAxi0AhjHARiKBRjqAtgBAcICHRAuGIAEGJECGLQCGMcBGMgDGIoFGOoCGK8B2AEBmANPugYGCAEQARgBkgcBMaAHlwI&sclient=gws-wiz-serp' },
      ],
    },
  ];

  return ( 
    <div>
      <div className="relative w-full bg-black h-auto overflow-hidden">
       <Nav/>
         
        <div className="relative z-10 pt-36 flex flex-col items-center justify-center h-full p-10 text-[#facc15]  space-y-8">
          <div className="min-h-screen flex justify-center py-10">
            <div className="w-full max-w-4xl px-5 md:px-10">
              <h1 className="text-3xl md:text-2xl rounded-lg px-2   font-boldbg-blue-950 bg-opacity-80 text-[#facc15]  mb-4 inline-block p-2">Useful Forms and Links</h1>

              {links.map((section, index) => (
                <div key={index} className="mb-10  border-2 border-[#facc15]  bg-opacity-80 p-4 rounded-lg"> 
                  <h2 className="text-2xl font-semibold text-[#facc15]  mb-4 flex items-center">
                    {section.icon}  
                    {section.category}
                  </h2>
                  <ul className="space-y-3 ">
                    {section.items.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.url}
                          className="text-lg text-[#facc15]  hover:text-[#facc15]  transition duration-300 flex items-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFileAlt className="mr-2" /> 
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                  {section.note && (
                    <p className="text-sm text-[#facc15]  mt-4 italic">
                      {section.note}
                    </p>
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

export default Links; 
