import "./Tipper.css";

const Tipper = () => {
  return (
    <div className="Tipper">
      <div>
        <div>
          <label htmlFor="bill">Bill</label>
          <input type="number" name="bill" id="bill" />
        </div>
        <div>
          <p>Select Tip %</p>
          <button>5%</button>
          <button>10%</button>
          <button>15%</button>
          <button>25%</button>
          <button>50%</button>
          <input type="number" name="custom" id="custom" />
        </div>
        <div>
          <label htmlFor="people">Number of People</label>
          <input type="number" name="people" id="people" />
        </div>
      </div>
      <div>
        <div>
          <div>
            <h2>Tip Amount</h2>
            <p>/ person</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tipper;
