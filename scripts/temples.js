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

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
  });
  