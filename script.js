document.addEventListener("DOMContentLoaded", function(event) {
    const cardsContainer = document.querySelector('.cards');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let scrollAmount = 0;
    let touchStartX = 0;
  
    prevButton.addEventListener('click', function() {
      cardsContainer.scrollTo({
        top: 0,
        left: (scrollAmount -= 300),
        behavior: 'smooth'
      });
  
      if (scrollAmount < 0) {
        scrollAmount = 0;
      }
    });
  
    nextButton.addEventListener('click', function() {
      if (scrollAmount <= cardsContainer.scrollWidth - cardsContainer.clientWidth) {
        cardsContainer.scrollTo({
          top: 0,
          left: (scrollAmount += 300),
          behavior: 'smooth'
        });
      }
    });
  
    cardsContainer.addEventListener('touchstart', function(event) {
      touchStartX = event.touches[0].clientX;
    });
  
    cardsContainer.addEventListener('touchmove', function(event) {
      const touchMoveX = event.touches[0].clientX;
      const swipeDistance = touchStartX - touchMoveX;
  
      cardsContainer.scrollLeft += swipeDistance;
    });
  
    cardsContainer.addEventListener('touchend', function(event) {
      touchStartX = 0;
      scrollAmount = cardsContainer.scrollLeft;
    });
  });
  