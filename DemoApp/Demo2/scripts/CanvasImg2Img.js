function canvasImg2Img() {
  const imageDataURL = document
    .querySelector(".tool-canvas")
    .toDataURL("image/png");
  sd.img2img.run(imageDataURL);
}
