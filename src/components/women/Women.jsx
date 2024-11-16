import React from "react";
import {
  FaUserPlus,
  FaRegClipboard,
  FaHeartbeat,
  FaBriefcaseMedical,
  FaToilet,
  FaClipboardCheck,
} from "react-icons/fa";

const Women = () => {
  return (
    <div>
      <div className="relative w-full p-4 bg-blue-500 shadow-lg rounded-lg overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
        >
          <source src="/derm.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 px-4 md:px-24">
          <header className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-600">Women's Health</h1>
            <p className="mt-4 text-lg text-blue-300">
              We provide care for women from youth to menopause and beyond.
            </p>
          </header>

          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-500">Services We Offer</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <ServiceCard icon={<FaUserPlus className="text-blue-600" />} text="Family Planning" />
              <ServiceCard icon={<FaRegClipboard className="text-blue-600" />} text="Emergency Contraception" />
              <ServiceCard icon={<FaHeartbeat className="text-blue-600" />} text="Infertility Consultations" />
              <ServiceCard icon={<span className="text-3xl text-blue-600">👶</span>} text="Ante-Natal Care" />
              <ServiceCard icon={<FaBriefcaseMedical className="text-blue-600" />} text="Menopause Care" />
              <ServiceCard icon={<FaToilet className="text-blue-600" />} text="Urinary Incontinence Treatment" />
              <ServiceCard icon={<FaClipboardCheck className="text-blue-600" />} text="Cervical Screening" />
            </div>
          </section>

          <section
            className="p-4 md:p-6 rounded-lg mb-10 shadow"
            style={{ backgroundColor: 'rgba(30, 144, 255, 0.5)' }}
          >
            <h2 className="text-lg md:text-2xl font-semibold mb-4 text-blue-600">
              Free Contraception Consultations
            </h2>
            <p className="text-white">
              We are pleased to announce our participation in a scheme offering free contraception
              consultations to female patients aged between 17 and 26 years. To prove eligibility,
              all that is required is your PPS number. Please contact Reception to book an appointment.
            </p>
          </section>
        </div>
      </div>

      {/* Service Details */}
      <ServiceDetail title="Family Planning">
        We offer a comprehensive family planning service, including the insertion and removal of the
        Mirena Coil and Implanon implants for contraception. A detailed initial assessment is conducted
        to determine the most appropriate form of contraception. All forms of contraception, including the
        combined pill, the mini pill, barrier contraception, and sterilisation counselling, are available
        based on individual preferences and suitability.
      </ServiceDetail>

      <ServiceDetail title="Emergency Contraception">
        While we hope to avoid the need for emergency contraception, we understand it may sometimes be necessary.
        The "morning after pill" is available in pharmacies, but it may not be suitable for all women, especially
        those above a certain weight or who have delayed taking it. We provide a prescription that can be used
        up to five days after the event. If you're unsure about your risk of becoming pregnant, please consult
        with one of our team members.
      </ServiceDetail>

      <ServiceDetail title="Infertility Consultations">
        As more women start families later in life, infertility has become more common. We have significant
        experience in the initial assessment and investigation of fertility issues. This process typically
        involves a consultation to identify risk factors, assess overall health, and determine if ovulation
        is occurring. Blood tests are conducted at specific times in the menstrual cycle (usually day 3 and
        day 21). Male partners may also need to be assessed, and semen analysis may be required. After completing
        the investigations, referrals to appropriate infertility services will be made when necessary.
      </ServiceDetail>

      <ServiceDetail title="Ante-Natal Care">
        We offer combined ante-natal care to all pregnant patients. This service includes nine planned visits,
        starting with pregnancy confirmation and concluding with a six-week postnatal check-up for both mother
        and baby. Routine ante-natal care and monitoring of pregnancy-related complications, such as high blood
        pressure, are provided in collaboration with hospital services. Please note that visits for non-pregnancy-related
        illnesses will incur an additional cost for private patients.
      </ServiceDetail>

      <ServiceDetail title="Menopause Care">
        Menopause marks the permanent cessation of menstruation, occurring naturally or as a result of medical treatments
        such as surgery, chemotherapy, or radiotherapy. It is diagnosed retrospectively, 12 months after a woman's last
        period. However, many women experience significant symptoms during the peri-menopausal period due to fluctuating
        hormone levels. HRT and other treatments or lifestyle changes may provide relief.
      </ServiceDetail>

      <ServiceDetail title="Urinary Incontinence">
        While more common after menopause, urinary incontinence can also affect younger women, particularly after a difficult
        birth. If you're experiencing this issue, know that treatment is available. Please make an appointment to see one of
        our doctors, as it's never too late to seek help.
      </ServiceDetail>

      <ServiceDetail title="Cervical Screening">
        A national screening programme provides free cervical screening for women aged 25 to 60. You can register for the
        programme and book an appointment after receiving an invitation letter. Cervical smears should ideally be scheduled
        mid-cycle.
      </ServiceDetail>
    </div>
  );
};

const ServiceCard = ({ icon, text }) => {
  return (
    <div className="flex items-center p-4 bg-blue-500 bg-opacity-50 text-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      <div className="text-3xl mr-4">{icon}</div>
      <span className="text-lg">{text}</span>
    </div>
  );
};

// ServiceDetail component to encapsulate repeated section structure
const ServiceDetail = ({ title, children }) => {
  return (
    <section className="bg-[#005eb8]">
      <div className="px-4 md:px-24 py-4">
        <h2 className="text-xl font-semibold mb-4 text-blue-400">{title}</h2>
        <p className="text-white">{children}</p>
      </div>
    </section>
  );
};

export default Women;
