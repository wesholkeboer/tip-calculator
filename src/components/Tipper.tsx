import { useState } from "react";
import "./Tipper.css";
import logo from "./logo.jpeg";
import dollar from "../assets/tip-calculator-app-main/tip-calculator-app-main/images/icon-dollar.svg";
import person from "../assets/tip-calculator-app-main/tip-calculator-app-main/images/icon-person.svg";

const Tipper = () => {
  const [bill, setBill] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);
  const [tip2, setTip2] = useState<any>("Custom");
  const [people, setPeople] = useState<number>(0);
  const handleClick = () => {
    setBill(0);
    setTip(0);
    setTip2("Custom");
    setPeople(0);
  };

  return (
    <div className="Tipper">
      <div className="tipForm">
        <div className="bill">
          <label htmlFor="bill">Bill</label>
          <div className="inputs">
            <img src={dollar} alt="dollar" className="icons" />
            <input
              type="number"
              name="bill"
              id="bill"
              value={bill}
              onChange={(e) => setBill(parseFloat(e.target.value))}
            />
          </div>
        </div>
        <p>Select Tip %</p>
        <div className="tipButtonContainer">
          <button className="tipButtons" onClick={() => setTip(5)}>
            5%
          </button>
          <button className="tipButtons" onClick={() => setTip(10)}>
            10%
          </button>
          <button className="tipButtons" onClick={() => setTip(15)}>
            15%
          </button>
          <button className="tipButtons" onClick={() => setTip(25)}>
            25%
          </button>
          <button className="tipButtons" onClick={() => setTip(50)}>
            50%
          </button>
          <input
            type="number"
            name="custom"
            id="custom"
            className="tipButtons"
            placeholder="Custom"
            value={tip2}
            onChange={(e) => setTip2(parseInt(e.target.value))}
          />
        </div>
        <div className="people">
          <label htmlFor="people">Number of People</label>
          <div className="inputs">
            <img src={person} alt="person" className="icons" />
            <input
              type="number"
              name="people"
              id="people"
              value={people}
              onChange={(e) => setPeople(parseInt(e.target.value))}
            />
          </div>
        </div>
      </div>
      <div className="tipResult">
        <div>
          <div className="resultDiv">
            <div className="resultHeading">
              <h2>Tip Amount</h2>
              <p className="personText">/ person</p>
            </div>
            <p className="resultNumbers">
              {tip2
                ? `$${((bill * tip2) / 100 / people).toFixed(2)}`
                : `$${((bill * tip) / 100 / people).toFixed(2)}`}
            </p>
          </div>
          <div className="resultDiv">
            <div className="resultHeading">
              <h2>Total</h2>
              <p className="personText">/ person</p>
            </div>
            <p className="resultNumbers">
              {tip2
                ? `$${(bill / people + (bill * tip2) / 100 / people).toFixed(
                    2
                  )}`
                : `$${(bill / people + (bill * tip) / 100 / people).toFixed(
                    2
                  )}`}
            </p>
          </div>
        </div>
        <button onClick={handleClick} className="resetButton">
          RESET
        </button>
      </div>
    </div>
  );
};

export default Tipper;
