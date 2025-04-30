import { useState } from "react";
import main from "../config/gemini";
import { Context } from "./ContextStore";

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setprevPrompt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index,nextWord) => {
        setTimeout(function() {
            setResultData((prev) => prev + nextWord);
        }, 75*index);
    }

    const onSent = async () => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input);
        const response = await main(input);
        let responseArray = response.split("**");
        let newResponse ;
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i%2 !== 1) {
                newResponse += responseArray[i];
            }
            else{
                newResponse += "<b>"+responseArray[i]+"</b>";
            }
            
        }
        let newResponse2 = newResponse.split("*").join("<br/>");
        let newResponseArray = newResponse2.split(" ");
        for (let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i];
            delayPara(i,nextWord+" ");
            
        }
        setLoading(false); 
        setInput("");
    }


    const contextValue = {
        prevPrompts,
        setprevPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
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

export default ContextProvider;