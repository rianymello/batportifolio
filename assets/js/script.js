'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}
// seta de navegação do modal, favor não mexer, sujeito a paulada

$(document).ready(function () {
  var modals = $('[id^=myModal]');
  var currentModalIndex = 0;

  function showModal(index) {
    $(modals).modal('hide');
    $(modals[index]).modal('show');
  }

  function handleNext() {
    currentModalIndex = (currentModalIndex + 1) % modals.length;
    showModal(currentModalIndex);
    updateButtonVisibility();
  }
 // pq krls o de cima functiona e esse n?????
  function handlePrevious() {
    currentModalIndex = (currentModalIndex - 1 + modals.length) % modals.length;
    showModal(currentModalIndex);
    updateButtonVisibility();
  }
// ah, errei matemática básica UWU
  function updateButtonVisibility() {
    $('#prevModalBtn').toggle(currentModalIndex > 0);
    $('#nextModalBtn').toggle(currentModalIndex < modals.length - 1);
  }

  $(document).on('click', '#nextModalBtn', handleNext);
  $(document).on('click', '#prevModalBtn', handlePrevious);

  $(modals).on('show.bs.modal', function (e) {
    var modalIndex = modals.index(e.target);
    currentModalIndex = modalIndex;
    updateButtonVisibility();
  });
// N sei pq tá funcionando, mas tá funcionando
  $('#prevModalBtn').hide();
});

document.addEventListener('DOMContentLoaded', function () {
  var emailLink = document.getElementById('emailLink');
  var phoneNumberLink = document.getElementById('phonenumber');
  var copiedMessage = document.getElementById('copiedMessage');

  emailLink.addEventListener('click', function (event) {
    event.preventDefault();
    copyToClipboard(emailLink.textContent);
    showCopiedMessage(event);
  });

  phoneNumberLink.addEventListener('click', function (event) {
    event.preventDefault();
    copyToClipboard(phoneNumberLink.textContent);
    showCopiedMessage(event);
  });

  function copyToClipboard(text) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }

  function showCopiedMessage(event) {
    copiedMessage.style.display = 'block';

    function updateMessagePosition(e) {
      copiedMessage.style.left = e.clientX + 'px';
      copiedMessage.style.top = e.clientY - 30 + 'px';
    }

    updateMessagePosition(event);

    document.addEventListener('mousemove', updateMessagePosition);

    setTimeout(function () {
      copiedMessage.style.display = 'none';
      document.removeEventListener('mousemove', updateMessagePosition);
    }, 1500); // Adjust the time the message stays visible (in milliseconds)
  }
});



