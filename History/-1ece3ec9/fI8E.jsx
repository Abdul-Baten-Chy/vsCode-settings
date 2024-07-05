import { useState } from "react";
import { initialTravelPlan } from "../data/places";
import Li from "./Li";

const First = () => {
  const [plan, setPlan] = useState(initialTravelPlan); // this is an object

  const palces = plan.childPlaces; // this is an array of earth moon mars
  return (
    <div>
      <h2>Places to visit bt me</h2>
      <ol>
        {palces.map((place) => (
          <Li key={place.id} place={place}></Li>
        ))}
      </ol>
    </div>
  );
};

export default First;
