export function RenderSlides() 
{
    const slideShow = document.createElement("div");    
    slideShow.classList.add("slideshow");
  
    const slides = [
      {
        id: 1,
        title: "Slide 1",
        image: "/images/c1.jpg",
        caption: "Slide 1 caption"
      },
      {
        id: 2,
        title: "Slide 2",
        image: "/images/c2.jpg",
        caption: "Slide 2 caption"
      },
      {
        id: 3,
        title: "Slide 3",
        image: "/images/c3.jpg",
        caption: "Slide 3 caption"
      }
    ];
  
    slides.forEach(slideData => 
    {
      const slide = document.createElement("div");
      slide.classList.add("mySlides");
  
      const image = document.createElement("img");
      image.src = slideData.image;
      image.classList.add("slideImage");
  
      const textOverlay = document.createElement("div");
      textOverlay.classList.add("text");
      textOverlay.textContent = slideData.caption;
  
      slide.appendChild(image);
      slide.appendChild(textOverlay);  
      slideShow.appendChild(slide);
    });
  
    return slideShow;
  }
  