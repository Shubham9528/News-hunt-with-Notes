### 📰 News Hunt
Welcome to News Hunt, a React-based application that fetches and displays the latest news articles based on user input. The app integrates with the Mediastack API to provide a seamless news browsing experience.


![news hunt](https://github.com/user-attachments/assets/aa9c3051-5297-4c25-a003-f9b74a1530d2)


## 🌟 Features
- Dynamic Search: Users can search for news based on categories like business, technology, health, etc.
- Responsive Design: The app is styled using Tailwind CSS, ensuring a responsive and attractive user interface.
- Real-time Updates: Fetches the latest news whenever a new search is submitted.

## 🏠App Component 
File: "App.js"

Concepts:
-  Parent Component: The App component is the root component in a React application. It orchestrates the rendering of child components and manages the overall state.
-  State Management: The useState hook is used here to manage the state of the submittedSearch variable, which stores the user's search input.
-  Component Composition: The App component includes other components (Header, SearchBox, and Card) as its children, thereby composing the application's UI.

Explanation:

The App component serves as the main container of the application. It handles the following tasks:
- State Management: useState is used to track the user's search input. This state is passed as a prop to the Card component, which uses it to fetch and display relevant news.
- Styling and Layout: The component utilizes Tailwind CSS for responsive design. The header is fixed at the top, with a sticky search bar positioned below it, ensuring a smooth user experience.
- Component Rendering: The Header component displays the app's title, the SearchBox allows the user to input a search term, and the Card component displays the fetched news.

## 📰Header Component
File: "Header.js"

Concepts:
-  Static Content: The Header component is a simple functional component that returns static content. In React, functional components are the simplest way to create components that only render UI and do not manage any state.
-  Component Reusability: The Header component is a reusable piece of UI that can be used in different parts of the app if needed.
-  Component Composition: The App component includes other components (Header, SearchBox, and Card) as its children, thereby composing the application's UI.

Explanation:

The Header component is designed to display the title of the application. It’s a simple functional component without any state or props. The styling is minimal and focuses on aligning the title at the center of the screen.
```
import React from 'react';

export default function Header() {
    return (    
        <div className="">
            <h1>News Hunt</h1> 
        </div>
    );
}
```

## 🔍 SearchBox Component
File: "SearchBox.js"

Concepts:
-  Controlled Components: In React, a controlled component is an input element whose value is controlled by React state. The SearchBox component uses a controlled input field.
-  State Management: The useState hook is used to manage the state of the search input. The search state variable holds the value entered by the user.
-  Event Handling: The component handles user input through event handlers (handleChange and handleSubmit), allowing the app to respond to user actions.

Explanation:

The SearchBox component allows the user to input a search term. It maintains an internal state (search) to track the value entered by the user. When the form is submitted, the search term is passed to the parent App component via the setSubmittedSearch prop.

Key Feature:
- Controlled Input: The input field’s value is linked to the component’s state, ensuring that React controls the input.
- Form Submission: On form submission, the handleSubmit function is called, which in turn updates the submittedSearch state in the App component.


## 📄Card Component
File: "Card.js"

Concepts:
-  API Integration: The Card component fetches data from the Mediastack API using Axios, a popular HTTP client for making API requests in JavaScript.
-  Effect Hook (useEffect): React’s useEffect hook is used to handle side effects, such as fetching data from an external API. It runs the API call whenever the search prop changes.
-  Rendering Data: The component maps over the fetched news data and renders each item as a card, displaying details like the title, author, and description.
-   Conditional Rendering: The component conditionally renders elements (like images) based on the availability of the data.

Explanation:

The Card component is responsible for fetching and displaying news articles based on the user's search term. It uses the Mediastack API to get the latest news and displays it in a grid of cards.

Key Feature:
- API Call: The component fetches data using Axios. It builds the API request URL dynamically based on the search term provided by the user.
- Effect Hook: The useEffect hook ensures that the news is fetched every time the search term changes.
- Card Layout: Each news article is displayed in a card format, with an optional image at the top, followed by the author, title, and description.

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

##📝 License
This project is licensed under the --- License.
  
