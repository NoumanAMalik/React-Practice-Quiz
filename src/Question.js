import { nanoid } from "nanoid";
import React from "react";

const Question = (props) => {
    const answerArray = [];
    answerArray.push(...props.incorrect_answers);
    answerArray.push(props.correct_answer);

    const handleClick = (event) => {
        props.changeSelected((prevState) => {
            return prevState.map((q) => {
                if (q.question === props.question) {
                    return {
                        ...q,
                        selected_answer: event.target.textContent,
                    };
                } else {
                    return q;
                }
            });
        });
    };

    let backgroundColor = "#F5F7FB";

    if (props.submitted) {
        if (props.selected_answer === props.correct_answer) {
            backgroundColor = "#94D7A2";
        } else if (props.selected_answer !== props.correct_answer) {
            backgroundColor = "#F8BCBC";
        }
    } else {
        backgroundColor = "#D6DBF5";
    }

    const answerElements = answerArray.map((item) => {
        return (
            <button
                key={nanoid()}
                className="font-mono font-medium text-xs text-[#293264] border-[1px] border-[#4D5B9E] rounded-lg p-2"
                style={{
                    backgroundColor:
                        props.selected_answer === item
                            ? backgroundColor
                            : "#F5F7FB",
                    border: props.selected_answer === item && "none",
                }}
                onClick={handleClick}
            >
                {item}
            </button>
        );
    });

    return (
        <div>
            <p className="font-mono text-[#293264] font-bold text-base">
                {props.question}
            </p>
            <div className="flex flex-row justify-between">
                {answerElements}
            </div>
        </div>
    );
};

export { Question as default };
