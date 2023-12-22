import React, { useEffect, useState } from "react";
import "../App.css";

function SpendingsPage() {
  const [name, setName] = useState("");
  const [datetime, setDateTime] = useState("");
  const [description, setDescription] = useState("");
  const [spendings, setSpendings] = useState([]);

  useEffect(() => {
    getSpendings().then((data) => setSpendings(data));
  }, []);

  async function getSpendings() {
    const url = process.env.REACT_APP_URL + `/api/spendings`;
    const response = await fetch(url);
    return await response.json();
  }

  function addNewSpending(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_URL + `/api/spending`;

    // Extracting price and name from the input
    const priceMatch = name.match(/([-+]?\d+(\.\d+)?)/);
    const price = priceMatch ? parseFloat(priceMatch[0]) : 0;

    // Extracting the name without the price
    const nameWithoutPrice = name
      .replace(priceMatch ? priceMatch[0] : "", "")
      .trim();

    // Using the value from the "Description" input for the 'description' field
    const description = document.querySelector(".Description input").value;

    fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name: nameWithoutPrice,
        description,
        datetime,
        price,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("result", json);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  let balance = 0;
  for (const spending of spendings) {
    balance = balance + spending.price;
  }
  balance = balance.toFixed(2);

  return (
    <html>
      <div id="main-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="left-section">
                <div className="spendingsWindow">
                  <h1>
                    ${balance}
                    <span></span>
                  </h1>
                  <form onSubmit={addNewSpending}>
                    <div className="BasicInfo">
                      <input
                        type="text"
                        value={name}
                        onChange={(ev) => setName(ev.target.value)}
                        placeholder={"+50 за покупки от супермаркет"}
                      ></input>
                      <input
                        value={datetime}
                        type="datetime-local"
                        onChange={(ev) => setDateTime(ev.target.value)}
                      ></input>
                    </div>
                    <div className="Description">
                      <input
                        type="text"
                        placeholder={"Описание"}
                        value={description}
                        onChange={(ev) => setDescription(ev.target.value)}
                      ></input>
                    </div>
                    <button type="submit">Добави нов разход</button>
                  </form>
                  <div className="Spendings">
                    {spendings.map((spending) => (
                      <div key={spending.id} className="individualSpending">
                        <div className="Left">
                          <div className="name">{spending.name}</div>
                          <div className="description">
                            {spending.description}
                          </div>
                        </div>
                        <div className="Right">
                          <div
                            className={`price ${
                              spending.price < 0 ? "red" : "green"
                            }`}
                          >
                            {spending.price} лв
                          </div>
                          <div className="datetime">{spending.datetime}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer-section">
        <div class="container">
          <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
              <li class="nav-item">
                <a href="#" class="nav-link px-2 text-muted">
                  Начална страница
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link px-2 text-muted">
                  Инструменти за студенти
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link px-2 text-muted">
                  Контакти
                </a>
              </li>
            </ul>
            <p class="text-center text-muted">© 2023 Студентски Живот</p>
          </footer>
        </div>
      </div>
    </html>
  );
}

export default SpendingsPage;
