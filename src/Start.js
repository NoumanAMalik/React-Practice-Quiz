import React from "react";

const Start = (props) => {
    return (
        <main className="w-[550px] h-[550px] flex flex-col items-center justify-center bg-[#F5F7FB] rounded-lg gap-6">
            <h1 className="font-mono font-bold text-[#293264] text-3xl ">
                Quizzical
            </h1>
            <h3 className="font-mono text-[#293264] text-base">
                A Simple 5 Question Quiz about Computers Science
            </h3>
            <button
                onClick={props.handleClick}
                className="w-48 h-14 text-[#F5F7FB] bg-[#4D5B9E] rounded-2xl"
            >
                Start Quiz
            </button>
        </main>
    );
};

export { Start as default };
