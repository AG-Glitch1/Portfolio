let onLode = document.querySelector("#loader-page");

function lode() {
  onLode.classList.add("none")
}

setTimeout(() => {
  onLode.remove()
}, 3000)


// -------------------
let btn = document.querySelectorAll(".aheader");
let pointslidespan = document.querySelectorAll(".ulheader .liheader a");
let arraypointslidespan = Array.from(pointslidespan);
let titlesection = document.querySelectorAll(".headname");

btn.forEach((ele) => {
  ele.onclick = function () {
    btn.forEach((ele) => {
      ele.classList.remove("active-a");
    });
    this.classList.add("active-a");
  };
});

function removeactive() {
  pointslidespan.forEach((element) => {
    element.classList.remove("active-a");
  });
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 0) {
    removeactive();
    arraypointslidespan[0].classList.add("active-a");
  }

  if (window.scrollY >= titlesection[0].offsetTop - 200) {
    removeactive();
    arraypointslidespan[1].classList.add("active-a");
  }

  if (window.scrollY >= titlesection[1].offsetTop - 200) {
    removeactive();
    arraypointslidespan[2].classList.add("active-a");
  }

  if (window.scrollY >= titlesection[2].offsetTop - 250) {
    removeactive();
    arraypointslidespan[3].classList.add("active-a");
  }
});

// -------------------
let closee = document.querySelector(".close");
let navMenu = document.querySelector(".ulheader");
let hamburger = document.querySelector(".hamburger i");

hamburger.addEventListener("click", () => {
  navMenu.classList.add("open");
});

closee.addEventListener("click", () => {
  navMenu.classList.remove("open");
});

document.querySelectorAll(".aheader").forEach((e) => {
  e.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});


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
  if (event.keyCode == 121) {
    return false;
  }
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

let about = document.querySelector(".about")
let spans = document.querySelectorAll(".progress .s-pro")

let upto = document.querySelector(".upto");
let iconewhatsapp = document.querySelector(".iconewhatsapp");

window.onscroll = () => {
  if (window.scrollY >= about.offsetTop - 200){
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    })
  }

  if (scrollY >= 400) {
    upto.classList.add("show");
    iconewhatsapp.classList.add("show");
  } else {
    upto.classList.remove("show");
    iconewhatsapp.classList.remove("show");
  }

}
upto.addEventListener("click", function () {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

