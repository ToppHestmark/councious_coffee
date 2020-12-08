
window.onscroll = () => { 

  const scrollingPosition = Math.ceil(window.scrollY);

  if (scrollingPosition > 300) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

const scrollToTopButton = document.querySelector('.scrollToTopButton');
function scrollToTop() {
  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  });
}