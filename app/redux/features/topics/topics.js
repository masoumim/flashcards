// topics.js - This file has 3 main purposes. 
// 1. It renders the JSX for the component 
// 2. It dispatches 'Action Creators' to update the store
// 3. It uses useSelector() to retrieve data from the store and display it

import React from "react";
import { useSelector, useDispatch } from 'react-redux'
// TODO: Import Action Creators from topicSlice.js


export function Topics(){    
    //  We can read data from the store with useSelector
    const count = useSelector();

    // useDispatch allows us to send or dispatch an action to the redux store
    const dispatch = useDispatch()

    // return(
    //     JSX GOES HERE:
    // ForEach over every topic in the state and create a link to that topic's quizzes for each topic
    // Create button to link to topics/
    // )
}