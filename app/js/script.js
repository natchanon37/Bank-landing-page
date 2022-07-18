const btnHamberger = document.querySelector("#btnHamberger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeEle = document.querySelectorAll(".has-fade");

header.addEventListener("click", function () {
  console.log("open hamberger");

  if (header.classList.contains("open")) {
    //close the hamberger menu
    header.classList.remove("open");
    fadeEle.forEach((element) => {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    header.classList.add("open"); // open the hamberger menu
    fadeEle.forEach((element) => {
      element.classList.add("fade-in");
      element.classList.remove("fade-out");
    });
  }
});
