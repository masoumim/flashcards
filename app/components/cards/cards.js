// cards.js - This file renders the 'cards' component.
// Each card is displayed individually, when the card is clicked, the "back" / answer text is displayed
// Navigation arrows are used to the next or previous card in the list

import { getCardsForQuiz } from "@/app/utilities"
import { useEffect, useState } from "react";

export default function Cards({ cardIdList, quizName }) {

    // Get the cards belonging to this quiz
    // const quizCards = getCardsForQuiz(cardIdList);
    const[quizCards] = useState(getCardsForQuiz(cardIdList));

    // State variable to track position in the quizCards array
    const [cardIndex, setCardIndex] = useState(0);

    // State variable to track the current question card out of the total number of cards
    const [cardCount, setCardCount] = useState(1);

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

    // Display next card
    function handleNextCard() {
        
        // If already at the last card, go to first card
        if (cardIndex === quizCards.length - 1) {
            setCardIndex(0);
            setCardCount(1);
        }
        else {
            setCardIndex(cardIndex + 1);
            setCardCount(cardCount + 1);
        }
        console.log(quizCards);
    }

    // Display previous card
    function handlePreviousCard() {
        
        // If already at the first card, go to last card
        if (cardIndex === 0) {
            setCardIndex(quizCards.length - 1);
            setCardCount(quizCards.length);
        }
        else {
            setCardIndex(cardIndex - 1);
            setCardCount(cardCount - 1);
        }
        console.log(quizCards);
    }

    // Shuffle / Randomize the array of cards (Fisher-Yates (aka Knuth) Shuffle)
    function shuffle() {
        let currentIndex = quizCards.length;
        let randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex > 0) {
            
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [quizCards[currentIndex], quizCards[randomIndex]] = [quizCards[randomIndex], quizCards[currentIndex]];
        }
        setCardIndex(0);
        setCardCount(1);
        setCurrentCard(quizCards[cardIndex].front);
    }

    return (
        <>
            <div className="flex flex-col items-center mb-10 mt-16 w-fit mx-auto p-10 border-4 rounded-2xl border-solid border-purple-800 bg-purple-200">
                {/* Quiz Name */}
                <p className="text-3xl text-purple-800 font-bold mt-1 mb-10">{quizName}</p>
                {/* Card */}
                <div onClick={handleCardClick} className="flex flex-col justify-center w-[40rem] h-[20rem] bg-purple-100 mx-auto max-w[40rem] max-h[20rem] border-2 border-solid border-purple-300 break-words">
                    {/* Card Counter */}
                    <p className="absolute mb-[16rem] ml-3 text-center text-lg bg-orange-500 w-24 rounded-2xl px-3 font-bold text-orange-100">Q: {cardCount} / {quizCards.length}</p>
                    {/* Card Text */}
                    <p className="text-center text-3xl text-orange-500 font-bold mx-4">{currentCard}</p>
                </div>
                {/* Nav Buttons */}
                <div className="mb-10 mt-10">
                    <button className="mr-48 rounded-2xl p-3 text-purple-200 bg-purple-800 font-bold hover:bg-purple-600 hover:text-white transition ease-in duration-300" onClick={handlePreviousCard}>Previous Card</button>
                    <button className="ml-48 rounded-2xl p-3 text-purple-200 bg-purple-800 font-bold hover:bg-purple-600 hover:text-white transition ease-in duration-300" onClick={handleNextCard}>Next Card</button>
                </div>
                <button className="mx-auto rounded-2xl p-3 text-purple-200 bg-purple-800 font-bold hover:bg-purple-600 hover:text-white transition ease-in duration-300" onClick={shuffle}>Shuffle</button>
            </div>
        </>
    )
}


