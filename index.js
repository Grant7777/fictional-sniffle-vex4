// Get the link element by its tag name
var link = document.getElementsByTagName("a")[0];

// Add an event listener for the click event
link.addEventListener("click", function(event) {
  // Prevent the default action of following the link
  event.preventDefault();
  // Change the URL using pushState or replaceState
  window.history.pushState (null, null, "index.html#");
  // Do whatever else you want to do when the user clicks on the link
});
