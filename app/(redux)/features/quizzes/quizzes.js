// quizzes.js - This file gets the list of quizzes from the store's state via the useSelector() hook
// It then iterates over them, creating a link to each quiz.

import React from "react";
import Link from "next/link";
import { useSelector } from 'react-redux'
import { selectQuizzes } from "./quizzesSlice";

export default function Quizzes() {
    // Get the quizzes Object
    const quizzes = useSelector(selectQuizzes);    
    
    // Get an array of each individual quiz Object
    const quizzesList = Object.values(quizzes.quizzes);
    
    // Render / display each of the Quizzes
    // TODO: Clicking quiz name will take you to that quiz
    return (
        <>  
            {quizzesList.map((quiz) => {
                return <p key={quiz.quizId}>{quiz.quizName}</p>
            })}
            <Link href={"/quizzes/add-quiz"}>Create New Quiz</Link>
        </>
    )
}