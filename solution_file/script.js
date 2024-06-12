var dogRadio = document.getElementById("dog");
var catRadio = document.getElementById("cat");
var dogCatRadio = document.getElementById("dog_cat");

function updateTableDisplay() {
  var dogRows = document.getElementsByClassName("dog");
  var catRows = document.getElementsByClassName("cat");

  if (dogRadio.checked) {
    // Display only dog rows
    for (var i = 0; i < dogRows.length; i++) {
      dogRows[i].style.display = "";
    }
    for (var i = 0; i < catRows.length; i++) {
      catRows[i].style.display = "none";
    }

    changeBackground("url('../dogs.jpg')");
  } else if (catRadio.checked) {
    // Display only cat rows
    for (var i = 0; i < dogRows.length; i++) {
      dogRows[i].style.display = "none";
    }
    for (var i = 0; i < catRows.length; i++) {
      catRows[i].style.display = "";
    }
    changeBackground("url('../cats.jpg')");
  } else if (dogCatRadio.checked) {
    console.log("dog cat checked!");
    for (var i = 0; i < dogRows.length; i++) {
      dogRows[i].style.display = "";
    }
    for (var i = 0; i < catRows.length; i++) {
      catRows[i].style.display = "";
    }
    changeBackground("url('../example-image.avif')");
  } else {
    // Display all rows if no radio button is selected
    for (var i = 0; i < dogRows.length; i++) {
      dogRows[i].style.display = "";
    }
    for (var i = 0; i < catRows.length; i++) {
      catRows[i].style.display = "";
    }
    changeBackground("url('../example-image.avif')");
  }
}

dogRadio.addEventListener("change", updateTableDisplay);
catRadio.addEventListener("change", updateTableDisplay);
dogCatRadio.addEventListener("change", updateTableDisplay);

function changeBackground(url) {
  var introDiv = document.getElementById("introduction");
  introDiv.style.backgroundImage = url;
}
