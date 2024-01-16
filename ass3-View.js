//Vòng lặp for. Không làm được. Tất cả đều được chọn
/*let capital = document.querySelectorAll(".capital");
let content = document.querySelectorAll(".content");
let btnViewMore = document.querySelectorAll(".View-more");
let btnViewLess = document.querySelectorAll(".View-less");
let showViewMore = true;
let viewMore = function () {
  for (let i = 0; i < btnViewMore.length; i++) {
    if (showViewMore == true) {
      btnViewMore[i].classList.remove("hidden");
    }
  }
};

let noViewMore = function () {
  for (let i = 0; i < btnViewMore.length; i++) {
    btnViewMore[i].classList.add("hidden");
  }
};

for (let i = 0; i < capital.length; i++) {
  capital[i].addEventListener("mouseover", viewMore);
  capital[i].addEventListener("mouseout", noViewMore);
}*/
//Kinh nghiệm(1)
let capital1 = document.querySelector(".capital1");
let content1 = document.querySelectorAll(".content1");
let btnViewMore1 = document.querySelector(".View-more1");
let btnViewLess1 = document.querySelector(".View-less1");
let showViewMore1 = true;
let viewMore1 = function () {
  if (showViewMore1 == true) {
    btnViewMore1.classList.remove("hidden");
  }
};
let noViewMore1 = function () {
  btnViewMore1.classList.add("hidden");
};
capital1.addEventListener("mouseover", viewMore1);
capital1.addEventListener("mouseout", noViewMore1);
btnViewMore1.addEventListener("click", function () {
  for (let i = 0; i < content1.length; i++) {
    content1[i].classList.remove("hidden");
  }
  btnViewLess1.classList.remove("hidden");
  btnViewMore1.classList.add("hidden");
  showViewMore1 = false;
});
btnViewLess1.addEventListener("click", function () {
  for (let i = 0; i < content1.length; i++) {
    content1[i].classList.add("hidden");
  }
  btnViewLess1.classList.add("hidden");
  showViewMore1 = true;
});
//Kĩ năng
let capital2 = document.querySelector(".capital2");
let content2 = document.querySelectorAll(".content2");
let btnViewMore2 = document.querySelector(".View-more2");
let btnViewLess2 = document.querySelector(".View-less2");
let showViewMore2 = true;
let viewMore2 = function () {
  if (showViewMore2 == true) {
    btnViewMore2.classList.remove("hidden");
  }
};
let noViewMore2 = function () {
  btnViewMore2.classList.add("hidden");
};
capital2.addEventListener("mouseover", viewMore2);
capital2.addEventListener("mouseout", noViewMore2);
btnViewMore2.addEventListener("click", function () {
  for (let i = 0; i < content2.length; i++) {
    content2[i].classList.remove("hidden");
  }
  btnViewLess2.classList.remove("hidden");
  btnViewMore2.classList.add("hidden");
  showViewMore2 = false;
});
btnViewLess2.addEventListener("click", function () {
  for (let i = 0; i < content2.length; i++) {
    content2[i].classList.add("hidden");
  }
  btnViewLess2.classList.add("hidden");
  showViewMore2 = true;
});
//Sở thích
let capital3 = document.querySelector(".capital3");
let content3 = document.querySelectorAll(".content3");
let btnViewMore3 = document.querySelector(".View-more3");
let btnViewLess3 = document.querySelector(".View-less3");
let showViewMore3 = true;
let viewMore3 = function () {
  if (showViewMore3 == true) {
    btnViewMore3.classList.remove("hidden");
  }
};
let noViewMore3 = function () {
  btnViewMore3.classList.add("hidden");
};
capital3.addEventListener("mouseover", viewMore3);
capital3.addEventListener("mouseout", noViewMore3);
btnViewMore3.addEventListener("click", function () {
  for (let i = 0; i < content3.length; i++) {
    content3[i].classList.remove("hidden");
  }
  btnViewLess3.classList.remove("hidden");
  btnViewMore3.classList.add("hidden");
  showViewMore3 = false;
});
btnViewLess3.addEventListener("click", function () {
  for (let i = 0; i < content3.length; i++) {
    content3[i].classList.add("hidden");
  }
  btnViewLess3.classList.add("hidden");
  showViewMore3 = true;
});
//Hoạt động
let capital4 = document.querySelector(".capital4");
let content4 = document.querySelectorAll(".content4");
let btnViewMore4 = document.querySelector(".View-more4");
let btnViewLess4 = document.querySelector(".View-less4");
let showViewMore4 = true;
let viewMore4 = function () {
  if (showViewMore4 == true) {
    btnViewMore4.classList.remove("hidden");
  }
};
let noViewMore4 = function () {
  btnViewMore4.classList.add("hidden");
};
capital4.addEventListener("mouseover", viewMore4);
capital4.addEventListener("mouseout", noViewMore4);
btnViewMore4.addEventListener("click", function () {
  for (let i = 0; i < content4.length; i++) {
    content4[i].classList.remove("hidden");
  }
  btnViewLess4.classList.remove("hidden");
  btnViewMore4.classList.add("hidden");
  showViewMore4 = false;
});
btnViewLess4.addEventListener("click", function () {
  for (let i = 0; i < content4.length; i++) {
    content4[i].classList.add("hidden");
  }
  btnViewLess4.classList.add("hidden");
  showViewMore4 = true;
});
//Học vấn
let capital5 = document.querySelector(".capital5");
let content5 = document.querySelectorAll(".content5");
let btnViewMore5 = document.querySelector(".View-more5");
let btnViewLess5 = document.querySelector(".View-less5");
let showViewMore5 = true;
let viewMore5 = function () {
  if (showViewMore5 == true) {
    btnViewMore5.classList.remove("hidden");
  }
};
let noViewMore5 = function () {
  btnViewMore5.classList.add("hidden");
};
capital5.addEventListener("mouseover", viewMore5);
capital4.addEventListener("mouseout", noViewMore5);
btnViewMore5.addEventListener("click", function () {
  for (let i = 0; i < content5.length; i++) {
    content5[i].classList.remove("hidden");
  }
  btnViewLess5.classList.remove("hidden");
  btnViewMore5.classList.add("hidden");
  showViewMore5 = false;
});
btnViewLess5.addEventListener("click", function () {
  for (let i = 0; i < content5.length; i++) {
    content5[i].classList.add("hidden");
  }
  btnViewLess5.classList.add("hidden");
  showViewMore5 = true;
});
//Ngoại ngữ
let capital6 = document.querySelector(".capital6");
let content6 = document.querySelectorAll(".content6");
let btnViewMore6 = document.querySelector(".View-more6");
let btnViewLess6 = document.querySelector(".View-less6");
let showViewMore6 = true;
let viewMore6 = function () {
  if (showViewMore6 == true) {
    btnViewMore6.classList.remove("hidden");
  }
};
let noViewMore6 = function () {
  btnViewMore6.classList.add("hidden");
};
capital6.addEventListener("mouseover", viewMore6);
capital6.addEventListener("mouseout", noViewMore6);
btnViewMore6.addEventListener("click", function () {
  for (let i = 0; i < content6.length; i++) {
    content6[i].classList.remove("hidden");
  }
  btnViewLess6.classList.remove("hidden");
  btnViewMore6.classList.add("hidden");
  showViewMore6 = false;
});
btnViewLess6.addEventListener("click", function () {
  for (i = 0; i < content6.length; i++) {
    content6[i].classList.add("hidden");
  }
  btnViewLess6.classList.add("hidden");
  showViewMore6 = true;
});
