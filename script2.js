// Add event listener to each "Show Image" button
var buttons = document.getElementsByClassName("btn");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var overlay = this.parentNode.querySelector(".overlay");
    overlay.style.display = "flex";
  });
}

// Add event listener to each "Close" button
var closeButtons = document.getElementsByClassName("close-btn");
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", function() {
    var overlay = this.parentNode;
    overlay.style.display = "none";
  });
}
