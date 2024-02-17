// Function to show popup
function showPopup(text) {
    // Create a new div element
    var popup = document.createElement("div");
    
    // Set the content and styling of the popup
    popup.textContent = text;
    popup.style.position = "absolute";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.background = "rgba(0, 0, 0, 0.7)";
    popup.style.color = "white";
    popup.style.padding = "20px";
    popup.style.borderRadius = "10px";
    
    // Append the popup to the body
    document.body.appendChild(popup);
    
    // Remove the popup after 3 seconds
    setTimeout(function() {
      popup.remove();
    }, 3000);
  }
  
  // Function to attach popup to carousel items
  function attachPopupToCarouselItems() {
    // Get all carousel items
    var carouselItems = document.querySelectorAll('.carousel-item');
  
    // Loop through each carousel item
    carouselItems.forEach(function(item) {
      // Attach mouseover event listener to each item
      item.addEventListener('mouseover', function() {
        // Get the text content of the item
        var text = item.querySelector('.carousel-text').textContent;
        // Show popup with the text content
        showPopup(text);
      });
    });
  }
  
  // Call attachPopupToCarouselItems when the DOM content is loaded
  document.addEventListener('DOMContentLoaded', attachPopupToCarouselItems);