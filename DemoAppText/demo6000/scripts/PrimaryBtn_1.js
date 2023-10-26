let ButtonScript = new UIComponent("PrimaryBtn_1");
let StableDiffusion = new Finalize_SD();

ButtonScript.click(() => {
  StableDiffusion.Text2Img.run({
    output: "ImgViewer_3",
    choiceColumnElement: "ChoiceColumn_1",
    outputNumber: "ParameterBlock_1",
    inputElement: "ImgLoader_1",
  });
});
