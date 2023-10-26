{
  let StableDiffusion = new Finalize_SD();
  console.log("StableDiffusion", StableDiffusion, manifest);
  StableDiffusion.generate();

  document
    .querySelector("#Button-Important_1")
    .addEventListener("click", () => {
      finaliaze.loaderPage("DemoAppText/demo1/page.json");
    });
}
