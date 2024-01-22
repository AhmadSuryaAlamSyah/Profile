import React, { useEffect } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../global/GlobalContetxt';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
  const { setShowForm } = useContext(GlobalContext);
  useEffect(() => {
    Aos.init();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(true);
    console.log('form submitted');
    e.target.reset();
  };
  return (
    <div className="py-10" id="contact">
      <div>
        <p className=" text-xl sm:text-2xl text-center font-Poppins mb-[20px] text-green-600" data-aos="fade-up">
          Contact me
        </p>
        <div className="px-[24px] mx-[16px] sm:mx-[120px] md:mx-[200px] lg:mx-[350px] py-[24px] bg-neutral-800 rounded-[15px]" data-aos="fade-up">
          <form onSubmit={handleSubmit}>
            <div data-aos="fade-up">
              <div className="flex flex-col">
                <label className="text-white mb-2 text-base font-Poppins font-semibold">Nama :</label>
                <input className="py-[10px] px-[20px] rounded-lg bg-neutral-800 border focus:bg-white " type="text" id="inputName" placeholder="Nama" required />
              </div>
              <div className="flex flex-col mt-[24px]">
                <label className="text-white mb-2 text-base font-Poppins font-semibold">Email :</label>
                <input className="py-[10px] px-[20px] rounded-lg bg-neutral-800 border focus:bg-white " type="text" id="inputEmail" placeholder="exsample@gmail.com" required />
              </div>
              <div className="flex flex-col mt-[24px]">
                <label className="text-white mb-2 text-base font-Poppins font-semibold">Message :</label>
                <textarea className="py-[10px] px-[20px] rounded-lg bg-neutral-800 border focus:bg-white " type="text" id="inputPesan" placeholder="message" required />
              </div>
              <button className="text-white mt-[24px] hover:scale-95 bg-green-500 hover:bg-green-600 rounded-lg py-[10px] px-[20px] font-Poppins font-semibold" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
