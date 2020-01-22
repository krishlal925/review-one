import React, {useState} from 'react';


function App() {


const [red, changeRed] = useState(0)
const [blue, changeBlue] = useState(0)
const [green, changeGreen] = useState(0)


  return (
    <main >
      <div className="sliders">
        Red <input type= 'range' min= '0' max= '255' step= '1' value = {red} name= "red" onChange={ (ev)=> changeRed(ev.target.value) }/>
        Green <input type= 'range' min= '0' max= '255' step= '1' value = {green} name= "green" onChange={ (ev)=> changeGreen(ev.target.value)}/>
        Blue  <input type= 'range' min= '0' max= '255' step= '1' value = {blue} name= "blue" onChange={ (ev)=> changeBlue(ev.target.value)}/>
      </div>
      <div className= "swatch" style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})`}}>

      </div>
    </main>
  );
}

export default App;
