// 全局变量
var a = "";

// 局部变量
{
  let ButtonScript = new UIComponent("Button-Important_1");
  let StableDiffusion = new Finalize_SD();

  ButtonScript.on_loading(() => {
    console.log("Loading...");
    StableDiffusion.generate();
  });

  ButtonScript.on_beforeRendering(() => {
    console.log("Rendering...");
  });

  ButtonScript.on_rendering(() => {
    console.log("Rendering...");
    ButtonScript.click(() => {
      let prompt = document.querySelector("#Input-Input_1 input");
      let promptArr = prompt.value.split(",");
      let ans = "";
      promptArr.forEach((item) => {
        ans += `(${item}:1.5),`;
      });

      let outputNumber = document.querySelector("#ParameterBlock_1 input");

      Object.assign(StableDiffusion.Text2Img.params.data, {
        prompt:
          "sanachan, (masterpiece, top quality, best quality, official art, beautiful and aesthetic:1.2), (1girl:1.3), extremely detailed,(fractal art:1.1),(colorful:1.1)(flowers:1.3),highest detailed,(zentangle:1.2), (dynamic pose), (abstract background:1.3), (many colors:1.4), ,(earrings), (feathers:1.5)," +
          ans,
        batch_size: Number(outputNumber.value),

        negative_prompt:
          "(worst quality, low quality:2), nsfw, logo, signature, watermark, text, easynegative, (badhandv4), verybadimagenegative_v1.3, ng_deepnegative_v1_75t",

        hr_resize_x: 512,

        hr_resize_y: 768,

        width: 512,

        height: 768,

        cfg_scale: 6.5,

        seed: 3678817358,

        sampler_name: "DPM++ 2M Karras",

        n_iter: 1,

        denoising_strength: 0.55,

        enable_hr: true,

        hr_scale: 2,

        hr_upscaler: "R-ESRGAN 4x+ Anime6B",

        hr_second_pass_steps: 15,
      });
      // console.log(StableDiffusion.Text2Img.params.data);
      // StableDiffusion.Text2Img.params.data.prompt = prompt.value;
      // StableDiffusion.Text2Img.params.data.batch_size = Number(outputNumber.value);
      StableDiffusion.Text2Img.run("ImageDisplay_1");
    });
  });

  ButtonScript.on_end(() => {
    console.log("Run ended.");
    StableDiffusion.close();
  });
}
