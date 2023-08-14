//get the image element
const pic-1 = document.getElementById("container");
const pic-2 = document.getElementById("container");

//funtion to move the images
function moveImages(){
    //move image to the right
    pic-1.style.transform = "translateX(200px)";
    //move image to the right
    pic-2.style.transform = "translateX(-200px)";
}
// call the move image function after a delay
setTimeout(moveImages, 1000);