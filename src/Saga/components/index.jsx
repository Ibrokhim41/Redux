import { useState } from "react";
import { useSelector } from "react-redux";
import uniqid from "uniqid";

const UserInfo = () => {
  const [user, setUser] = useState({
    id: uniqid(),
    name: "",
    info: "",
  });

  const users = useSelector((state) => state.users);

  console.log(users);

  return (
    <div>
      <input
        value={user.name}
        onChange={(e) => setUser(e.target.value)}
        className="w-full border border-yellow-300"
        type="text"
      />
      <input
        value={user.info}
        onChange={(e) => setUser(e.target.value)}
        className="w-full border border-yellow-300"
        type="text"
      />
      <button className="w-full bg-yellow-300 hover:bg-yellow-400 focus:outline-none text-white">
        add
      </button>
      <div>{}</div>
    </div>
  );
};

export default UserInfo;
