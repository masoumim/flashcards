# Flashcards
A web app that lets you create flashcard quizzes and quiz topics

App Link: https://flashcards-hazel-mu.vercel.app/

# Project technical details:

**Language:** Node.js / JavaScript

**Framework:** [Next.js 13 App Router](https://nextjs.org)

**State Management:** [Redux](https://redux.js.org/)

**Styling:** [Tailwind CSS](https://nextjs.org/docs/app/building-your-application/styling/tailwind-css)

**Deployment platform:** [Vercel](https://vercel.com)


# Project info:
The web app allows you to create quizzes which are made up of custom flashcards. Quizzes are organized into different topics and subjects. The flashcards for a given quiz can also be shuffled to randomize their order.


# Redux
Redux allows for the management and centralization of state in React applications. The original 'vanilla' version of Redux requires a lot of complicated boilerplate code. Another drawback is that Reducers must [not mutate](https://redux.js.org/usage/structuring-reducers/immutable-update-patterns) state objects or arrays which leads to more verbose code as mutative functions such as push, unshift and splice are not permitted.

Thankfully, [Redux Toolkit](https://redux-toolkit.js.org/), which is now the standard way to implement Redux, solves these issues. RTK introduces the createReducer and createSlice methods which simplify the creation of Reducers and Slices. They automatically utilize a package called [Immer](https://immerjs.github.io/immer/) which [allows for mutative code](https://redux-toolkit.js.org/usage/immer-reducers).

In addition to RTK, [React Redux](https://react-redux.js.org/) (the official Redux UI binding library for React) also simplifies things by [handling the store interaction logic](https://react-redux.js.org/introduction/why-use-react-redux). The React Redux [Provider](https://react-redux.js.org/api/provider) component makes the Redux store available to any nested components that need access to the Redux store.

In this web app, I used the Provider component by wrapping it around my entire component hierarchy in the root [layout file](https://github.com/masoumim/flashcards/blob/main/app/layout.js). By doing this I was able to not only persist state between routes, but change and read state from any component.

# UUIDv4:
When [rendering lists](https://react.dev/learn/rendering-lists) in React, each element must have a unique key to differentiate it from its siblings. The key lets React identify the item throughout its lifetime. Giving state objects a unique key / ID before adding them to the store is also helpful for identifying and retrieving them later.

I used the [uuid](https://www.npmjs.com/package/uuid) package to generate unique [128-bit uuid](https://en.wikipedia.org/wiki/Universally_unique_identifier) keys. By simply including the package in a file, you are able to then invoke the uuidv4() method which returns a unique key.




