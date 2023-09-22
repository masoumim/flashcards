"use client";
// quizzes/add-quiz/page.js - This file establishes the route segment '/quizzes/add-quiz'
// The JSX contains a form which when submitted, will create a new quiz and update the 
// store's state accordingly using the 'useDispatch' hook.

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuiz } from "@/app/redux/features/quizzes/quizzesSlice";
import { removeNewCard, selectNewCards, addNewCard, addQuizCard } from "@/app/redux/features/cards/cardsSlice";
import NewCardForm from "@/app/components/cards/newCardForm";
import { getTopics, getQuizzes } from "@/app/utilities";
import { v4 as uuidv4 } from 'uuid'; // create a unique id

export default function AddQuizPage() {
    // store hook in variable so it can be used in the body of
    // functions other than Component Functions
    const dispatch = useDispatch();

    // State variable to store user input for new Quiz name
    const [quizName, setQuizName] = useState("");

    // State variable to store the feedback message
    const [feedBackMsg, setFeedBackMsg] = useState("");

    // Get an array of each individual topic Object
    const topics = getTopics();

    // Get the new cards from the newCards Object in the Card Slice
    const newCards = useSelector(selectNewCards);

    // Get an array of each individual new card Object
    const newCardsList = Object.values(newCards);

    // Get a list of all Quizzes
    const quizzes = getQuizzes();

    // Submit Handler - uses the useDispatch hook to call the Action Creator 'addQuiz'    
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if quiz already exists               
        const quizExists = quizzes.some((quiz) => quiz.quizName === quizName);
        if (quizExists) {
            setFeedBackMsg("Sorry, that quiz already exists!");
        }
        else if(newCardsList.length === 0){
            setFeedBackMsg("Quiz must have at least 1 flashcard");
        }
        else {
            // Variable used for getting Questions / Answers
            // e.currentTarget[2], e.currentTarget[3] are the first Q/A
            let currentTargetIndex = 2;

            // Create array of card ID's for the New Quiz
            const newQuizCardIds = newCardsList.map((newCard) => {

                // Get the new card's id
                const newCardId = newCard.cardId;

                // Add a Quiz Card to the quizCards object in the Card Slice
                dispatch(addQuizCard({
                    cardId: newCardId,
                    front: e.currentTarget[currentTargetIndex].value,
                    back: e.currentTarget[++currentTargetIndex].value
                }));

                // Increment currentTargetIndex by 2 to account for the 'Remove Card' button for each card
                currentTargetIndex += 2;

                // Remove the newCard from the newCards object in the Card Slice
                dispatch(removeNewCard(newCard));

                // return the new card ID to the array
                return newCardId;
            });

            // Create the Quiz using the new card Ids
            // e.currentTarget[1] is the <select> element and the value of the selected <option> is the topicId
            dispatch(addQuiz({
                quizId: uuidv4(),
                quizName: quizName,
                topicId: e.currentTarget[1].value,
                cardsIds: newQuizCardIds
            }));

            // Clear the input field
            setQuizName("");

            // Reset the Select element's option
            e.currentTarget[1].value = "";

            // Set the feedback msg
            setFeedBackMsg(`${quizName} quiz created!`);
        }
    }

    // Add a new card
    const handleAddNewCard = (e) => {
        e.preventDefault();
        dispatch(addNewCard({
            cardId: uuidv4(),
            front: "",
            back: ""
        }));
    }

    return (
        <>
            <form id="addNewQuiz" onSubmit={handleSubmit}>
                <label htmlFor="quiz">Quiz Name</label>
                <input type="text" id="quiz-name" name="quiz-name" value={quizName} onChange={(e) => setQuizName(e.currentTarget.value)} required />
                {/* <select> drop-down element is populated with Topics */}
                <select id="topics" required>
                    <option value={""}>{"Select a Topic"}</option>
                    {topics.map((topic, index) => {
                        return (<option key={index} value={topic.topicId}>{topic.topicName}</option>);
                    })}
                </select>
                <br />
                {/* List of new cards for this quiz */}
                {newCardsList.map((card) => {
                    return <NewCardForm key={card.cardId} card={card} />
                })}
                <br />
                <button onClick={handleAddNewCard} type="button">Add Card</button>
                <button>Create Quiz</button>
                <p className="font-bold">{feedBackMsg}</p>
            </form>
        </>
    )
}