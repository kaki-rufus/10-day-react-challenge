import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {

  const [text, setText] = useState(0)
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const subtract = () => {
    setText(num1 - num2)
  }

  const add = () => {
    setText(num1 + num2)
  }

  const multiply = () => {
    setText(num1 * num2)
  }

  const divide = () => {
    setText(num1 / num2)
  }

  return (
    <div className="App">

    <Navbar />

      <form action="" onSubmit={handleSubmit}>

        <div className='number'>
          <input type="number" value={num1} onChange={e => setNum1(+e.target.value)}/> 
          <input type="number" value={num2} onChange={e => setNum2(+e.target.value)}/>
        </div>
         

        <div className='buttons'>
          <p>
          <button onClick={subtract}>subtract</button> 
      
          <button onClick={add} className='add'>Add</button>
          </p>
          
     
          <button onClick={multiply}>multiply</button> 

          <button onClick={divide} className='add'>Divide</button>
        </div>
        <h1>{text}</h1>
      </form>
    </div>
  );
}

export default App;
