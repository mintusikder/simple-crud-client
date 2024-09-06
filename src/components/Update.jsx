import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loaderUser = useLoaderData();
  const handelUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const user = { email, name };
    console.log(user);
    fetch(`http://localhost:5000/users/${loaderUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.matchedCount > 0) {
          alert("User Update");
        }
      });
  };
  return (
    <div>
      <h2>Update Data {loaderUser.length}</h2>
      <form onSubmit={handelUpdate}>
        <input type="text" name="name" id="" defaultValue={loaderUser?.name} />{" "}
        <br />
        <input
          type="email"
          name="email"
          id=""
          defaultValue={loaderUser?.email}
        />{" "}
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
