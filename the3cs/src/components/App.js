import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../styling/App.css';

// import 'react-calendar/dist/Calendar.css';

// function App(props) {
//   const [value, onChange] = useState(new Date());
//   return (
//     <div>
//       <h1>Welcome {props.user.username} </h1>
//        <Calendar
//         onChange={onChange}
//         value={value}
//       />
//     </div>
//   );
// }

function App() {

  function showContent(){
    // TODO: add onClick to display date information
    return 'Hello';
  }

  function tileContent({ date, view }) {
    return showContent();
      }

      const [value, setValue] = useState(new Date());
  const [textshown, settextshown] = useState(false);
  function opentextbox(date) {
    settextshown(true)
  }
  const [recipeSearch, setRecipeSearch] = useState("");
  function onChange(nextValue){
    setValue(nextValue);
  }

  const handleInputChange = event => {
    const { value } = event.target;
    setRecipeSearch(value);
  }; 
  const handleFormSubmit = event => {
  };
  
  return (
    <div>
      <Calendar
        onclickday= {opentextbox}
        onChange={onChange}
        value={value}
        tileContent={tileContent}
      />
      {textshown&&<input 
        name="Enter $"
        value={recipeSearch}
        onChange={handleInputChange}
        placeholder="Daily income">
        </input>}
    </div>
  );
}

export default App;
