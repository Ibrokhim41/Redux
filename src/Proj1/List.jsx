const List = ({ people, removePerson }) => {
  return (
    <div className="mb-4">
      {people.map((person) => {
        return (
          <div className="flex items-center justify-between" key={person.id}>
            <div className="flex items-center">
              <img
                className="w-24 h-24 object-cover rounded-full mr-2"
                src={person.image}
                alt=""
              />
              <p>name: {person.name}</p>
            </div>
            <p>age: {person.age}</p>
            <button onClick={() => removePerson(person.id)}>remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
