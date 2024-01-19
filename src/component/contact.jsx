const Contact = () => {
  return (
    <div className="py-10">
      <div>
        <p className=" text-xl sm:text-2xl text-center font-Poppins mb-[20px] text-green-600">Contact me</p>
        <div className="px-[24px] mx-[16px] sm:mx-[120px] md:mx-[200px] lg:mx-[350px] py-[24px] bg-neutral-800 rounded-[15px]">
          <form>
            <div>
              <div className="flex flex-col">
                <label className="text-white mb-2 text-base font-Poppins font-semibold">Nama :</label>
                <input className="py-[10px] px-[20px] rounded-lg bg-neutral-800 border focus:bg-white " type="text" id="inputName" placeholder="Nama" />
              </div>
              <div className="flex flex-col mt-[24px]">
                <label className="text-white mb-2 text-base font-Poppins font-semibold">Email :</label>
                <input className="py-[10px] px-[20px] rounded-lg bg-neutral-800 border focus:bg-white " type="text" id="inputEmail" placeholder="exsample@gmail.com" />
              </div>
              <div className="flex flex-col mt-[24px]">
                <label className="text-white mb-2 text-base font-Poppins font-semibold">Message :</label>
                <textarea className="py-[10px] px-[20px] rounded-lg bg-neutral-800 border focus:bg-white " type="text" id="inputPesan" placeholder="message" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
