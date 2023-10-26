let ButtonScript = new UIComponent("Button_1");
let StableDiffusion = new Finalize_SD();

ButtonScript.click(() => {
  StableDiffusion.Text2Img.run({
    output: "ImgViewer_1",
    prompt: "Input_1",
    outputNumber: "ParameterBlock_1",
  });
});

