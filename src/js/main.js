window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// faq toggles 
const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')
        faq.classList.toggle('faqOpen')

        // icon
        const icon = faq.querySelector('.faq__icon i')
        if (icon.className === "uil uil-angle-down") {
            icon.className = "uil uil-angle-up"
        } else {
            icon.className = "uil uil-angle-down"
        }
    })
})

const menu = document.querySelector(".nav__menu")
const openBtn = document.querySelector("#open-btn")
const closeBtn = document.querySelector("#close-btn")

openBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    openBtn.style.display = "none";
})

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModal")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}