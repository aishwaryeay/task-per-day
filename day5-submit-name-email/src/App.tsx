import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  function handleName(e) {
    const name: string = e.target.value;
    setNameError("");
    setName(name);
  }

  function handleEmail(e) {
    const email = e.target.value;
    setEmailError("");
    setEmail(email);
  }

  function handleSubmit() {
    if (name.length < 3 || name.length > 15) {
      setNameError(
        "Name should be atleast 3 characters and cannnot be longer that 15 charcters"
      );
    }
    if (!email.includes("@") || !email.includes(".") || ! (email.length < 5) || !(email.length > 20) ) {
      setEmailError("Enter valid email address");
    }
  }

  return (
    <>
      <form>
        <label>NAME : </label>
        <input type="string" onChange={(e) => handleName(e)} />
        <p> {nameError && nameError} </p>

        <label>EMAIL : </label>
        <input type="email" onChange={(e) => handleEmail(e)} />
        <p> {emailError && emailError}</p>

        <button onClick={handleSubmit}> SUBMIT </button>
      </form>
    </>
  );
}

export default App;
