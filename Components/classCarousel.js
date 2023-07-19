export class Slideshow 
{
    constructor() 
    {
      this.slides = document.getElementsByClassName("mySlides");
      this.currentIndex = 0;
      this.totalSlides = this.slides.length;
      this.timeout = setTimeout(this.showSlide.bind(this), 3000);
      this.isRunning = false;
    }///////////////////////////////////////////////////////////////////////
  
    start() 
    {
      if (!this.isRunning) {
        this.isRunning = true;
        this.carousel();
      }
    }///////////////////////////////////////////////////////////////////////
  
    stop() 
    {
      if (this.isRunning) {
        clearTimeout(this.timeout);
        this.isRunning = false;
      }
    }///////////////////////////////////////////////////////////////////////
  
    goToNext() 
    {
      this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
      this.showSlide(this.currentIndex);
    }///////////////////////////////////////////////////////////////////////
  
    goToPrevious() 
    {
      this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
      this.showSlide(this.currentIndex);
    }///////////////////////////////////////////////////////////////////////
  
    showSlide(index) 
    {
      for (let i = 0; i < this.slides.length; i++) 
      {
        if (i === index) 
        {
          if(i==0)            
            this.fadeOut(this.slides[this.slides.length-1]);
          else
            this.fadeOut(this.slides[i-1]);
          this.fadeIn(this.slides[i]);
        }
        else
        {
          this.slides[i].style.display = "none";
          this.slides[i].style.opacity = 0;
        }       
      }
    }///////////////////////////////////////////////////////////////////////
  
    SlideshowRunning() 
    {
      return this.isRunning;
    }///////////////////////////////////////////////////////////////////////
  
    fadeIn(element) 
    {
      let opacity = 0.05;
      element.style.display = "block";
  
      const fadeInterval = setInterval(() => 
      {
        if (opacity < 1) 
        {
          opacity += 0.05;
          element.style.opacity = opacity;
        } 
        else 
        {
          clearInterval(fadeInterval);
        }
      }, 100);
    }///////////////////////////////////////////////////////////////////////
  
    fadeOut(element) 
    {
      let opacity = 1;
  
      const fadeInterval = setInterval(() => 
      {
        if (opacity > 0) 
        {
          opacity -= 0.05;
          element.style.opacity = opacity;
        } 
        else 
        {
          clearInterval(fadeInterval);
          element.style.display = "none";
        }
      }, 100);
   }///////////////////////////////////////////////////////////////////////   

   carousel() 
   {
     this.goToNext();
     this.timeout = setTimeout(() => 
     {
       this.carousel();
     }, 3000);
   }///////////////////////////////////////////////////////////////////////
  }
  