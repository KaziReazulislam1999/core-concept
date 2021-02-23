import logo from "./logo.svg";
import "./App.css";

function App() {
  const friends = ['korim','jamal','nojju', 'kooka','kobooo']
  const foods = ['AluVorta','Dalvaji','DimVuna','DimShutki','MurgiVorta']
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit KORO <code>src/App.js</code> and save to reload.
        </p>

        <Person name={friends[0]} age="21" food={foods[0]}></Person>
        <Person name={friends[1]} age="30" food= {foods[1]}></Person>
        <Person name={friends[2]} age="31" food={foods[2]}></Person>
        <Person name={friends[3]} age="32" food={foods[3]}></Person>
        <Person name={friends[4]} age="33" food={foods[4]}></Person>

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

function Person(props) {
 let personStyle={
  backgroundColor:'red' ,
  borderRadius:'20px',
  border:'none',
  padding:'20px',
  width:"400px",
  margin:'10px'

 }

  return ( <div style={personStyle}>
    <h1>Name : {props.name}</h1>
    <h3>Favorite Food {props.food}</h3>
  </div>)

}

export default App;
