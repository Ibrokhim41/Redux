import { useState } from "react";

const Tours = ({ items, notInterested }) => {
  const [show, setShow] = useState(false);
  const [itemId, setItemId] = useState();

  return (
    <>
      {items.map(({ id, name, info, image, price }, i) => {
        return (
          <>
            <div className="w-full flex flex-col" key={i}>
              <div className="w-1/3 m-auto">
                <div
                  className={`cursor-pointer`}
                  onClick={() => {
                    setShow(false);
                    setShow(true);
                    setItemId(id);
                  }}
                >
                  <img
                    src={image}
                    className="w-full h-48 object-cover"
                    alt=""
                  />
                  <div className="w-full flex justify-between">
                    <div>{name}</div>
                    <div>$ {price}</div>
                  </div>
                </div>
                <div className={`${show && itemId === id ? "show" : "hidden"}`}>
                  {info}
                  <button
                    className="w-full border bg-red-300 px-2 rounded focus:outline-none text-white"
                    onClick={() => notInterested(id)}
                  >
                    Not Intrested
                  </button>
                  <button
                    className="w-full border bg-blue-500 px-2 rounded focus:outline-none text-white"
                    onClick={() => setShow(false)}
                  >
                    Hide
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Tours;
