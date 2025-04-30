import { useState } from "react";
import main from "../config/gemini";
import { Context } from "./ContextStore";

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setprevPrompt] = useState([]);
    const [showResult] = useState(false);
    const [loading] = useState(false);
    const [resultData] = useState("");


    const onSent = async (prompt) => {
        await main(prompt)
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