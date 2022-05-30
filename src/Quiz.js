import React, { useState, useEffect } from "react";
import { decode } from "html-entities";
import { nanoid } from "nanoid";
import Question from "./Question";

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        fetch(
            "https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple"
        )
            .then((res) => res.json())
            .then((data) => {
                setQuestions(
                    data.results.map((q) => {
                        return {
                            question: decode(q.question),
                            correct_answer: decode(q.correct_answer),
                            incorrect_answers: decode(q.incorrect_answers),
                            selected_answer: "",
                        };
                    })
                );
            });
    }, []);

    console.log(questions);

    const questionElements = questions.map((question) => (
        <Question
            key={nanoid()}
            {...question}
            changeSelected={setQuestions}
            submitted={submitted}
            changeSubmitted={setSubmitted}
        />
    ));

    const handleSubmission = (event) => {
        event.preventDefault();
        setSubmitted((prevState) => !prevState);
        console.log(event.target);
        if (event.target.textContent === "Play again") {
            window.location.reload();
        }
    };

    return (
        <main className="w-[550px] h-fit min-h-[550px] flex flex-col items-start justify-center bg-[#F5F7FB] rounded-lg px-16 py-12 divide-y divide=[#DBDEF0]">
            {questionElements}
            <button
                onClick={handleSubmission}
                className="text-white font-semibold text-xs bg-[#4D5B9E] rounded-xl p-4"
            >
                {submitted ? "Play again" : "Check Answers"}
            </button>
        </main>
    );
};

export { Quiz as default };
