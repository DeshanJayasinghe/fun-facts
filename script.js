// Array of fun facts
const funFacts = [
  "Bananas are berries, but strawberries aren't!",
  "Octopuses have three hearts.",
  "Honey never spoils. Archaeologists found 3,000-year-old honey in Egyptian tombs!",
  "A day on Venus is longer than a year on Venus.",
  "Sloths can hold their breath longer than dolphins.",
];

// Keep track of the current fact index
let currentFactIndex = 0;

// Function to update the fact displayed
function updateFact() {
  const factElement = document.querySelector('.fact');
  factElement.textContent = funFacts[currentFactIndex];
}

// Event listener for the Next button
document.getElementById('next-button').addEventListener('click', () => {
  // Increment the index and reset if it exceeds the array length
  currentFactIndex = (currentFactIndex + 1) % funFacts.length;
  updateFact();
});

// Initialize the first fact
updateFact();
