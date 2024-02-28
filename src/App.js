import { useState } from "react";
function App() {
  const [bill, setbill] = useState([{ tipavg: 0, addedval: 0 }]);

  function setstates(seeter) {
    setbill(seeter);
  }
  console.log("testt", bill);

  function proprecv(passupper) {
    const feedbackPercentage = parseFloat(passupper.feedback); // Parse string to float
    const feedbacksPercentage = parseFloat(passupper.feedbacks); // Parse string to float
    const addedval = parseFloat(passupper.value); // Parse string to float
    const final = (feedbackPercentage + feedbacksPercentage) / 2; // Calculate average
    const tipavg = (final / 100) * addedval;
    if (addedval <= 0 && tipavg <= 0) return;

    const sendstate = { tipavg, addedval };
    setstates(sendstate);
  }

  return (
    <div>
      <Form onPassupper={proprecv} />
    </div>
  );

  function Form({ onPassupper }) {
    const [value, setvalue] = useState(0);
    const [feedback, setfeedback] = useState(0);
    const [feedbacks, setfeedbacks] = useState(0);
    const passupper = { value, feedback, feedbacks };
    onPassupper(passupper);
    return (
      <div>
        <div>
          <div>
            <form className="table">
              <p>How much was the bill?</p>
              <input
                value={value}
                onChange={(e) => setvalue(e.target.value)}
                type="number"
                id="myNumberInput"
                className="no-spinner"
              />
            </form>
          </div>

          <div>
            <form className="table">
              <p>How did you like the service?</p>
              <select
                value={feedback}
                onChange={(e) => setfeedback(e.target.value)}
              >
                <option value="0">Dissatisfied (0%)</option>
                <option value="5">it was okay (5%)</option>
                <option value="10">it was good (10%)</option>
                <option value="20">Absolutely amazing! (20%)</option>
              </select>
            </form>
          </div>

          <div>
            <form className="table">
              <p>How did your friend like the service?</p>
              <select
                value={feedbacks}
                onChange={(e) => setfeedbacks(e.target.value)}
              >
                <option value="0">Dissatisfied (0%)</option>
                <option value="5">it was okay (5%)</option>
                <option value="10">it was good (10%)</option>
                <option value="20">Absolutely amazing! (20%)</option>
              </select>
            </form>
          </div>
        </div>
        <div>
          <Display valuess={value} />
        </div>
      </div>
    );
  }
  function Display({ valuess }) {
    return (
      <div>
        <p>You pay (${valuess} + tip)</p>
      </div>
    );
  }
}

export default App;
