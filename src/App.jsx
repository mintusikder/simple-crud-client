import "./App.css";
function App() {
  const handelFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const user = { email, name };
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("added success");
          form.reset()
        }
      });
  };
  return (
    <>
      <h1>Simple CRUD</h1>
      <form onSubmit={handelFormSubmit}>
        <input type="text" name="name" id="" /> <br />
        <input type="email" name="email" id="" /> <br />
        <input type="submit" value="Add " />
      </form>
    </>
  );
}

export default App;
