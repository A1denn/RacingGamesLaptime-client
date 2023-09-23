import React from "react";

function LaptimeItem(props) {
  return (
    <li key={props.id}>
      <div>
        <div>{props.time}</div>
        <div>{props.car}</div>
        <div>{props.gameName}</div>
        <div>{props.circuit}</div>
        <div>{props.carCategory}</div>
        <div>{props.circuitLayout}</div>
        <div>{props.circuitCountry}</div>
        <div>{props.carCountry}</div>
        <div>{props.isCarMod}</div>
        <div>{props.isCircuitMod}</div>
      </div>
    </li>
  );
}

export default LaptimeItem;
