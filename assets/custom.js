function displayAboutUs(variation) {
  const aboutUsDiv = document.getElementById("about");
  const aboutUsNav = document.querySelector(".navbar-item[href='#about']");
  if (variation) {
    console.log("show-about-us is true");
    aboutUsDiv.style.display = "block";
    aboutUsNav.style.display = "inherit";
  } else {
    console.log("show-about-us is false");
    aboutUsDiv.style.display = "none";
    aboutUsNav.style.display = "none";
  }
}
