// Whiteprint placeholders
// Sam Smith, 2019
var p = document.querySelectorAll(".placeholder");
var i;
// for every placeholder class
for (i = 0; i < p.length; i++) {
  if (p[i].nodeName == "IMG") {
    // if its on an img
    // replace with transparent pixel
    p[i].src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
    // replace alt text
    p[i].alt="Placeholder image."
  } else {
    // else, presumed text
    // replace characters with block
    p[i].innerHTML = p[i].innerHTML.replace(/[^]/gi, '▆');
    // don't read that text
    p[i].setAttribute("aria-label", "Placeholder text.");
  }
}
