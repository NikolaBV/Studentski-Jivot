import React from "react";

function Login() {
  return (
    <html>
      <head></head>
      <div className="container">
        <div className="row">
          <div className="loginForm">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email адрес</label>
                <input
                  type="email"
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
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                ></input>
              </div>
              <button type="submit" class="btn btn-light">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </html>
  );
}

export default Login;
