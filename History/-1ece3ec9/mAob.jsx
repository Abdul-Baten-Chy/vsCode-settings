import { useState } from "react";
import { initialTravelPlan } from "../data/places";

const First = () => {
  const [plan, setPlan] = useState(initialTravelPlan);

  const palces = plan.childPlaces;
  return (
    <div>
      <h2>Places to visit bt me</h2>
      <ol></ol>
    </div>
  );
};

export default First;
