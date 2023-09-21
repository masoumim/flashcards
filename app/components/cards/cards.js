// cards.js - This file renders the 'cards' component.
// Each card is displayed individually, when the card is clicked, the "back" / answer text is displayed
// Navigation arrows are used to the next or previous card in the list

import { getCardsForQuiz } from "@/app/utilities"
import { useEffect, useState } from "react";

export default function Cards({ cardIdList }) {

    // Get the cards belonging to this quiz
    const quizCards = getCardsForQuiz(cardIdList);

    const [cardIndex, setCardIndex] = useState(0);

    const [currentCard, setCurrentCard] = useState(quizCards[cardIndex].front);

    // Update the current card when the cardIndex state is changed
    useEffect(() => {
        setCurrentCard(quizCards[cardIndex].front)
    }, [cardIndex])

    // Reveal the answer on the 'back' of the card
    function handleCardClick() {
        setCurrentCard(quizCards[cardIndex].back);
    }

    // Display previous card
    function handlePreviousCard() {
        setCardIndex(cardIndex - 1);
    }

    // Display next card
    function handleNextCard() {
        setCardIndex(cardIndex + 1);
    }
    return (
        <>
            <p>Cards:</p>
            <div onClick={handleCardClick} className="quiz-card">
                <p>{currentCard}</p>
            </div>
            <div className="card-navigation">
                <button onClick={handlePreviousCard}>Previous Card</button>
                <button onClick={handleNextCard}>Next Card</button>
            </div>
        </>
    )
}


