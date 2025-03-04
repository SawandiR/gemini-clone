import { createContext, useState } from "react";
import run from "../config/gemini"
export const Context = createContext();

const ContextProvider = (props)=>{

    const [input,setInput]=useState("");
    const [recentPrompt,setRecentPromt] =useState("");
    const [prevPrompts,setPrevPrompts]=useState([]);
    const[showResults,setShowResult]=useState(false);
    const[loading,setLoading]=useState(false);
    const[resultData,setResultData]=useState("");



   const onSent =async (prompt) =>{
      await run(input)
   }
    const contextValue ={
    
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPromt,
        recentPrompt,
        showResults,
        loading,
        resultData,
        input,
        setInput,
        
    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider





















/*

import React, { createContext, useState } from "react";
import run from "../config/gemini";

// Create the context
export const Context = createContext();

const ContextProvider = (props) => {
  // State to manage the result from the API call
  const [response, setResponse] = useState(null);

  // Asynchronous function to send a prompt and handle the response
  const onSent = async (prompt) => {
    try {
      const result = await run(prompt); // Call the `run` function
      setResponse(result); // Store the result in state
      console.log("Response from API:", result);
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  // Context value to provide to consumers
  const contextValue = {
    response, // Share the response with consumers
    onSent, // Share the `onSent` function
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;*/
