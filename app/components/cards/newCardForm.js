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
        <>  <div className="flex flex-col py-5 gap-3 items-center">
            <input className="text-center w-80 h-10" placeholder="enter question" type="text" name="question" id="question" required/>            
            <input className="text-center w-80 h-10" placeholder="enter answer" type="text" name="answer" id="answer" required/>
            <button className="w-fit rounded-2xl p-3 text-purple-200 bg-purple-800 font-bold hover:bg-purple-600 hover:text-white transition ease-in duration-300" onClick={handleRemoveCard}>Remove Card</button>
            </div>          
        </>
    );
}