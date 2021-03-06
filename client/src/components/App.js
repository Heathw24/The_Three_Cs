import React, { Component, useState } from 'react';
import Calendar from 'react-calendar';
import '../styling/App.css';
import { Container } from './Container';
import axios from 'axios';

// import 'react-calendar/dist/Calendar.css';

function App(props) {

  
  // const calcTotal =() => {
  // var totalBudget = props.user.totalBudget

  //     for (var i=0; i < props.user.events.length; i++){
  //         totalBudget = totalBudget + props.user.events[i].transaction;
  //     };
      
  //     this.setState({ totalBudget: totalBudget})
  // };


  const triggerText = 'Open Form';
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.transaction.value);
    axios({
              method: "put",
              data: {
                  name: event.target.name.value,
                  transaction: event.target.transaction.value,
              },
              withCredentials: true,
              url: "/user/event",
          }).then(window.location.reload(false));
  };

  const toggleContainer = (value, event) => {
    console.log(event);
    console.log(value);

  }

  const [value, onChange] = useState(new Date());
  return (
    <div>
      <h1>Welcome {props.user.username} </h1>
      <h2>Your budget is {props.user.totalBudget} </h2>
      
      <Container triggerText={triggerText} onSubmit={onSubmit} />
       <Calendar
        onChange={onChange}
        value={value}
        onClickDay={toggleContainer}
      />
    </div>
  );
}

// function App() {
//   function tileContent({ date, view }) {
//     // Add class to tiles in month view only
//     if (view === 'month') {
//       // Check if a date React-Calendar wants to check is on the list of dates to add class to
//       if (datesToAddContentTo.find(dDate => isSameDay(dDate, date))) {
//         return 'My content';
//       }
//     }
//   }
//   }
//   function MyApp() {
//     const [value, setValue] = useState(new Date());
//     const [textshown, settextshown] = useState(false);
//     function opentextbox(date) {
//      settextshown(true)
//     }
//     const [recipeSearch, setRecipeSearch] = useState("");
//   const handleInputChange = event => {
//     const { value } = event.target;
//   setRecipeSearch(value);
// }; 
// const handleFormSubmit = event => {
// };
// <Input
// name="Enter $"
// value={recipeSearch}
// onChange={handleInputChange}
// placeholder="Daily income"
// />
//     return (
//       <div>
//       <Calendar
//      onclickday= {opentextbox}
//         onChange={onChange}
//         value={date}
//         tileContent={tileContent}
      
//     />
//     {textshown&&<input></input>}
    
//     </div>
//     );
//   }

export default App;
