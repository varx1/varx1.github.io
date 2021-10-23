function NavigationSwitch() {
  var a = document.getElementByClassName("NavigationSecondary");
  
  if (a.style.display === "none") {
    a.style.display = "block";
  } else {
    a.style.display = "none";
  }
}
