let img = document.querySelector("#closeBox");

img.addEventListener("click", function () {
  if (img.src.includes("closeBox.webp")) {
    img.src = "openBox.jpg";
    window.open("secondPage.html", "_blank");
  } else {
    img.src = "closeBox.webp";
  }
});
