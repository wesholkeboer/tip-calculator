import "./Tipper.css";

const Tipper = () => {
  return (
    <div className="Tipper">
      <div>
        <label htmlFor="bill">Bill</label>
        <input type="number" name="bill" id="bill" />
      </div>
      <div>
        <label htmlFor="people">Number of People</label>
        <input type="number" name="people" id="people" />
      </div>
    </div>
  );
};

export default Tipper;
