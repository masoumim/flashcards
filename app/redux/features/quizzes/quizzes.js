// quizzes.js - This file gets the list of quizzes from the store's state via the useSelector() hook
// It then iterates over them, creating a link to each quiz.

import React from "react";
import Link from "next/link";
import { getQuizzes } from "@/app/utilities";

export default function Quizzes() {
    // Get a list of all quizzes
    const quizzesList = getQuizzes();
    
    // Render / display each of the Quizzes
    // TODO: Clicking quiz name will take you to that quiz
    return (
        <>  
            {quizzesList.map((quiz) => {
                // TODO: MAKE EACH QUIZ NAME A LINK TO THAT QUIZ
                return <p key={quiz.quizId}>{quiz.quizName}</p>
            })}
            <Link href={"/quizzes/add-quiz"}>Create New Quiz</Link>
        </>
    )
}