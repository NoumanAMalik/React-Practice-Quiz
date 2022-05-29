import React, { useState } from "react";
import Start from "./Start";

const App = () => {
    const [startScreen, setStartScreen] = useState(true);

    const changeScreen = () => {
        setStartScreen((prevState) => !prevState);
    };

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-[#1C1C1C]">
            {startScreen && <Start handleClick={changeScreen} />}
        </div>
    );
};

export { App as default };
