// cards.js - This file renders a 'cards' component. For each card in a list, an individual 'card' component is rendered

import { getCardsForQuiz } from "@/app/utilities"

export default function Cards({cardIdList}) {
    
    // Get the cards belonging to this quiz
    const quizCards = getCardsForQuiz(cardIdList);

    
    
    return (
        <>
            <p>Hello</p>
        </>
    )
}


