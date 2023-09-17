"use client";
// topics/page.js - This file establishes the route segment '/topics' and renders a list of topics and a button to create a new topic
import Topics from "../(redux)/features/topics/topics.js";
export default function TopicsPage() {
    return (
        <Topics />
    )
}