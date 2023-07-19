export class Slideshow {
    constructor() {
      this.slides = document.getElementsByClassName("mySlides");
      this.currentIndex = 0;
      this.totalSlides = this.slides.length;
      this.timeout = setTimeout(this.showSlide.bind(this), 3000);
      this.isRunning = false;
    }
  
    start() {
      if (!this.isRunning) {
        this.isRunning = true;
        this.carousel();
      }
    }
  
    stop() {
      if (this.isRunning) {
        clearTimeout(this.timeout);
        this.isRunning = false;
      }
    }
  
    goToNext() {
      this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
      this.showSlide(this.currentIndex);
    }
  
    goToPrevious() {
      this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
      this.showSlide(this.currentIndex);
    }
  
    showSlide(index) {
      for (let i = 0; i < this.slides.length; i++) {
        if (i === index) {
          this.slides[i].style.display = "block";
        } else {
          this.slides[i].style.display = "none";
        }
      }
    }
  
    carousel() {
      this.goToNext();
      this.timeout = setTimeout(() => {
        this.carousel();
      }, 3000);
    }

      
    SlideshowRunning() 
    {
      return this.isRunning;
    }
  }
  