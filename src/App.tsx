import React, { useEffect } from 'react';
import axios from "axios";

function App() {

  const getEvents = async () => {
    try {
      const response = await axios.get(
        "https://customer-events.herokuapp.com"
      );
      console.log(response.data);
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getEvents()
  }, [])
  

  return (
    <div >
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}

export default App;
