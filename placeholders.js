// Whiteprint placeholders
// Sam Smith, 2019
var p = document.querySelectorAll(".placeholder");
var i;
// for every placeholder class
for (i = 0; i < p.length; i++) {
  if (p[i].nodeName == "IMG") {
    // if its on an img
    // check for aspect ratio
    var r = p[i].getAttribute("data-ratio");
    // replace with transparent pixel
    if (r == "3:2") {
      p[i].src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII=";
    } else if (r == "2:3") {
      p[i].src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAADCAQAAAAT4xYKAAAADklEQVR42mNkAAJGOAEAAC0ABNxMS2YAAAAASUVORK5CYII=";
    } else {
      // 1x1
      p[i].src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
    }
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
