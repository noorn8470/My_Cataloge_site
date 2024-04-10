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


const HTML_CSS_URL= "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const JAVASCRIPT_URL = "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const DATA_STRUCTURES_DATA_BASES = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";
const PYTHON_URL = "https://example.com/python-image.jpg"; // Placeholder image URL
const CPP_URL = "https://example.com/cpp-image.jpg"; // Placeholder image URL
const MACHINE_LEARNING_URL = "https://example.com/machine-learning-image.jpg"; // Placeholder image URL
// This is an array of strings (TV show titles)
let courses = [
    { title: "Learn HTML & CSS"} //, description: "Start your web development journey with the basics of HTML and CSS.", imageURL: HTML_CSS_URL },
    { title: "Learn JavaScript"}//, description: "Dive deeper into web development with JavaScript.", imageURL: JAVASCRIPT_URL },
    { title: "Learn JavaScript"}//, description: "How to use Datastructures and Databases.", imageURL: DATA_STRUCTURES_DATA_BASES },
    { title: "Learn Python"}//, description: "Explore Python, one of the most versatile programming languages.", imageURL: PYTHON_URL },
    { title: "Learn C++"}//, description: "Understand the fundamentals of system programming with C++.", imageURL: CPP_URL },
    { title: "Machine Learning"}//, description: "Unlock the potential of AI with Machine Learning.", imageURL: MACHINE_LEARNING_URL },
];
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card").cloneNode(true); // Clone the template card
    templateCard.style.display = "none"; // Ensure the template is hidden after cloning
    

    ourses.forEach(course => {
        const nextCard = templateCard.cloneNode(true); // Clone the template for each new card
        editCardContent(nextCard, course.title, course.description, course.imageURL); // Pass course details to edit function
        cardContainer.appendChild(nextCard); // Add the card to the container
    });
}

function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block"; // Make the card visible

// Update the card's title, image, and description
    card.querySelector("h2").textContent = title;
    card.querySelector("img").src = imageURL;
    card.querySelector("img").alt = title + " Poster";
    const bulletPoints = card.querySelectorAll("li");
    bulletPoints[0].textContent = description; // Using the first bullet point for the description

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    courses.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}
