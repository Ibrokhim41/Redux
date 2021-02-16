import { useState } from "react";

const Slider = () => {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();

  return (
    <div>
      <div className="flex justify-between w-32">
        <input
          value={from}
          className="border border-red-400 rounded"
          type="text"
        />
        <input
          value={to}
          className="border border-red-400 rounded"
          type="text"
        />
      </div>
    </div>
  );
};

export default Slider;
