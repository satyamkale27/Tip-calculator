import { useState } from "react";
function App() {
  const [bill, setbill] = useState("");

  return (
    <div>
      <Form />
    </div>
  );

  function Form() {
    const [feedback, setfeedback] = useState("");
    const [feedbacks, setfeedbacks] = useState("");
    return (
      <div>
        <div>
          <div>
            <form className="table">
              <p>How much was the bill?</p>
              <input type="text"></input>
            </form>
          </div>

          <div>
            <form className="table">
              <p>How did you like the service?</p>
              <select>
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
              <select>
                <option value="dissatisfiedt">Dissatisfied (0%)</option>
                <option value="okayt">it was okay (5%)</option>
                <option value="goodt">it was good (10%)</option>
                <option value="amazingt">Absolutely amazing! (20%)</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
