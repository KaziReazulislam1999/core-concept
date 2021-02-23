import logo from "./logo.svg";
import "./App.css";

function App() {
  const friends = ['korim','jamal','nojju', 'kooka','kobooo']
  const foods = ['AluVorta','Dalvaji','DimVuna','DimShutki','MurgiVorta']
  const experience = ['1 Years','3 Years','5 Years','6 Years','2 Years']

  return (
    <div className='App'>
      <header className='App-header'>
        {/* <img src={logo} className='App-logo' alt='logo' /> */}
        <p>
          I am a REACT Person.
        </p>

        <Person name={friends[0]} foods={foods[0]} experience={experience[0]}></Person>
        <Person name={friends[1]} foods={foods[1]} experience={experience[1]}></Person>
        <Person name={friends[2]} foods={foods[2]} experience={experience[2]}></Person>
        <Person name={friends[3]} foods={foods[3]} experience={experience[3]}></Person>
      </header>
    </div>
  );
}

function Person(props){
  return (
    <div style={{border:'2px solid red', width:'600px', backgroundColor:'red',borderRadius:'20px' ,margin:'20px'}}>
      <h1>My Name Is : {props.name} </h1>
      <h3>Favourate Foods : {props.foods}</h3>
      <p>Experince In Food Design Section : {props.experience}</p>
    </div>
  )
}


export default App;

