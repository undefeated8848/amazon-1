const imageDiv = document.querySelectorAll(".images");
const images = document.querySelector(".images-contain") 

images.addEventListener("wheel" , function(e){
 e.stopPropagation();
 images.scrollLeft += e.deltaY;
//  images.scrollRight += e.deltaX;
 images.style.scrollBehavior = "auto";
})