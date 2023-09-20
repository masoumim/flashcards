"use client";
// page.js - This file establishes the route segment /quizzes/[quiz] and renders a quiz component

import Cards from "@/app/redux/features/cards/cards.js";
import { getCardList } from "@/app/utilities";
import { getQuizName } from "@/app/utilities";

export default function Quiz({params}) {
    // note: params.quiz = quizId

    // Get list of cards for this quiz
    const cardList = getCardList(params.quiz);

    // Get this quiz's name
    const quizName = getQuizName(params.quiz);
    
    return (
        <>
            <h1>{quizName}</h1>            
        </>
    )
}