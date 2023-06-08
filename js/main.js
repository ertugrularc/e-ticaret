
import Header from "./header.js"
import productsFunc from "./product.js";
import searchFunc from "./search.js";

(async function () {
  const photos = await fetch("../js/data.json");
  const data = await photos.json();

  data ? localStorage.setItem("products", JSON.stringify(data)) : [];
  productsFunc(data);
  searchFunc(data);
})();
//! add product to localStorage end

//! add cartItems to localStorage start
const cartItems = document.querySelector(".header-cart-count");
cartItems.innerHTML = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")).length
  : "0";
let slideIndex = 1;
showSlides(slideIndex);
// setInterval sürekli bir şeylerin devam etmesi için yazarız
setInterval(() => {
  showSlides((slideIndex += 1));
}, 4000);

function plusSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slider-item");
  const dots = document.getElementsByClassName("slider-dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}


// slider






//  modal dialog


  const btnClose = document.querySelector(".modal-close");
  const modalContent = document.querySelector(".modal-dialog .modal-content");
  const modalDialog = document.querySelector(".modal-dialog");

btnClose.addEventListener("click", function(){
  // ClassList özelliği, bir öğenin sınıf isimlerini DOMTokenList nesnesi olarak döndürür. Bu özellik, bir öğe üzerinde CSS sınıfları eklemek, silmek ve geçiş efekti için yararlıdır. ClassList özelliği yalnızca okunabilir ancak add() ve remove() methodu kullanarak değiştirebilirsiniz.
  modalDialog.classList.remove("show");
  
})

document.addEventListener("click", (e)=>{
if (!e.composedPath().includes(modalContent)){
  modalDialog.classList.remove("show")
}
})


// setTimeout fonksiyonu belirli bir zaman sonra çalıştırmaya yarar.
// setInterval fonksiyonun belirli aralıklar ile sürekli çalışmasını sağlar.
setTimeout(() => {
  modalDialog.classList.add("show")
}, 3000);
