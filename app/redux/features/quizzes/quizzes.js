// quizzes.js - This file gets the list of quizzes from the store's state via the useSelector() hook
// It then iterates over them, creating a link to each quiz.

import React from "react";
import Link from "next/link";
import { getQuizzes } from "@/app/utilities";

export default function Quizzes() {
    // Get a list of all quizzes
    const quizzesList = getQuizzes();
    
    // Render / display each of the Quizzes    
    return (
        <>  
            {quizzesList.map((quiz) => {                
                return <Link href={`/quizzes/${quiz.quizId}`} key={quiz.quizId}>{quiz.quizName}</Link>
            })}
            <br/>
            <Link href={"/quizzes/add-quiz"}>Create New Quiz</Link>
        </>
    )
}