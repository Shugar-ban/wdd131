const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const li = document.createElement('li');
const deleteButton = document.createElement('button');
let chaptersArray = getChapterList() || [];

function getChapterList() {
  // Logic to generate the chapter list goes here
  return ["Chapter 1", "Chapter 2", "Chapter 3"]; // Example return value
}

chaptersArray.forEach(chapter => {
  displayList(chapter);
});

button.addEventListener('click', () => {
  if (input.value != '') {  // make sure the input is not empty
    displayList(input.value); // call the function that outputs the submitted chapter
    chaptersArray.push(input.value);  // add the chapter to the array
    setChapterList(); // update the localStorage with the new array
    input.value = ''; // clear the input
    input.focus(); // set the focus back to the input
  }
});

console.log(chaptersArray); // Outputs: ["Chapter 1", "Chapter 2", "Chapter 3"]

li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);

let el = document.getElementById("close-button");
console.log(el.ariaLabel); // "Close"
el.ariaLabel = "Close dialog";
console.log(el.ariaLabel); // "Close dialog"

buttonElement.addEventListener('click', function() {
  // Code to execute when the element is clicked
  console.log('Button was clicked!'); // Logs a message to the console
  document.body.style.backgroundColor = 'lightblue'; // Changes the background color of the page
});

buttonElement.addEventListener('keyup', function() {
  // Code to execute when a key is released
  console.log('A key was released!'); // Log a message to the console

  if (key === 'Enter') { // Check if the released key was "Enter"
    alert('You pressed the Enter key!'); // Display an alert message
  }
});

document.addEventListener("DOMContentLoaded", function() {
  // Code to execute when the DOM is parsed
  console.log("The DOM has been fully loaded and parsed."); // Log a confirmation message to the console

  const heading = document.querySelector("h1"); // Select an <h1> element on the page
  if (heading) {
    heading.style.color = "blue"; // Change the color of the <h1> element to blue
    heading.textContent = "Welcome to My Page!"; // Modify the text content of the <h1>
  }
});

button.addEventListener('click', function() {
  // Code to execute when the button is clicked
  console.log('Add Chapter button was clicked!'); // Log a message to the console

  if (input.value.trim() !== '') {
    // Example: Append a new chapter element to a list
  const newChapter = document.createElement('li'); // Create a new list item
  newChapter.textContent = 'New Chapter'; // Set the text content
  document.querySelector('#chapterList').appendChild(newChapter); // Add it to the list
   }
});

deleteButton.addEventListener('click', function () {
  list.removeChild(li);
  input.focus();
  input.value = '';
  input.focus();
});