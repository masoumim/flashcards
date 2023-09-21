// page.js - This file simply redirects the user to the /quizzes/add-quiz route.
// The route for this file, /new-quiz, is linked to a nav bar menu item 'New Quiz'.
// It is simply just another route or shortcut to the /quizzes/add-quiz route.

import {redirect} from 'next/navigation';

// new-quiz/page.js - This file establishes the route segment '/new-quiz' and renders the JSX below
export default function NewQuiz() {
    redirect('/quizzes/add-quiz');
}