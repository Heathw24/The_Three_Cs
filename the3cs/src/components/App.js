import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../styling/App.css';

// import 'react-calendar/dist/Calendar.css';


function App(props) {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <h1>Welcome {props.user.username} </h1>
       <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default App;
