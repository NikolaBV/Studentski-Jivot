import "./App.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [datetime, setDateTime] = useState("");
  const [description, setDescription] = useState("");
  const data = { name, description, datetime };
  function addNewSpending(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_URL + `/api/spending`;
    const init = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch(url, init, {}).then((Response) => {
      Response.json().then((json) => {
        console.log("result", json);
      });
    });
  }
  return (
    <main>
      <h1>
        100<span>.00</span>
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
        <div className="individualSpending">
          <div className="Left">
            <div className="name">Домати и краставици</div>
            <div className="description">Трябва си</div>
          </div>
          <div className="Right">
            <div className="price red">-50 лв</div>
            <div className="datetime">2023-10-16 12:49</div>
          </div>
        </div>
        <div className="individualSpending">
          <div className="Left">
            <div className="name">Банков превод</div>
            <div className="description">Трябва си</div>
          </div>
          <div className="Right">
            <div className="price green">+100 лв</div>
            <div className="datetime">2023-10-16 12:49</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
