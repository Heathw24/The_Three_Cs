import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../styling/App.css';

// import 'react-calendar/dist/Calendar.css';


function App() {
  function tileContent({ date, view }) {
    // Add class to tiles in month view only
    if (view === 'month') {
      // Check if a date React-Calendar wants to check is on the list of dates to add class to
      if (datesToAddContentTo.find(dDate => isSameDay(dDate, date))) {
        return 'My content';
      }
    }
  }
  }
  function MyApp() {
    const [value, setValue] = useState(new Date());
    const [textshown, settextshown] = useState(false);
    function opentextbox(date) {
     settextshown(true)
    }
    const [recipeSearch, setRecipeSearch] = useState("");

  const handleInputChange = event => {
    const { value } = event.target;
  setRecipeSearch(value);
}; 
const handleFormSubmit = event => {
};
<Input
name="Enter $"
value={recipeSearch}
onChange={handleInputChange}
placeholder="Daily income"
/>
  






    return (
      <>
      <Calendar
     onclickday= {opentextbox}
        onChange={onChange}
        value={date}
        tileContent={tileContent}
      
    />
    {textshown&&<input></input>}
    
    </>
    );
  }

export default App;
