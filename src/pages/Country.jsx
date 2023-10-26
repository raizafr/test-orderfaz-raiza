// import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LatLong from "../components/cards/LatLong";
import Capital from "../components/cards/Capital";
import Button from "../components/buttons/Button";
import CallingCode from "../components/groups/CallingCode";
import Currency from "../components/groups/Currency";
import Header from "../components/Header";

const Country = () => {
  const [dataCountry, setDataCountry] = useState(null);
  const { country } = useParams();

  useEffect(() => {
    const getSingleDataCountry = async () => {
      try {
        const res = await axios.get(
          `https://restcountries.com/v3.1/name/${country}`
        );

        setDataCountry(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getSingleDataCountry();
  }, [country]);

  return (
    <section className="min-h-screen min-w-full lg:p-20 p-5">
      <Button />
      {dataCountry && (
        <div className="lg:mt-8 mt-4 space-y-5">
          <Header
            name={dataCountry.name.common}
            altSpellings={dataCountry.altSpellings}
          />
          <div className="md:flex justify-between gap-5 space-y-5 md:space-y-0">
            <LatLong latlng={dataCountry.latlng} />
            <Capital
              capital={dataCountry.capital[0]}
              region={dataCountry.region}
              subregion={dataCountry.subregion}
            />
          </div>
          <div className="flex justify-between gap-5 md:space-y-0">
            <CallingCode idd={dataCountry.idd} name={dataCountry.name.common} />
            <Currency
              currencies={dataCountry.currencies}
              name={dataCountry.name.common}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Country;
