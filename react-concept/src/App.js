import logo from "./logo.svg";
import "./App.css";

function App() {

  const friends = ['korim','jamal','nojju', 'kooka','kobooo']
  const foods = ['AluVorta','Dalvaji','DimVuna','DimShutki','MurgiVorta']
  const experience = ['1 Years','3 Years','5 Years','6 Years','2 Years']

  const products = [
    {name:'Photoshop',price:'70.98$'},
    {name:'Illustrator',price:'40.98$'},
    {name:'PDF',price:'10.98$'}


]

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          I am a REACT Person.
        </p>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>

      

        <Person name={friends[0]} foods={foods[0]} experience={experience[0]}></Person>
        <Person name={friends[1]} foods={foods[1]} experience={experience[1]}></Person>
        <Person name={friends[2]} foods={foods[2]} experience={experience[2]}></Person>
        <Person name={friends[3]} foods={foods[3]} experience={experience[3]}></Person>


      </header>
    </div>
  );
}

function Product(props){
  
  const productStyle ={
    border:'2px solid red',
    borderRadius:'5px',
    backgroundColor:'gray',
    width:'300px',
    height:'300px',
    margin: '20px',
  }
  const {name, price} = props.product;
  
 return(
   <div style={productStyle}>
     
     <h2> {name}</h2>
     <p>{price}</p>
     <button>Buy Now </button>
   </div>
 )
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

