import React, { useEffect, useState } from "react";
import List from "./List";
import data from "./data";

function Proj1() {
  const [people, setPeople] = useState(data);

  const go = ["ff", "gg", "sd"];

  const [person, setPerson] = useState({
    id: new Date().getTime().toString(),
    name: "",
    age: "",
    image: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const add = () => {
    // if (person.name && person.age && person.image) {
    //   setPeople({ ...people, person });
    // } else {
    //   alert("fill");
    // }
    setPeople([...people, person]);
    setPerson({
      id: new Date().getTime().toString(),
      name: "",
      age: "",
      image: "",
    });
  };

  const removePerson = (id) => {
    setPeople(people.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full h-screen bg-yellow-100 flex flex-col justify-center items-center">
      <div className="w-1/2 bg-blue-200 px-8 py-4 rounded">
        <h3 className="text-lg mb-2">{people.length} Users Today</h3>
        <List people={people} removePerson={removePerson} />
        <button
          className="w-full bg-red-500 rounded p-2 text-white"
          onClick={() => setPeople([])}
        >
          Clear All
        </button>
      </div>
      <div className="w-1/2 bg-blue-200">
        <input
          className="border-2 border-red-500 w-full mb-2"
          type="email"
          name="name"
          value={person.name}
          onChange={handleChange}
        />
        <input
          className="border-2 border-red-500 w-full mb-2"
          type="number"
          name="age"
          value={person.age}
          onChange={handleChange}
        />
        <input
          className="border-2 border-red-500 w-full mb-2"
          type="text"
          name="image"
          value={person.image}
          onChange={handleChange}
        />
        <button className="w-full bg-red-500 rounded text-white " onClick={add}>
          Add User
        </button>
      </div>
    </div>
  );
}

export default Proj1;
