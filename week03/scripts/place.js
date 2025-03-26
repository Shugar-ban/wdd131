// Get the current year
const currentYear = new Date().getFullYear();
const designerName = "Adeoye Ayodeji Emmanuel";
const designerCountry = "Nigeria";
const lastModifiedDate = document.lastModified;

// Select the first paragraph in the footer
const footerParagraph = document.querySelector("footer p:first-of-type");
const secondParagraph = document.querySelector("footer p:nth-of-type(2)");

// Set the content dynamically
footerParagraph.innerHTML = `&copy; ${currentYear}  ${designerName} , ${designerCountry}`
secondParagraph.textContent = `This document was last modified on: ${lastModifiedDate}`;

function calculateWindChill(temperature, windSpeed) {
  // Check if temperature and wind speed are valid numbers
  if (typeof temperature !== 'number' || typeof windSpeed !== 'number') {
    return "Invalid input. Temperature and wind speed must be numbers.";
  }

  // Check if wind speed is above 4.8 km/h
  if (windSpeed > 4.8) {
    return "N/A";
  }

  if (temperature <= 10) {
    return "N/A"
  }

  // Calculate wind chill using the formula
  const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);

  return windChill.toFixed(2); // Return wind chill rounded to 2 decimal places
}

// Get the windchill element
const windChillElement = document.querySelector('.weather p:last-child strong');

// Check if the element exists
if (windChillElement) {
  // Calculate wind chill
  const temperature = 22; // Temperature in Celsius
  const windSpeed = 2; // Wind speed in km/h
  const calculatedWindChill = calculateWindChill(temperature, windSpeed);

  // Update the windchill element with the calculated value
  windChillElement.parentElement.textContent = `Windchill: ${calculatedWindChill} °C`;
} else {
  console.error("Windchill element not found.");
}
