import React, { useState } from "react";
import Start from "./Start";
import Quiz from "./Quiz";

const App = () => {
    const [startScreen, setStartScreen] = useState(true);

    const changeScreen = () => {
        setStartScreen((prevState) => !prevState);
    };

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-[#1C1C1C]">
            {startScreen ? <Start handleClick={changeScreen} /> : <Quiz />}
        </div>
    );
};

export { App as default };
