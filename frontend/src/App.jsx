const App = () => {
  const name = "Darwin";
  const x = 10;
  const y = 20;
  const names = ["Brad", "Mary", "Joe", "Sarah"];
  const loggedIn = false;
  const style = { color: "red", fontSize: "55px" };

  return (
    <>
      <div className="text-5xl ">
        <h1>App</h1>
      </div>
      <p style={style}>Hello {name}</p>
      <p>
        The sum of {x} and {y} is {x + y}
      </p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {loggedIn && <h1>Welcome {name}</h1>}
    </>
  );
};

export default App;
