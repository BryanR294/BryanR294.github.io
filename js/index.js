document.addEventListener('mousemove', handleMousemove);
// document.addEventListener('mousemove',moveCustomCursor);

function handleMousemove(event) {
  // Calculate the horizontal and vertical distances between the mouse and the center of each image
  const images = document.getElementsByClassName('movable');
  const shiftSpeed = 100;
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const resetSpeed = 10;

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

    // Check if the mouse is outside the window bounds
    const isMouseOutsideWindow =
      mouseX < 0 ||
      mouseY < 0 ||
      mouseX > window.innerWidth ||
      mouseY > window.innerHeight;

    // Slowly move the image back to its original position if the mouse is outside the window
    if (isMouseOutsideWindow) {
      const resetShiftX = (image.offsetLeft - imageCenterX) / resetSpeed;
      const resetShiftY = (image.offsetTop - imageCenterY) / resetSpeed;

      image.style.transform = `translate(${resetShiftX}px, ${resetShiftY}px)`;
    }
  });
}

function moveCustomCursor(){
  const pointer = document.getElementById("cursor");
  cursor.style.transform = `translate(${mouseX - 20}px, ${mouseY - 20}px)`;
}

let imageIndex = 0;

function previousImage(){
  const leftBtn = document.getElementById("Left");
  const rightBtn = document.getElementById("Right");
  const text = document.getElementById("text");
  const nebula = document.getElementById("nebula");
  const protostar = document.getElementById("protostar");
  const star = document.getElementById("reg-star");
  const supergiant = document.getElementById("supergiant");
  const supernova = document.getElementById("supernova");
  const blackhole = document.getElementById("blackhole");
  if(imageIndex === 4){
    blackhole.style.display = "none";
    supernova.style.display = "block";
    title.innerText = "Supernova";
    rightBtn.style.display = "block";
    imageIndex--;
  }
  else if(imageIndex === 3){
    supernova.style.display = "none";
    supergiant.style.display = "block";
    title.innerText = "Supergiant";
    imageIndex--;
  }
  else if(imageIndex === 2){
    supergiant.style.display = "none";
    star.style.display = "block";
    title.innerText = "Star";
    imageIndex--;
  }
  else if(imageIndex === 1){
    star.style.display = "none";
    protostar.style.display = "block";
    title.innerText = "Protostar";

    imageIndex--;
  }
  else{
    protostar.style.display = "none";
    nebula.style.display = "block";
    title.innerText = "Nebula";
    title.style.fontSize = "25vw";
    // title.style.top = "3%";
    // title.style.left = "10%";
  }
}

function nextImage(){
  const leftBtn = document.getElementById("Left");
  const rightBtn = document.getElementById("Right");
  const title = document.getElementById("title");
  const nebula = document.getElementById("nebula");
  const protostar = document.getElementById("protostar");
  const star = document.getElementById("reg-star");
  const supergiant = document.getElementById("supergiant");
  const supernova = document.getElementById("supernova");
  const blackhole = document.getElementById("blackhole");
  if(imageIndex === 0){
    nebula.style.display = "none";
    protostar.style.display = "block";
    title.innerText = "Protostar";
    title.style.fontSize = "18vw";
    // title.style.top = "20%";
    imageIndex++;
  }
  else if(imageIndex === 1){
    protostar.style.display = "none";
    star.style.display = "block";
    title.innerText = "Star";
    imageIndex++;
  }
  else if(imageIndex === 2){
    star.style.display = "none";
    supergiant.style.display = "block";
    title.innerText = "Supergiant";
    imageIndex++;
  }
  else if(imageIndex === 3){
    supergiant.style.display = "none";
    supernova.style.display = "block";
    title.innerText = "Supernova";
    imageIndex++;
  }
  else{
    supernova.style.display = "none";
    blackhole.style.display = "block";
    title.innerText = "blackhole";
    rightBtn.style.display = "none";
  }
}
