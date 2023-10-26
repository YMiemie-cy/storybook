let ButtonScript = new UIComponent("PrimaryBtn_1");
let StableDiffusion = new Finalize_SD();

ButtonScript.click(() => {
  console.log("111111");
  StableDiffusion.Text2Img.run({
    output: "ImgViewer_1",
    outputNumber: "ParameterBlock_1",
    inputElement: "ImgLoader_1",
    prompt: "Input_1",
  });
});
