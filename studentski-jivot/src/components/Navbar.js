import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="page-header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Студентски Живот
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <div class="d-flex justify-content-between w-100">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Начална страница <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <Link to="/SpendingsPage" className="nav-link">
                  Инструменти за студенти
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Контакти
                </a>
              </li>
            </ul>
            <ul class="navbar-nav login-page">
              <li className="nav-item">
                <Link to="/Login" className="nav-link">
                  Вход
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
