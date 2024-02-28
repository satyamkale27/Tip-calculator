function App() {
  return (
    <div>
      <Form />
    </div>
  );

  function Form() {
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
              <input type="text"></input>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
