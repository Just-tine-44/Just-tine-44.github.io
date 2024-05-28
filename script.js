window.addEventListener('load', fadeCards);
window.addEventListener('scroll', fadeCards);

function fadeCards() {
    const cards = document.querySelectorAll('.card');
    const windowHeight = window.innerHeight;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < windowHeight && cardTop > -card.offsetHeight) {
            card.classList.add('visible');
        } else {
            card.classList.remove('visible');
        }
    });
}

window.addEventListener('load', fadeParagraphs);
window.addEventListener('scroll', fadeParagraphs);

function fadeParagraphs() {
  const paragraphs = document.querySelectorAll('.fade-paragraph');
  const windowHeight = window.innerHeight;

  paragraphs.forEach(paragraph => {
    const paragraphTop = paragraph.getBoundingClientRect().top;

    if (paragraphTop < windowHeight && paragraphTop > -paragraph.offsetHeight) {
      paragraph.classList.add('visible');
    } else {
      paragraph.classList.remove('visible');
    }
  });
}


const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  const arrowIcon = link.querySelector('.arrow-icon');

  link.addEventListener('mouseenter', () => {
    arrowIcon.classList.add('rotate');
  });

  link.addEventListener('mouseleave', () => {
    arrowIcon.classList.remove('rotate');
  });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach((container) => {
  const overlay = container.querySelector('.TextOverlay');
  const zoomImage = overlay.querySelector('.zoom-image');

  container.addEventListener('mouseover', () => {
    zoomImage.style.transform = 'scale(2)'; // Zoom in
  });

  container.addEventListener('mouseout', () => {
    zoomImage.style.transform = 'scale(1)'; // Reset zoom
  });
});


// Get a reference to the "Nanoparticles" link
const nanoparticlesLink = document.querySelector('a[href="#nanoparticle"]');

// Add a click event listener to the "Nanoparticles" link
nanoparticlesLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default link behavior

  // Get the target section element
  const targetSection = document.getElementById('nanoparticle-section');

  // Calculate the target section's position on the page
  const targetSectionPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;

  // Scroll to the target section's position
  window.scrollTo({
    top: targetSectionPosition,
    behavior: 'smooth' // Add smooth scrolling animation
  });
});


// Get a reference to the "Nanomaterials" link
const nanomaterialsLink = document.querySelector('a[href="#nanomaterials"]');

// Add a click event listener to the "Nanomaterials" link
nanomaterialsLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default link behavior

  // Get the target section element
  const targetSection = document.getElementById('nanomaterials-section');

  // Calculate the target section's position on the page
  const targetSectionPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;

  // Scroll to the target section's position
  window.scrollTo({
    top: targetSectionPosition,
    behavior: 'smooth' // Add smooth scrolling animation
  });
});



// Get a reference to the "Nanomaterials" link
const nanoapplicationLink = document.querySelector('a[href="#nanoapplication"]');

// Add a click event listener to the "Nanomaterials" link
nanoapplicationLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default link behavior

  // Get the target section element
  const targetSection = document.getElementById('nanoApplication-section');

  // Calculate the target section's position on the page
  const targetSectionPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;

  // Scroll to the target section's position
  window.scrollTo({
    top: targetSectionPosition,
    behavior: 'smooth' // Add smooth scrolling animation
  });
});


const nanomedicineLink = document.querySelector('a[href="#nanomedicine"]');

// Add a click event listener to the "Nanomaterials" link
nanomedicineLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default link behavior

  // Get the target section element
  const targetSection = document.getElementById('nanoMedicine-section');

  // Calculate the target section's position on the page
  const targetSectionPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;

  // Scroll to the target section's position
  window.scrollTo({
    top: targetSectionPosition,
    behavior: 'smooth' // Add smooth scrolling animation
  });
});


const uniquefeaturesLink = document.querySelector('a[href="#uniquefeatures"]');

// Add a click event listener to the "Nanomaterials" link
uniquefeaturesLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default link behavior

  // Get the target section element
  const targetSection = document.getElementById('nanoUnique-section');

  // Calculate the target section's position on the page
  const targetSectionPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;

  // Scroll to the target section's position
  window.scrollTo({
    top: targetSectionPosition,
    behavior: 'smooth' // Add smooth scrolling animation
  });
});


const nanophLink = document.querySelector('a[href="#nanoph"]');

// Add a click event listener to the "Nanomaterials" link
nanophLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default link behavior

  // Get the target section element
  const targetSection = document.getElementById('nanoPH-section');

  // Calculate the target section's position on the page
  const targetSectionPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;

  // Scroll to the target section's position
  window.scrollTo({
    top: targetSectionPosition,
    behavior: 'smooth' // Add smooth scrolling animation
  });
});


const productphLink = document.querySelector('a[href="#productph"]');

// Add a click event listener to the "Nanomaterials" link
productphLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default link behavior

  // Get the target section element
  const targetSection = document.getElementById('productPH-section');

  // Calculate the target section's position on the page
  const targetSectionPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;

  // Scroll to the target section's position
  window.scrollTo({
    top: targetSectionPosition,
    behavior: 'smooth' // Add smooth scrolling animation
  });
});



let items = document.querySelectorAll('.slider .item');
let active = 0;
function loadShow(){
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    // show after
    let stt = 0;
    for(var i = active + 1; i < items.length; i ++){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
     stt = 0;
    for(var i = (active - 1); i >= 0; i --){
        stt++;
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
loadShow();
let next = document.getElementById('next');
let prev = document.getElementById('prev');
next.onclick = function(){
   active = active + 1 < items.length ?  active + 1 : active;
   loadShow();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active -1 : active;
    loadShow();
}



document.addEventListener('DOMContentLoaded', function() {
  const infoCircle = document.querySelector('.info-circle');
  const tooltipMessage = document.querySelector('.tooltip-message');

  infoCircle.addEventListener('mouseenter', function() {
      tooltipMessage.style.display = 'block';
  });

  infoCircle.addEventListener('mouseleave', function() {
      tooltipMessage.style.display = 'none';
  });

  tooltipMessage.addEventListener('mouseenter', function() {
      tooltipMessage.style.display = 'block';
  });

  tooltipMessage.addEventListener('mouseleave', function() {
      tooltipMessage.style.display = 'none';
  });
});




document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.cardAbility');
  let currentIndex = 0;

  const showCard = (index) => {
      cards.forEach((card, i) => {
          if (i === index) {
              card.classList.add('active');
          } else {
              card.classList.remove('active');
          }
      });
  };

  document.getElementById('nextAbility').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % cards.length;
      showCard(currentIndex);
  });

  document.getElementById('prevAbility').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      showCard(currentIndex);
  });

  // Initialize first card
  showCard(currentIndex);
});

