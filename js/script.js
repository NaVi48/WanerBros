var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

 <script> const slides = document.querySelectorAll('.item');
            const nextBtn = document.querySelector('.next');
            const prevBtn = document.querySelector('.prev');
            const current = document.querySelector('.active');  
          
            let currentIndex = 0;
          
            nextBtn.addEventListener('click', () => {
              removeActiveClass();
              currentIndex = (currentIndex + 1) % slides.length;
              slides[currentIndex].classList.add('active');
            });
          
            prevBtn.addEventListener('click', () => {
              removeActiveClass();
              currentIndex = (currentIndex - 1 + slides.length) % slides.length;
              slides[currentIndex].classList.add('active');
            });
          
            function removeActiveClass() {
              current.classList.remove('active');
            }
         let next = document.querySelector('.next')
            let prev = document.querySelector('.prev')
            
            next.addEventListener('click', function(){
                let items = document.querySelectorAll('.item')
                document.querySelector('.slide').appendChild(items[0])
            })
            
            prev.addEventListener('click', function(){
                let items = document.querySelectorAll('.item')
                document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
            })</script><section id="latest">
