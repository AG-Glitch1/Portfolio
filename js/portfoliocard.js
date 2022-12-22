let onLode = document.querySelector("#loader-page");

function lode() {
  onLode.classList.add("none")
}

setTimeout(() => {
  onLode.remove()
}, 3000)




let about = document.querySelector(".about")
let spans = document.querySelectorAll(".progress .s-pro")

    window.onload = () => {
        setTimeout(() => {
            spans.forEach((span) => {
                span.style.width = span.dataset.width;
            })
        },3100)
    }



// -------------------
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
  
  document.addEventListener("contextmenu", function (e) {
    alert(
      "Sorry, right click is disabled to prevent leakage of 			confidential functions"
    );
    e.preventDefault();
  });
  
  document.onkeydown = function (e) {
    if (event.keyCode == 123) {
      return false;
    }
    // if (event.keyCode == 121) {
    //   return false;
    // }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode == "S".charCodeAt(0)) {
      return false;
    }
  };
  