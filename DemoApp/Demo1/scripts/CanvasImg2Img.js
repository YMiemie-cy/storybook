function canvasImg2Img() {
  const imageDataURL = document
    .querySelector(".tool-canvas")
    .toDataURL("image/png");
  sd.img2img.run(imageDataURL);
}

// function CanvasImg2Img() {
//   const ImageDataURL = document
//     .querySelector(".tool-canvas")
//     .toDataURL("image/png");
//   SD.Img2Img.run(ImageDataURL);
// }
