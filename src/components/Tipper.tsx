import { useState } from "react";
import "./Tipper.css";

const Tipper = () => {
  const [bill, setBill] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);

  return (
    <div className="Tipper">
      <div className="tipForm">
        <div className="bill">
          <label htmlFor="bill">Bill</label>
          <input
            type="number"
            name="bill"
            id="bill"
            value={bill}
            onChange={(e) => setBill(parseFloat(e.target.value))}
          />
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
            value={tip}
            onChange={(e) => setTip(parseInt(e.target.value))}
          />
        </div>
        <div className="people">
          <label htmlFor="people">Number of People</label>
          <input
            type="number"
            name="people"
            id="people"
            value={people}
            onChange={(e) => setPeople(parseInt(e.target.value))}
          />
        </div>
      </div>
      <div className="tipResult">
        <div className="resultDiv">
          <div className="resultHeading">
            <h2>Tip Amount</h2>
            <p>/ person</p>
          </div>
          <p className="resultNumbers">{`$${(
            (bill * tip) /
            100 /
            people
          ).toFixed(2)}`}</p>
        </div>
        <div className="resultDiv">
          <div className="resultHeading">
            <h2>Total</h2>
            <p>/ person</p>
          </div>
          <p className="resultNumbers">
            {`$${(bill / people + (bill * tip) / 100 / people).toFixed(2)}`}
          </p>
        </div>
        <button className="resetButton">RESET</button>
      </div>
    </div>
  );
};

export default Tipper;
