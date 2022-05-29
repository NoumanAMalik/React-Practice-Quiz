import React, { useState, useEffect } from "react";
import { decode } from "html-entities";
import { nanoid } from "nanoid";

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [questionElements, setQuestionElements] = useState([]);

    useEffect(() => {
        fetch(
            "https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple"
        )
            .then((res) => res.json())
            .then((data) => setQuestions(data.results));
    }, []);

    useEffect(() => {
        setQuestionElements((prevState) => {
            return questions.map((q) => {
                const answers = [];
                answers.push(...q.incorrect_answers);
                answers.push(q.correct_answer);
                console.log(answers);
                return (
                    <div key={nanoid()}>
                        <p className="font-mono text-[#293264] font-bold text-base">
                            {decode(q.question)}
                        </p>
                        <div className="flex flex-row justify-between">
                            {answers.map((ans) => (
                                <button className="font-mono font-medium text-xs text-[#293264] border-[1px] border-[#4D5B9E] rounded-lg p-2">
                                    {decode(ans)}
                                </button>
                            ))}
                        </div>
                    </div>
                );
            });
        });
    }, [questions]);

    return (
        <main className="w-[550px] h-fit min-h-[550px] flex flex-col items-start justify-center bg-[#F5F7FB] rounded-lg px-16 py-8 divide-y divide=[#DBDEF0]">
            {questionElements}
        </main>
    );
};

export { Quiz as default };
