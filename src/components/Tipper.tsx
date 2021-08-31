import { useState } from "react";
import "./Tipper.css";

const Tipper = () => {
  const [bill, setBill] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);

  return (
    <div className="Tipper">
      <div>
        <div>
          <label htmlFor="bill">Bill</label>
          <input
            type="number"
            name="bill"
            id="bill"
            value={bill}
            onChange={(e) => setBill(parseInt(e.target.value))}
          />
        </div>
        <div>
          <p>Select Tip %</p>
          <button onClick={() => setTip(5)}>5%</button>
          <button onClick={() => setTip(10)}>10%</button>
          <button onClick={() => setTip(15)}>15%</button>
          <button onClick={() => setTip(25)}>25%</button>
          <button onClick={() => setTip(50)}>50%</button>
          <input
            type="number"
            name="custom"
            id="custom"
            value={tip}
            onChange={(e) => setTip(parseInt(e.target.value))}
          />
        </div>
        <div>
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
      <div>
        <div>
          <div>
            <h2>Tip Amount</h2>
            <p>/ person</p>
          </div>
          <p>{(bill * tip) / people}</p>
        </div>
        <div>
          <div>
            <h2>Total</h2>
            <p>/ person</p>
          </div>
          <p>{bill / people + (bill * tip) / people}</p>
        </div>
      </div>
    </div>
  );
};

export default Tipper;
