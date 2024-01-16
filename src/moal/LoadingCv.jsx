const LoadingCv = ({ setShowCv }) => {
  return (
    <div className="z-50 fixed top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2">
      <div className="w-[500px] mx-auto border border-black mt-2 rounded-lg py-5 bg-zinc-800 ">
        <div className="flex flex-col items-center gap-3">
          <img src="./img/searching.svg" width={200} alt="loading" />
          <p className="text-xl text-white font-semibold">Loading......</p>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg px-4 py-2" onClick={() => setShowCv(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default LoadingCv;
