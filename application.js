function NavigationSwitch() {
  var a = document.getElementsByClassName("NavigationSecondary");
  
  if (a.style.display === "none") {
    a.style.display = "block";
  } else {
    a.style.display = "none";
  }
}
