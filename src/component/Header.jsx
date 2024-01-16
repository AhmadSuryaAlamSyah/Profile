import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { GlobalContext } from '../global/GlobalContetxt';

const Header = () => {
  const { setShowCv } = useContext(GlobalContext);
  const [showMenu, setShowMenu] = useState(false);
  const [icon, setIcon] = useState(false);

  const ToggleMenu = () => {
    setShowMenu(!showMenu);
    setIcon(!icon);
  };

  return (
    <div>
      <div className=" bg-neutral-900 flex justify-between items-center py-[18px] px-[16px] lg:px-[150px]">
        <div>
          <p className="font-Poppins text-xl text-white">Surya</p>
        </div>
        <div className="sm:hidden ">{icon ? <img onClick={ToggleMenu} src="./img/icon.svg" alt="close" /> : <img onClick={ToggleMenu} src="./img/menu.svg" alt="menu" />}</div>
        <div className="hidden sm:flex sm:gap-[20px] lg:gap-[40px] text-white text-base font-medium font-['DM Sans'] leading-none">
          <div className="flex flex-col justify-center items-center">
            <a className="hover:text-green-500" href="/">
              About
            </a>
            <div className="hidden hover:flex border-2 border-green-500 w-[55px] my-2" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <a className="hover:text-green-500" href="/">
              Skill
            </a>
            <div className="border-2 border-green-500 w-[40px] my-2" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <a className="hover:text-green-500" href="/">
              Contact
            </a>
            <div className="border-2 border-green-500 w-[60px] my-2" />
          </div>
        </div>
        <div className="hidden sm:flex w-[169px] hover:scale-95 hover:bg-green-700 duration-300 h-12 px-5 py-4 bg-green-500 rounded-lg justify-center items-center gap-2.5 ">
          <div className="text-white  text-base font-medium font-['DM Sans'] leading-none flex gap-2">
            <FontAwesomeIcon icon={faFile} style={{ color: '#ffffff' }} />
            <button onClick={() => setShowCv(true)}>Download CV</button>
          </div>
        </div>
      </div>
      {showMenu ? (
        <div className="bg-neutral-900 -mt-1 sm:hidden flex flex-col gap-[25px] py-7 justify-center text-xl items-center text-white  font-semibold font-['DM Sans'] leading-none">
          <a href="/">About</a>
          <a href="/">Skill</a>
          <a href="/">Contact</a>
        </div>
      ) : null}
    </div>
  );
};
export default Header;
