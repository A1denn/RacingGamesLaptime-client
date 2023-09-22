import React, { useState, useEffect } from "react";
import axios from "axios";
import LaptimeItem from "./LaptimeItem";

function Laptimes() {
  const [data, setData] = useState([]);

  // get the data
  /*
  useEffect(() => {
    const fetchProcess = async () => {
      try {
        await axios
          .get("https://localhost:7213/api/Laptime/GetAllLaptimes")
          .then((response) => {
            setData(response.data);
          });
      } catch {
        throw new Error("Fetching got wrong!");
      }
    };

    fetchProcess().catch((error) => {
      console.log(error);
    });
  }, []);
*/

  const DUMMY = [
    {
      id: "3016e51a-fce0-4565-ab92-5f9c11bb648d",
      time: 100008,
      car: "F10",
      gameName: "Assetto Corsa",
      circuit: "Shanghai International Circuit",
      carCategory: "Formula 1",
      circuitLayout: "Grand Prix",
      circuitCountry: "China",
      carCountry: "Italy",
      isCarMod: true,
      isCircuitMod: false,
    },
  ];

  const LaptimeList = DUMMY.map((item) => (
    <LaptimeItem
      Kay={item.id}
      time={item.time}
      car={item.car}
      gameName={item.gameName}
      circuit={item.circuit}
      carCategory={item.carCategory}
      circuitLayout={item.circuitLayout}
      circuitCountry={item.circuitCountry}
      carCountry={item.carCountry}
      isCarMod={item.isCarMod}
      isCircuitMod={item.isCircuitMod}
    />
  ));
  return (
    <section>
      <ul>{LaptimeList}</ul>
    </section>
  );
}

export default Laptimes;
