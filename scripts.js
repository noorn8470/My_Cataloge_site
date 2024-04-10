/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */


const HTML_CSS_URL= "HTML-and-CSS.webp";
const JAVASCRIPT_URL = "JS.jpg";
const DATA_STRUCTURES_DATA_BASES = "DBS.png";
const PYTHON_URL = "Learn Python.jpg"; 
const CPP_URL = "Learn C++.webp"; 
const MACHINE_LEARNING_URL = "Machine Learning.png"; 
// This is an array of strings (TV show titles)
let courses = [
    { title: "Learn HTML & CSS", description: "Start your web development journey with the basics of HTML and CSS.", imageURL: HTML_CSS_URL },
    { title: "Learn JavaScript", description: "Dive deeper into web development with JavaScript and build your own website.", imageURL: JAVASCRIPT_URL },
    { title: "Data Structures & Databases", description: "How to use Datastructures and Databases.", imageURL: DATA_STRUCTURES_DATA_BASES },
    { title: "Learn Python", description: "Explore Python, one of the most versatile programming languages.", imageURL: PYTHON_URL },
    { title: "Learn C++", description: "Understand the fundamentals programming with C++ with practice projects.", imageURL: CPP_URL },
    { title: "Machine Learning", description: "Unlock the potential of AI with Machine Learning and Artificial Intelligence .", imageURL: MACHINE_LEARNING_URL }
];
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card").cloneNode(true);
    templateCard.style.display = "none"; // Make sure the template is not displayed

    courses.forEach(course => {
        const nextCard = templateCard.cloneNode(true); // Clone the template for a new card
        // Corrected variable names to match function parameters
        editCardContent(nextCard, course.title, course.description, course.imageURL); 
        cardContainer.appendChild(nextCard);
    });
}

function editCardContent(card, title, description, imageURL) {
    card.style.display = "block"; // Make the card visible

// Update the card's title, image, and description
card.querySelector("h2").textContent = title;
card.querySelector("img").src = imageURL;
card.querySelector("img").alt = title + " Poster";
// Assuming each card has 3 bullet points, and you want to use the first for description
const bulletPoints = card.querySelectorAll("li");
bulletPoints[0].textContent = description;

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", title, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("Qoutes for what? Its ALL FREE!! ");
}

function removeLastCard() {
    courses.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}
