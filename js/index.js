function getSliderVal(){

}

function changeImage(){

}

function changeText(){

}

function updateStats(){

}

function getMousePos(){

}


const images = document.getElementsByClassName('movable');
const shiftSpeed = 30;

// Add the event listener to the document
document.addEventListener('mousemove', handleMousemove);

function handleMousemove(event) {
    // Calculate the horizontal and vertical distances between the mouse and the center of each image
    const mouseX = event.clientX;
    const mouseY = event.clientY;
  
    Array.from(images).forEach(image => {
      const imageCenterX = image.offsetLeft + (image.offsetWidth / 2);
      const imageCenterY = image.offsetTop + (image.offsetHeight / 2);
      const distanceX = mouseX - imageCenterX;
      const distanceY = mouseY - imageCenterY;
  
      // Calculate the amount to shift the image
      const shiftX = (distanceX / shiftSpeed) * -1;
      const shiftY = (distanceY / shiftSpeed) * -1;
  
      // Apply the shift to the image's position
      image.style.transform = `translate(${shiftX}px, ${shiftY}px)`;
    });
  }