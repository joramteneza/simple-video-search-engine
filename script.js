// Load the PSE Element Library asynchronously
(function () {
  var cx = "16a1ce191795748fe"; // Replace 'YOUR_CX_ID' with your unique CX ID (Search engine ID)
  var gcse = document.createElement("script");
  gcse.type = "text/javascript";
  gcse.async = true;
  gcse.src = "https://cse.google.com/cse.js?cx=" + cx;
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(gcse, s);
})();

// Callback function to render the search box
function renderSearchBox() {
  // Check if the PSE Element Library is loaded
  if (typeof google === "object" && typeof google.search === "object") {
    // Create a search control
    var searchControl = new google.search.SearchControl();

    // Set the options for the search control
    var options = new google.search.DrawOptions();
    options.enableSearchboxOnly("16a1ce191795748fe"); // Replace 'YOUR_CX_ID' with your unique CX ID (Search engine ID)

    // Draw the search box on the page
    searchControl.draw(document.getElementById("search-container"), options);
  } else {
    // Retry rendering the search box after a short delay
    setTimeout(renderSearchBox, 100);
  }
}

// Call the renderSearchBox function to render the search box
renderSearchBox();
