const LatLong = ({ latlng }) => {
  return (
    <div className="md:w-1/2 rounded-[5px] shadow flex z-10 justify-between items-center">
      <div className="p-[25px]">
        <h2 className="text-center text-black text-lg font-medium font-['SF Pro Text'] w-fit">
          LatLong
        </h2>
        <h3 className="text-center text-violet-500 text-5xl font-bold font-['SF Pro Text'] w-fit">
          {latlng[0]}, {latlng[1]}
        </h3>
      </div>
      <div className="bg-[url('/public/globe.svg')] bg-cover lg:w-1/2 w-1/6 h-full"></div>
    </div>
  );
};

export default LatLong;
