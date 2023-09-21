// newCardForm.js - This file creates and renders a form for a new card

import { useDispatch } from "react-redux";
import { removeNewCard } from "@/app/redux/features/cards/cardsSlice.js"

export default function NewCardForm({ card }) {

    // store hook in variable so it can be used in the body of
    // functions other than Component Functions
    const dispatch = useDispatch();

    function handleRemoveCard() {
        dispatch(removeNewCard(card));
    }

    return (
        <>
            <label htmlFor="question">Question</label>
            <input type="text" name="question" id="question" required/>
            <label htmlFor="answer">Answer</label>
            <input type="text" name="answer" id="answer" required/>
            <button onClick={handleRemoveCard}>Remove Card</button>
        </>
    );
}