import logo from "./logo.svg";
import "./App.css";

function App() {
  let person = {
    name: "Reazul",
    profession: "Developer",
    age: 21,
  };

  let style = {
    backgroundColor: "green",
    color: "Red",
    padding: 5,
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit KORO <code>src/App.js</code> and save to reload.
        </p>
        <h2 style={{ backgroundColor: "orange", color: "#fff", padding: 10 }}>
          My Name is {person.name} Islam{" "}
        </h2>
        <p style={style}>I am a {person.profession}</p>
        <p>I am {person.age} Years Old</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
