import { useState } from 'react';
import './App.css';



const initColor = ["Violet", "Orange", "Green", "White"];
function App() {
  const [initVal, setinitVal] = useState(1);
      const [boxes, setBoxes] = useState([0, 0, 0, 0]);
  
    
    
    
      const initBox = () => {
      const newBoxes = initColor.map((_, i) => initVal * Math.pow(2, i));
      setBoxes(newBoxes);
      };
  
      const handleChoice = (choice) => {
      let newBoxes = [...boxes];
  
      if (choice === 1) {
          //doubling each box here
          newBoxes = newBoxes.map((count) => count * 2);
      } 
  
  
      else if (choice === 2) {
          //empty consecutive box and push to last box
          let total = 0;
          for (let i = 0; i < newBoxes.length - 1; i++) {
          total += newBoxes[i];
          newBoxes[i] = 0;
          }
          newBoxes[3] += total;
      } 
  
      else if (choice === 3) {
          //push odd to even index box
          for (let i = 0; i < newBoxes.length; i += 2) {
          if (i + 1 < newBoxes.length) {
              newBoxes[i] += newBoxes[i + 1];
              newBoxes[i + 1] = 0;
          }
          }
      }
  
      setBoxes(newBoxes);
    };
  
    return (
      <div style={{ padding: "20px" }}>
          <h1>Color Ball Box</h1>
  
          <label>
          Enter Initial Value:{" "}
          
          <input
              type="number"
              value={initVal}
              onChange={(e) => setinitVal(Number(e.target.value))}
          />
          </label>
          <button onClick={initBox}>Initialize Boxes</button>
  
          <div style={{ marginTop: "20px" }}>
          <button onClick={() => handleChoice(1)}>Choice 1: Double Balls</button>
          <button onClick={() => handleChoice(2)}>Choice 2: Push to Last</button>
          <button onClick={() => handleChoice(3)}>Choice 3: Odd to Even</button>
          </div>
  
          <div style={{ marginTop: "30px" }}>
          {boxes.map((count, i) => (
              <div key={i}>
              <strong>Box {String.fromCharCode(65 + i)} ({initColor[i]}):</strong> {count} balls
              </div>
          ))}
          </div>
      </div>
      );
}

export default App;
