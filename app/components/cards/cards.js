// cards.js - This file renders the 'cards' component.
// Each card is displayed individually, when the card is clicked, the "back" / answer text is displayed
// Navigation arrows are used to the next or previous card in the list

import { getCardsForQuiz } from "@/app/utilities"
import { useEffect, useState } from "react";

export default function Cards({ cardIdList, quizName }) {

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
        if (cardIndex === 0) {
            setCardIndex(quizCards.length - 1)
        }
        else {
            setCardIndex(cardIndex - 1);
        }
    }

    // Display next card
    function handleNextCard() {
        // If already at the last card, go to first card
        if (cardIndex === quizCards.length - 1) {
            setCardIndex(0);
        }
        else {
            setCardIndex(cardIndex + 1);
        }

    }
    return (
        <>
            {/* TODO: MAKE DIV A FIXED WIDTH (w-[600px] or w-[600rem] for example) */}
            {/* 
            TODO: Set max width to match the fixed with and then see if long sentences break correctly using 'break-words'
            without causing the element to increase in size            
            */}
            <div className="flex flex-col items-center bg-purple-100 w-fit mx-auto mt-16 gap-4 drop-shadow-lg">
                <p className="text-3xl text-purple-800 font-bold my-10">{quizName}</p>
                <div onClick={handleCardClick}>
                    <p className="text-center text-4xl break-words">{currentCard}</p>
                </div>
                <div className="mb-10 mt-10">
                    <button className="mr-52 ml-10 rounded-2xl p-3 text-purple-200 bg-purple-800 font-bold hover:bg-purple-600 hover:text-white transition ease-in duration-300" onClick={handlePreviousCard}>Previous Card</button>
                    <button className="ml-52 mr-10 rounded-2xl p-3 text-purple-200 bg-purple-800 font-bold hover:bg-purple-600 hover:text-white transition ease-in duration-300" onClick={handleNextCard}>Next Card</button>
                </div>
            </div>
        </>
    )
}


