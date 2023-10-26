const Capital = ({ capital, region, subregion }) => {
  return (
    <div className="md:w-1/2 rounded-[5px] shadow p-[25px] flex flex-col justify-center ">
      <div>
        <span className="text-black text-lg font-normal font-['SF Pro Text']">
          Capital:{" "}
        </span>
        <span className="text-black text-lg font-medium font-['SF Pro Text']">
          {capital}
        </span>
      </div>
      <div>
        <span className="text-black text-lg font-normal font-['SF Pro Text']">
          Region:{" "}
        </span>
        <span className="text-black text-lg font-medium font-['SF Pro Text']">
          {region}
        </span>
      </div>
      <div>
        <span className="text-black text-lg font-normal font-['SF Pro Text']">
          Subregion:{" "}
        </span>
        <span className="text-black text-lg font-medium font-['SF Pro Text']">
          {subregion}
        </span>
      </div>
    </div>
  );
};

export default Capital;
