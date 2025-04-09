const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
  
// Function to increment review counter
function incrementReviewCounter() {
    // Get the current count from localStorage
    let reviewCount = localStorage.getItem("reviewCount");

    // If the count doesn't exist, initialize it to 0
    if (!reviewCount) {
        reviewCount = 0;
    } else {
        // Parse the count from string to integer
        reviewCount = parseInt(reviewCount, 10);
    }

    // Increment the count
    reviewCount += 1;

    // Update the count in localStorage
    localStorage.setItem("reviewCount", reviewCount);

    // Display the updated count
    const counterElement = document.getElementById("reviewCounter");
    if (counterElement) {
        counterElement.textContent = `Reviews Completed: ${reviewCount}`;
    }
}

// Call the function on page load
window.addEventListener("load", function() {
    incrementReviewCounter();
});