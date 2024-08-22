document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    let currentIndex = 0;
  
    function showNextSlide() {
      currentIndex = (currentIndex + 1) % slideCount;
      const newTransformValue = `translateX(-${currentIndex * 100}%)`;
      slides.style.transform = newTransformValue;
    }
  
    setInterval(showNextSlide, 3000); // Change slide every 3 seconds
  });
  