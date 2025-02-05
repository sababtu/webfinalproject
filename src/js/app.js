const slider = document.querySelector(".headerslider");
const slides = slider.querySelectorAll(".headerslider img");
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].style.display = "none";
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";
}

setInterval(() => {
  showSlide(currentSlide + 1);
}, 5000);

const links = document.querySelectorAll(".clickButtons a");

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    links.forEach((link) => {
      link.style.backgroundColor = "";
    });

    link.style.backgroundColor = "#15263E";
  });
});

window.addEventListener("scroll", updateProgressBars);

function updateProgressBars() {
  var designProgress = document.getElementById("designProccent");
  var photographyProgress = document.getElementById("photographyProccent");
  var markingProgress = document.getElementById("markingProccent");
  var photoshopProgress = document.getElementById("photoshopProccent");

  var windowHeight = window.innerHeight;
  var scrollPosition = window.scrollY || window.pageYOffset;

  var designOffsetTop = designProgress.offsetTop;
  var photographyOffsetTop = photographyProgress.offsetTop;
  var markingOffsetTop = markingProgress.offsetTop;
  var photoshopOffsetTop = photoshopProgress.offsetTop;

  var designProgressWidth =
    scrollPosition + windowHeight >= designOffsetTop ? 80 : 0;
  var photographyProgressWidth =
    scrollPosition + windowHeight >= photographyOffsetTop ? 65 : 0;
  var markingProgressWidth =
    scrollPosition + windowHeight >= markingOffsetTop ? 50 : 0;
  var photoshopProgressWidth =
    scrollPosition + windowHeight >= photoshopOffsetTop ? 30 : 0;

  designProgress.style.width = designProgressWidth + "%";
  photographyProgress.style.width = photographyProgressWidth + "%";
  markingProgress.style.width = markingProgressWidth + "%";
  photoshopProgress.style.width = photoshopProgressWidth + "%";

  designProgress.style.transition = "width 0.5s ease";
  photographyProgress.style.transition = "width 0.5s ease";
  markingProgress.style.transition = "width 0.5s ease";
  photoshopProgress.style.transition = "width 0.5s ease";
}

var cards = document.getElementsByClassName("card");

for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseover", function () {
    var cardContent = this.getElementsByClassName("card-content")[0];
    cardContent.classList.add("hidden");

    var heading = document.createElement("h2");
    heading.innerHTML =
      "New Heading " + (this.getAttribute("data-index") || "");

    var paragraph = document.createElement("p");
    paragraph.innerHTML =
      "New Paragraph " + (this.getAttribute("data-index") || "");

    // cards
    if (this.id === "card1") {
      heading.innerHTML = "Graphichs Design";
      paragraph.innerHTML =
        "Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor";

      heading.style.color = "white";
      heading.style.fontSize = "18px";
      heading.style.marginTop = "100px";
      paragraph.style.color = "#ECECEC";
      paragraph.style.fontSize = "12px";
      paragraph.style.width = "200px";
      paragraph.style.margin = "auto";
    } else if (this.id === "card2") {
      heading.innerHTML = "Best Service";
      paragraph.innerHTML =
        "Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor";

      heading.style.color = "white";
      heading.style.fontSize = "18px";
      heading.style.marginTop = "100px";
      paragraph.style.color = "#ECECEC";
      paragraph.style.fontSize = "12px";
      paragraph.style.width = "200px";
      paragraph.style.margin = "auto";
    } else if (this.id === "card3") {
      heading.innerHTML = "Best Service";
      paragraph.innerHTML =
        "Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor";

      heading.style.color = "white";
      heading.style.fontSize = "18px";
      heading.style.marginTop = "100px";
      paragraph.style.color = "#ECECEC";
      paragraph.style.fontSize = "12px";
      paragraph.style.width = "200px";
      paragraph.style.margin = "auto";
    } else if (this.id === "card4") {
      heading.innerHTML = "Pixel Perfect";
      paragraph.innerHTML =
        "Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor";

      heading.style.color = "white";
      heading.style.fontSize = "18px";
      heading.style.marginTop = "100px";
      paragraph.style.color = "#ECECEC";
      paragraph.style.fontSize = "12px";
      paragraph.style.width = "200px";
      paragraph.style.margin = "auto";
    } else if (this.id === "card5") {
      heading.innerHTML = "Unique Ideas";
      paragraph.innerHTML =
        "Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor";

      heading.style.color = "white";
      heading.style.fontSize = "18px";
      heading.style.marginTop = "100px";
      paragraph.style.color = "#ECECEC";
      paragraph.style.fontSize = "12px";
      paragraph.style.width = "200px";
      paragraph.style.margin = "auto";
    } else if (this.id === "card6") {
      heading.innerHTML = "Design Analysis";
      paragraph.innerHTML =
        "Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor";

      heading.style.color = "white";
      heading.style.fontSize = "18px";
      heading.style.marginTop = "100px";
      paragraph.style.color = "#ECECEC";
      paragraph.style.fontSize = "12px";
      paragraph.style.width = "200px";
      paragraph.style.margin = "auto";
    } else if (this.id === "card7") {
      heading.innerHTML = "Fully Managed";
      paragraph.innerHTML =
        "Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor";

      heading.style.color = "white";
      heading.style.fontSize = "18px";
      heading.style.marginTop = "100px";
      paragraph.style.color = "#ECECEC";
      paragraph.style.fontSize = "12px";
      paragraph.style.width = "200px";
      paragraph.style.margin = "auto";
    } else if (this.id === "card8") {
      heading.innerHTML = "Helpful Support";
      paragraph.innerHTML =
        "Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor";

      heading.style.color = "white";
      heading.style.fontSize = "18px";
      heading.style.marginTop = "100px";
      paragraph.style.color = "#ECECEC";
      paragraph.style.fontSize = "12px";
      paragraph.style.width = "200px";
      paragraph.style.margin = "auto";
    }

    this.appendChild(heading);
    this.appendChild(paragraph);
  });

  cards[i].addEventListener("mouseout", function () {
    var cardContent = this.getElementsByClassName("card-content")[0];
    cardContent.classList.remove("hidden");

    this.removeChild(this.lastElementChild);
    this.removeChild(this.lastElementChild);
  });
}

function showContent(photoUrl, text) {
  var photo = document.getElementById("photo");
  var recomendationText = document.getElementById("recomendationText");
  var occupation = document.getElementById("occupation");
  var name = document.getElementById("name");

  photo.src = photoUrl;
  recomendationText.innerText = text;

  var content = document.getElementById("recomendationContent");
  content.classList.remove("hidden");
}

function showAll() {
  var photos = document.getElementsByClassName("buttonsPhoto");
  for (var i = 0; i < photos.length; i++) {
    photos[i].style.opacity = "1";
  }
}

function showPhoto(row, index) {
  var photos = document.getElementsByClassName("buttonsPhoto");
  for (var i = 0; i < photos.length; i++) {
    photos[i].style.opacity = "0.5";
  }

  var photoIndex = (row - 1) * 3 + index;
  photos[photoIndex].style.opacity = "1";
}

var buttonsColor = document.getElementsByClassName("button");
var activeButton = null;

for (var i = 0; i < buttonsColor.length; i++) {
  buttonsColor[i].addEventListener("click", function () {
    if (activeButton) {
      activeButton.style.color = "";
    }

    this.style.color = "#E93656";
    activeButton = this;
  });
}

var activeSquare = null;
var squares = document.getElementsByClassName("square");
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function () {
    if (activeSquare !== null) {
      activeSquare.classList.remove("active");
      activeSquare.querySelector(".square-content").style.display = "none";
    }

    this.classList.add("active");
    this.querySelector(".square-content").style.display = "block";
    activeSquare = this;
  });
}

const form = document.getElementById("contactSign");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const params = new URLSearchParams(formData);

  fetch(form.action, {
    method: "POST",
    body: params,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 1) {
        alert(
          "Thank you for getting in touch! We appreciate you contacting us."
        );
      } else {
        alert(
          "There was an error while sending your message. Please try again later."
        );
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert(
        "There was an error while sending your message. Please try again later."
      );
    });
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

if (!localStorage.getItem("cookiesAccepted")) {
  document.getElementById("cookie-notification").style.display = "block";
}

document
  .getElementById("accept-cookies")
  .addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    document.getElementById("cookie-notification").style.display = "none";
  });

function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

document.getElementById("cookie-notification").style.display = "block";

document
  .getElementById("accept-cookies")
  .addEventListener("click", function () {
    setCookie("cookiesAccepted", "true", 365);
    document.getElementById("cookie-notification").style.display = "none";
  });
