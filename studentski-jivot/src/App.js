import "./App.css";

function App() {
  return (
    <div>
      <h1>
        100<span>.00</span>
      </h1>
      <form>
        <div className="BasicInfo">
          <input
            type="text"
            placeholder={"+50 за покупки от супермаркет"}
          ></input>
          <input type="datetime-local"></input>
        </div>
        <div className="Description">
          <input type="text" placeholder={"Описание"}></input>
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
            <div className="price">50 лв</div>
            <div className="datetime">2023-10-16 12:49</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
