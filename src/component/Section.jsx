import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import TypeIt from 'typeit-react';

const Section = () => {
  return (
    <div>
      <div className="bg-neutral-900">
        <div className="flex flex-col sm:flex-row opacity-90  w-full px-[20px] md:px-[30px] lg:px-[60px]">
          <div className="sm:w-1/2">
            <img className="scale-75 mx-auto" src="./img/Picture.svg" />
            <div className="hidden sm:flex justify-center -translate-x-10 -translate-y-14 items-center gap-4 pb-5">
              <p className=" text-white text-sm font-semibold">Find Me On</p>
              <div className="flex gap-3">
                <FontAwesomeIcon className="grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-125 duration-300" size="xl" icon={faLinkedin} style={{ color: '#22c55e' }} />
                <FontAwesomeIcon className="grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-125 duration-300" icon={faInstagram} size="xl" style={{ color: '#22c55e' }} />
                <FontAwesomeIcon className="grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-125 duration-300" icon={faFacebook} size="xl" style={{ color: '#22c55e' }} />
              </div>
            </div>
          </div>
          <div className="text-white flex flex-col justify-center sm:w-1/2  font-medium  -translate-y-10 sm:-translate-y-0">
            <p className="text-2xl sm:text-3xl"> Hallooo </p>
            <p className="text-2xl sm:text-3xl">
              I am <span className="text-green-500 font-bold"> Ahmad Surya Alam Syah</span>
            </p>
            <TypeIt className="text-xl sm:text-2xl" options={{ strings: ['Software Developer'], loop: true, speed: 100 }} />

            <div className="border-2 border-green-500 w-[80px] my-2 sm:w-[93px] lg:w-[100px]" />
            <p className="font-normal text-base ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, deleniti laudantium necessitatibus similique aliquam autem maiores est quis quod. Ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              distinctio quisquam error.
            </p>
            <div className="flex gap-3 my-4 ">
              <div className="bg-green-500 w-[140px] hover:scale-95 duration-300 hover:bg-green-700 text-white py-2 px-2 rounded-lg flex items-center justify-center gap-1">
                <FontAwesomeIcon icon={faFile} style={{ color: '#ffffff' }} />
                <button>Download CV</button>
              </div>
              <button className="border-2 w-[140px] hover:scale-95 hover:bg-slate-100 hover:text-green-500 duration-300 border-green-500 py-2 px-2 rounded-lg">More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section;
