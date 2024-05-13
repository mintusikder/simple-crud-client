import "./App.css";

function App() {
  const handelAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
  };
  return (
    <>
      <h1>Simple CRUD</h1>
      <form onSubmit={handelAddUser}>
        <input type="text" name="name" id="name" /> <br />
        <input type="text" name="email" id="email" /> <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  );
}

export default App;
