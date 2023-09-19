"use client";
// quizzes/page.js - This file establishes the route segment '/quizzes' and renders a list of quizzes and a link to create a new quiz
import Quizzes from "@/app/redux/features/quizzes/quizzes.js"
export default function QuizzesPage() {
    return (
        <Quizzes/>
    )
}