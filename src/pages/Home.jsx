import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
  const [searchData, setSearchData] = useState("");
  const [allCountry, setAllCountry] = useState(null);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSearchData(value);
  };

  useEffect(() => {
    const getDataCountry = async () => {
      try {
        const res = await axios.get(
          `https://restcountries.com/v3.1/name/${searchData}?fullText=false`
        );
        setAllCountry(res.data);
        setError(false);
      } catch (err) {
        setError(true);
      }
    };

    if (searchData.length >= 3) {
      getDataCountry();
    } else {
      setAllCountry(null);
      setError(false);
    }
  }, [searchData]);

  return (
    <section className="min-h-screen min-w-full space-y-8 flex flex-col items-center -mt-28 justify-center">
      <h1 className="text-center text-black text-7xl font-bold font-['SF Pro Text']">
        Country
      </h1>
      <div className="space-y-2">
        <div className="flex items-center">
          <input
            type="text"
            id="search"
            name="search"
            className="md:w-[700px] md:h-[60px] w-[330px] h-[60px] rounded-[10px] border border-stone-300 text-lg px-6 focus:border-none focus:border-opacity-50  duration-300 focus:outline-violet-500 outline-violet-500"
            placeholder="Type any country name"
            onChange={(e) => handleChange(e)}
          />
          <label
            htmlFor="search"
            className="text-stone-300 focus:text-red-500 transition-colors duration-300 "
          >
            <AiOutlineSearch className="scale-150 -ml-10 " />
          </label>
        </div>
        <div className="w-[700px] bg-white rounded-[5px] shadow fixed">
          {error ? (
            <div className="text-red-600 text-lg font-normal font-['SF Pro Text'] px-6 py-2 hover:bg-zinc-100 cursor-pointer ">
              Data not found
            </div>
          ) : !allCountry ? null : (
            allCountry.map((country, i) => (
              <Link key={i} to={`/country/${country.name.common}`}>
                <div className="text-black text-lg font-normal font-['SF Pro Text'] px-6 py-2 hover:bg-zinc-100 cursor-pointer ">
                  {country.name.common}
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
