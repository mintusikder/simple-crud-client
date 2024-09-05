import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loaderData = useLoaderData();
  const [users, setUser] = useState(loaderData);
  const handelDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Delete success");
          const remaining = users.filter((user) => user._id != _id);
          setUser(remaining);
        }
      });
  };
  return (
    <div>
      <h2>{loaderData.length}</h2>
      {users.map((user) => (
        <p key={user._id}>
          {user.email}:{user.name}{" "}
          <button onClick={() => handelDelete(user._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Users;
