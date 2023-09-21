// cards.js - This file renders the 'cards' component.
// Each card is displayed individually, when the card is clicked, the "back" / answer text is displayed
// Navigation arrows are used to the next or previous card in the list

import { getCardsForQuiz } from "@/app/utilities"
import { useEffect, useState } from "react";

export default function Cards({ cardIdList }) {

    // Get the cards belonging to this quiz
    const quizCards = getCardsForQuiz(cardIdList);

    // State variable to track position in the quizCards array
    const [cardIndex, setCardIndex] = useState(0);

    // State variable to store the current card using the cardIndex.
    // Initialized to the first card in the quizCards array.
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
        // If already at the first card, go to last card
        if(cardIndex === 0){
            setCardIndex(quizCards.length - 1)
        }
        else{
            setCardIndex(cardIndex - 1);
        }
    }

    // Display next card
    function handleNextCard() {
        // If already at the last card, go to first card
        if(cardIndex === quizCards.length - 1){
            setCardIndex(0);
        }
        else{
            setCardIndex(cardIndex + 1);
        }
        
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


