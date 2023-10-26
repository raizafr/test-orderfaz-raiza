import axios from "axios";
import { useEffect, useState } from "react";

const Currency = ({ currencies }) => {
  const [allCurrency, setAllCurrency] = useState(null);
  const abbreviation = Object.keys(currencies);
  const shortCurrency = abbreviation[0];

  useEffect(() => {
    const getAllCurrency = async () => {
      try {
        const res = await axios.get(
          `https://restcountries.com/v2/currency/${shortCurrency}`
        );
        setAllCurrency(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllCurrency();
  }, [shortCurrency]);

  return (
    <div className="md:w-1/2">
      <h2 className="text-black text-lg font-medium font-['SF Pro Text'] w-fit">
        Currency
      </h2>
      <h3 className="text-violet-500 text-5xl font-bold font-['SF Pro Text'] w-fit">
        {abbreviation[0]}
      </h3>
      <div>
        <span className="relative group">
          <span className="p-[20px] text-white font-medium font-['SF Pro Text'] w-[200px]  opacity-0 group-hover:opacity-100  bg-neutral-600 text-white text-xs rounded-[10px] absolute z-10  transform mt-10 transition-opacity duration-200">
            <ul className="space-y-2">
              {allCurrency &&
                allCurrency.map((data, i) => <li key={i}>{data.name}</li>)}
            </ul>
          </span>
          <span className="text-violet-500 text-sm font-medium font-['SF Pro Text'] underline cursor-pointer">
            {allCurrency && allCurrency.length} country
          </span>
        </span>
        <span className="text-black text-sm font-medium font-['SF Pro Text']">
          {" "}
          with this currency
        </span>
      </div>
    </div>
  );
};

export default Currency;
