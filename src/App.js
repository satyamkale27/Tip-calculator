import { useState } from "react";

function App() {
  const initialState = { tipavg: 0, addedval: 0 };
  const [bill, setBill] = useState(initialState);

  function setStates(newState) {
    setBill(newState);
  }
  function handleclear(e) {
    e.preventDefault();
    setBill(initialState);
    console.log("bill", bill);
  }

  function propRecv(passupper) {
    const feedbackPercentage = parseFloat(passupper.feedback);
    const feedbacksPercentage = parseFloat(passupper.feedbacks);
    const addedval = parseFloat(passupper.value);
    const final = (feedbackPercentage + feedbacksPercentage) / 2;
    const tipavg = (final / 100) * addedval;
    if (addedval <= 0 && tipavg <= 0) return;

    const sendState = { tipavg, addedval };
    setStates(sendState);
  }

  return (
    <div>
      <Form onPassupper={propRecv} bill={bill} handleclear={handleclear} />
    </div>
  );
}

function Form({ onPassupper, bill, handleclear }) {
  const [value, setValue] = useState(0);
  const [feedback, setFeedback] = useState(0);
  const [feedbacks, setFeedbacks] = useState(0);
  function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const passupper = { value, feedback, feedbacks };
    onPassupper(passupper); // Call the propRecv function with the form data
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="table">
          <p>How much was the bill?</p>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="number"
            id="myNumberInput"
            className="no-spinner"
          />
        </div>

        <div className="container">
          <p>How did you like the service?</p>
          <select
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          >
            <option value="0">Dissatisfied (0%)</option>
            <option value="5">It was okay (5%)</option>
            <option value="10">It was good (10%)</option>
            <option value="20">Absolutely amazing! (20%)</option>
          </select>
        </div>

        <div className="table">
          <p>How did your friend like the service?</p>

          <select
            value={feedbacks}
            onChange={(e) => setFeedbacks(e.target.value)}
          >
            <option value="0">Dissatisfied (0%)</option>
            <option value="5">It was okay (5%)</option>
            <option value="10">It was good (10%)</option>
            <option value="20">Absolutely amazing! (20%)</option>
          </select>
        </div>
        <div>
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </form>

      <div>
        <button className="style" onClick={handleclear}>
          clear
        </button>
      </div>

      <div>
        <Display valuess={value} bill={bill} />
      </div>
    </div>
  );
}

function Display({ valuess, bill }) {
  const billvalue = bill.addedval;
  const tips = bill.tipavg;
  const totalvalue = billvalue + tips;
  return (
    <div>
      <p>
        You pay ${totalvalue} (${valuess} + ${tips}tip)
      </p>
    </div>
  );
}

export default App;
