let ButtonScript = new UIComponent("PrimaryBtn_1");
let StableDiffusion = new Finalize_SD();

ButtonScript.click(() => {
  StableDiffusion.Text2Img.run({
    output: "ImgViewer_1",
    choiceColumnElement: "ChoiceColumn_1",

    inputElement: "ImgLoader_1",
  });
});
