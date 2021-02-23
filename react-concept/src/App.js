import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit KORO <code>src/App.js</code> and save to reload.
        </p>

        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>

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

function Person() {
 let personStyle={
  border:'2px solid green',
  backgroundColor:'red' ,
  borderRadius:'20px'

 }

  return ( <div style={personStyle}>
    <h1>Name : Shakib Al Hasan</h1>
    <h3>Bangladesher Pran</h3>
  </div>)

}

export default App;
