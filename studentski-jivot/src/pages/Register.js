import React, { useEffect, useState } from "react";

function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `http://localhost:4040/api/register?email=${encodeURIComponent(
      email
    )}&password=${encodeURIComponent(password)}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };

  function addNewUser(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_URL + `/api/register`;
    fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
  }

  return (
    <html>
      <head></head>
      <div className="container">
        <div className="row">
          <div className="registerForm">
            <form onSubmit={addNewUser}>
              <div class="form-group">
                <label for="exampleInputEmail1">Email адрес</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                ></input>
                <small id="emailHelp" class="form-text text-muted"></small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Парола</label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                ></input>
              </div>
              <button type="submit" class="btn btn-light">
                Регистрирай се
              </button>
            </form>
          </div>
        </div>
      </div>
    </html>
  );
}

export default Register;
