"use client";
// page.js - This file establishes the route segment /quizzes/[quiz] and renders a quiz component

import Cards from "@/app/components/cards/cards.js";
import { getCardIdList } from "@/app/utilities";
import { getQuizName } from "@/app/utilities";

export default function Quiz({ params }) {
    // note: params.quiz = quizId

    // Get list of cardId's for this quiz
    const cardIdList = getCardIdList(params.quiz);

    // Get this quiz's name
    const quizName = getQuizName(params.quiz);

    // Check if quiz exists
    if (cardIdList === undefined || quizName === undefined) {
        return (<p>Sorry, that quiz doesn't exist!</p>);
    }

    return (
        <>
            <Cards cardIdList={cardIdList} quizName={quizName} />
        </>
    )
}