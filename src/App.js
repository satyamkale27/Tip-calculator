import { useState } from "react";
function App() {
  const [bill, setbill] = useState([]);

  function proprecv(passupper) {
    console.log(passupper);
  }

  return (
    <div>
      <Form onPassupper={proprecv} />
    </div>
  );

  function Form({ onPassupper }) {
    const [value, setvalue] = useState(0);
    const [feedback, setfeedback] = useState("");
    const [feedbacks, setfeedbacks] = useState("");
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
                <option value="dissatisfied">Dissatisfied (0%)</option>
                <option value="okay">it was okay (5%)</option>
                <option value="good">it was good (10%)</option>
                <option value="amazing">Absolutely amazing! (20%)</option>
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
                <option value="dissatisfiedt">Dissatisfied (0%)</option>
                <option value="okayt">it was okay (5%)</option>
                <option value="goodt">it was good (10%)</option>
                <option value="amazingt">Absolutely amazing! (20%)</option>
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
        <p>
          You pay {valuess} (${valuess} + tip)
        </p>
      </div>
    );
  }
}

export default App;
