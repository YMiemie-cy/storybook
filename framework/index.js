class BaseEngine {
  constructor() {
    this.currentLive = null;
    this.error = null;
  }

  on_loading(callback) {
    callback();
    console.log("Loading...");
  }

  on_beforeRendering(callback) {
    callback();
    console.log("Rendering...");
  }

  on_rendering(callback) {
    callback();
    console.log("Rendering...");
  }

  on_end(callback) {
    callback();
    console.log("Run ended.");
  }
}

class UIComponent extends BaseEngine {
  constructor(element) {
    super();
    this.element = element;
  }
  upload() {}
  click(callback) {
    let ele = document.querySelector(`#${this.element}`);
    ele.addEventListener("click", () => {
      callback();
    });
  }
  getNode() {
    // document.querySelector()
  }
  init() {}
}

class Finalize_AI extends BaseEngine {
  constructor() {
    super();
  }
  startDrawing() {}
}

class Finalize_SD extends Finalize_AI {
  constructor() {
    super();
    this.PromptManagement = [];
    this.MiniaturesManagement = {
      embedding: [],
      hypernetwork: [],
      checkpoint: [],
      lora: [],
    };
    this.load = {
      params: {
        model: "xxxx",
        weight: "0.5",
      },
      BackPromptWords: () => {},
      LocalRepaint: () => {},
    };
    this.ControlNet = {
      params: {
        pretreatment: "xxx",
        model: "xxx",
      },
    };
    this.Text2Img = {
      params: {
        data: {
          enable_hr: false,
          denoising_strength: 0,
          firstphase_width: 0,
          firstphase_height: 0,
          hr_scale: 2,
          hr_upscaler: null,
          hr_second_pass_steps: 0,
          hr_resize_x: 0,
          hr_resize_y: 0,
          hr_sampler_name: null,
          hr_prompt: "",
          hr_negative_prompt: "",
          prompt: "",
          styles: ["string"],
          seed: -1,
          subseed: -1,
          subseed_strength: 0,
          seed_resize_from_h: -1,
          seed_resize_from_w: -1,
          sampler_name: null,
          batch_size: 1,
          n_iter: 1,
          steps: 20,
          cfg_scale: 7,
          width: 512,
          height: 512,
          restore_faces: false,
          tiling: false,
          do_not_save_samples: false,
          do_not_save_grid: false,
          negative_prompt: null,
          eta: 0,
          s_min_uncond: 0,
          s_churn: 0,
          s_tmax: 0,
          s_tmin: 0,
          s_noise: 1,
          override_settings: {},
          override_settings_restore_afterwards: true,
          script_args: [],
          sampler_index: "Euler",
          script_name: null,
          send_images: true,
          save_images: false,
          alwayson_scripts: {},
        },

        vae: "xxx",
      },
      run: async (data) => {
        let element = document.querySelector(`#${data.output}`);
        var outputNumber = 1;
        let labelText = document.querySelector("#Label_1").innerText;

        console.log("element", element);
        element.querySelector(".primary-image").innerHTML = "";
        element.querySelector(".image-list").innerHTML = "";

        if (data.prompt) {
          let prompt = document.querySelector(`#${data.prompt} input`);
          console.log("prompt", prompt);
          let promptArr = prompt.value.split(",");
          var ans = "";
          promptArr.forEach((item) => {
            // ans += `(${item}:1.5),`;
            ans += `${item}`;
          });
        }
        if (data.outputNumber) {
          outputNumber = Number(
            document.querySelector(`#${data.outputNumber} input`).value
          );
        }
        if (data.inputElement) {
          var inputImage;
          if (document.querySelector(`#${data.inputElement} canvas`)) {
            inputImage = document
              .querySelector(`#${data.inputElement} canvas`)
              .toDataURL("image/png");
          } else {
            inputImage = document.querySelector(
              `#${data.inputElement} .image-container img`
            ).src;
          }
        }
        if (data.choiceColumnElement) {
          var choiceColumnElement = document.querySelector(
            `#${data.choiceColumnElement} .active`
          );
          if (labelText == "ArchiStyler") {
            switch (choiceColumnElement.getAttribute("data-name")) {
              case "0":
                Object.assign(this.Text2Img.params.data, {
                  override_settings: {
                    sd_model_checkpoint: "MoyouArtificial_v10502g [b6c1edcbe9]",
                    // sd_model_checkpoint: "sd_xl_base_1.0.safetensors",
                  },
                  prompt:
                    "Masterpiece,best quality, 8k, modern architectural style, photorealism. ultra detailed photo frame. single building. architectural rendering.human view, day view, MIR rendering, high-quality, architectural photographybest quality, architectural photography, photo realism <lora:add detail:0.6><lora:more details:0.5> <lora:ouzhou:1>",
                  batch_size: outputNumber,

                  negative_prompt:
                    "signature, soft, blurry, drawing, sketch, poor quality, ugly, texttype, word, logo, pixelated, low resolution, saturated, high contrast,oversharpened",

                  // hr_resize_x: 512,

                  // hr_resize_y: 512,

                  width: 512,

                  height: 512,

                  cfg_scale: 7,

                  seed: -1,

                  sampler_index: "DPM++ 2M SDE Karras",

                  n_iter: 1,

                  denoising_strength: 0.55,

                  enable_hr: true,

                  hr_scale: 2,

                  hr_upscaler: "4x-UltraSharp",

                  hr_second_pass_steps: 20,
                  alwayson_scripts: {
                    ControlNet: {
                      args: [
                        {
                          enabled: true,
                          module: "canny",
                          model: "control_canny-fp16 [e3fe7712]",
                          weight: 1,
                          input_image: inputImage,
                          //   // mask: null,
                          //   // invert_image: false,
                          //   // resize_mode: 0,
                          //   // rgbbgr_mode: false,
                          //   // lowvram: false,
                          //   // processor_res: 0,
                          //   // threshold_a: 64,
                          //   // threshold_b: 64,
                          //   // guidance_start: 0,
                          //   // guidance_end: 1,
                          //   // guessmode: false,
                          resize_mode: "Crop and Resize",
                          low_vram: false,
                          processor_res: 512,
                          threshold_a: 100,
                          threshold_b: 200,
                          guidance_start: 0,
                          guidance_end: 1,
                          pixel_perfect: false,
                          control_mode: "Balanced",
                        },
                      ],
                    },
                  },
                });
                break;
              case "1":
                Object.assign(this.Text2Img.params.data, {
                  override_settings: {
                    sd_model_checkpoint: "MoyouArtificial_v10502g [b6c1edcbe9]",
                    // sd_model_checkpoint: "sd_xl_base_1.0.safetensors",
                  },
                  prompt:
                    "Masterpiece,best quality, 8k, modern architectural style, photorealism. ultra detailed photo frame. single building. architectural rendering.human view, day view, MIR rendering, high-quality, architectural photographybest quality, architectural photography, photo realism <lora:add detail:0.6><lora:more details:0.5> <lora:classical_architecture_style:1>",
                  batch_size: outputNumber,

                  negative_prompt:
                    "signature, soft, blurry, drawing, sketch, poor quality, ugly, texttype, word, logo, pixelated, low resolution, saturated, high contrast,oversharpened",

                  // hr_resize_x: 512,

                  // hr_resize_y: 512,

                  width: 512,

                  height: 512,

                  cfg_scale: 7,

                  seed: -1,

                  sampler_index: "DPM++ 2M SDE Karras",

                  n_iter: 1,

                  denoising_strength: 0.55,

                  enable_hr: true,

                  hr_scale: 2,

                  hr_upscaler: "4x-UltraSharp",

                  hr_second_pass_steps: 20,
                  alwayson_scripts: {
                    ControlNet: {
                      args: [
                        {
                          enabled: true,
                          module: "canny",
                          model: "control_canny-fp16 [e3fe7712]",
                          weight: 1,
                          input_image: inputImage,
                          //   // mask: null,
                          //   // invert_image: false,
                          //   // resize_mode: 0,
                          //   // rgbbgr_mode: false,
                          //   // lowvram: false,
                          //   // processor_res: 0,
                          //   // threshold_a: 64,
                          //   // threshold_b: 64,
                          //   // guidance_start: 0,
                          //   // guidance_end: 1,
                          //   // guessmode: false,
                          resize_mode: "Crop and Resize",
                          low_vram: false,
                          processor_res: 512,
                          threshold_a: 100,
                          threshold_b: 200,
                          guidance_start: 0,
                          guidance_end: 1,
                          pixel_perfect: false,
                          control_mode: "Balanced",
                        },
                      ],
                    },
                  },
                });
                break;
              case "2":
                Object.assign(this.Text2Img.params.data, {
                  override_settings: {
                    sd_model_checkpoint: "MoyouArtificial_v10502g [b6c1edcbe9]",
                    // sd_model_checkpoint: "sd_xl_base_1.0.safetensors",
                  },
                  prompt:
                    "Masterpiece,best quality, 8k, modern architectural style, photorealism. ultra detailed photo frame. single building. architectural rendering.human view, day view, MIR rendering, high-quality, architectural photographybest quality, architectural photography, photo realism <lora:add detail:0.6><lora:more details:0.5>  <lora:UIAmg1.0:1>",
                  batch_size: outputNumber,

                  negative_prompt:
                    "signature, soft, blurry, drawing, sketch, poor quality, ugly, texttype, word, logo, pixelated, low resolution, saturated, high contrast,oversharpened",

                  // hr_resize_x: 512,

                  // hr_resize_y: 512,

                  width: 512,

                  height: 512,

                  cfg_scale: 7,

                  seed: -1,

                  sampler_index: "DPM++ 2S a Karras",

                  n_iter: 1,

                  denoising_strength: 0.55,

                  enable_hr: true,

                  hr_scale: 2,

                  hr_upscaler: "4x-UltraSharp",

                  hr_second_pass_steps: 20,
                  alwayson_scripts: {
                    ControlNet: {
                      args: [
                        {
                          enabled: true,
                          module: "canny",
                          model: "control_canny-fp16 [e3fe7712]",
                          weight: 1,
                          input_image: inputImage,
                          //   // mask: null,
                          //   // invert_image: false,
                          //   // resize_mode: 0,
                          //   // rgbbgr_mode: false,
                          //   // lowvram: false,
                          //   // processor_res: 0,
                          //   // threshold_a: 64,
                          //   // threshold_b: 64,
                          //   // guidance_start: 0,
                          //   // guidance_end: 1,
                          //   // guessmode: false,
                          resize_mode: "Crop and Resize",
                          low_vram: false,
                          processor_res: 512,
                          threshold_a: 100,
                          threshold_b: 200,
                          guidance_start: 0,
                          guidance_end: 1,
                          pixel_perfect: false,
                          control_mode: "Balanced",
                        },
                      ],
                    },
                  },
                });
                break;
              case "3":
                Object.assign(this.Text2Img.params.data, {
                  override_settings: {
                    sd_model_checkpoint: "MoyouArtificial_v10502g [b6c1edcbe9]",
                    // sd_model_checkpoint: "sd_xl_base_1.0.safetensors",
                  },
                  prompt:
                    "Masterpiece,best quality, 8k, modern architectural style, photorealism. ultra detailed photo frame. single building. architectural rendering.human view, day view, MIR rendering, high-quality, architectural photographybest quality, architectural photography, photo realism <lora:add detail:0.6><lora:more details:0.5> <lora:XSarchitectural-27Typeofcommodity:1>",
                  batch_size: outputNumber,

                  negative_prompt:
                    "signature, soft, blurry, drawing, sketch, poor quality, ugly, texttype, word, logo, pixelated, low resolution, saturated, high contrast,oversharpened",

                  // hr_resize_x: 512,

                  // hr_resize_y: 512,

                  width: 512,

                  height: 512,

                  cfg_scale: 7,

                  seed: -1,

                  sampler_index: "DPM++ 2M SDE Karras",

                  n_iter: 1,

                  denoising_strength: 0.55,

                  enable_hr: true,

                  hr_scale: 2,

                  hr_upscaler: "4x-UltraSharp",

                  hr_second_pass_steps: 20,
                  alwayson_scripts: {
                    ControlNet: {
                      args: [
                        {
                          enabled: true,
                          module: "canny",
                          model: "control_canny-fp16 [e3fe7712]",
                          weight: 1,
                          input_image: inputImage,
                          //   // mask: null,
                          //   // invert_image: false,
                          //   // resize_mode: 0,
                          //   // rgbbgr_mode: false,
                          //   // lowvram: false,
                          //   // processor_res: 0,
                          //   // threshold_a: 64,
                          //   // threshold_b: 64,
                          //   // guidance_start: 0,
                          //   // guidance_end: 1,
                          //   // guessmode: false,
                          resize_mode: "Crop and Resize",
                          low_vram: false,
                          processor_res: 512,
                          threshold_a: 100,
                          threshold_b: 200,
                          guidance_start: 0,
                          guidance_end: 1,
                          pixel_perfect: false,
                          control_mode: "Balanced",
                        },
                      ],
                    },
                  },
                });
                break;
              case "4":
                Object.assign(this.Text2Img.params.data, {
                  override_settings: {
                    sd_model_checkpoint: "MoyouArtificial_v10502g [b6c1edcbe9]",
                    // sd_model_checkpoint: "sd_xl_base_1.0.safetensors",
                  },
                  prompt:
                    "Masterpiece,best quality, 8k, modern architectural style, photorealism. ultra detailed photo frame. single building. architectural rendering.human view, day view, MIR rendering, high-quality, architectural photographybest quality, architectural photography, photo realism <lora:add detail:0.6><lora:more details:0.5> <lora:NH-6:1>",
                  batch_size: outputNumber,

                  negative_prompt:
                    "signature, soft, blurry, drawing, sketch, poor quality, ugly, texttype, word, logo, pixelated, low resolution, saturated, high contrast,oversharpened",

                  // hr_resize_x: 512,

                  // hr_resize_y: 512,

                  width: 512,

                  height: 512,

                  cfg_scale: 7,

                  seed: -1,

                  sampler_index: "DPM++ 2M SDE Karras",

                  n_iter: 1,

                  denoising_strength: 0.55,

                  enable_hr: true,

                  hr_scale: 2,

                  hr_upscaler: "4x-UltraSharp",

                  hr_second_pass_steps: 20,
                  alwayson_scripts: {
                    ControlNet: {
                      args: [
                        {
                          enabled: true,
                          module: "canny",
                          model: "control_canny-fp16 [e3fe7712]",
                          weight: 1,
                          input_image: inputImage,
                          //   // mask: null,
                          //   // invert_image: false,
                          //   // resize_mode: 0,
                          //   // rgbbgr_mode: false,
                          //   // lowvram: false,
                          //   // processor_res: 0,
                          //   // threshold_a: 64,
                          //   // threshold_b: 64,
                          //   // guidance_start: 0,
                          //   // guidance_end: 1,
                          //   // guessmode: false,
                          resize_mode: "Crop and Resize",
                          low_vram: false,
                          processor_res: 512,
                          threshold_a: 100,
                          threshold_b: 200,
                          guidance_start: 0,
                          guidance_end: 1,
                          pixel_perfect: false,
                          control_mode: "Balanced",
                        },
                      ],
                    },
                  },
                });
                break;
              case "5":
                Object.assign(this.Text2Img.params.data, {
                  override_settings: {
                    sd_model_checkpoint: "MoyouArtificial_v10502g [b6c1edcbe9]",
                    // sd_model_checkpoint: "sd_xl_base_1.0.safetensors",
                  },

                  // script_args: [0, true, true, "LoRA", "NH-4:1", 1, 1],
                  // sampler_name: "MoyouArtificial_v10502g.safetensors",
                  // sampler_name: "sd_xl_base_1.0",
                  prompt:
                    "Masterpiece,best quality, 8k, modern architectural style, photorealism. ultra detailed photo frame. single building. architectural rendering.human view, day view, MIR rendering, high-quality, architectural photographybest quality, architectural photography, photo realism <lora:add detail:0.6><lora:more details:0.5>  <lora:ouzhou:1> <lora:NH-4:1>",
                  batch_size: outputNumber,

                  negative_prompt:
                    "signature, soft, blurry, drawing, sketch, poor quality, ugly, texttype, word, logo, pixelated, low resolution, saturated, high contrast,oversharpened",

                  // hr_resize_x: 512,

                  // hr_resize_y: 512,

                  width: 512,

                  height: 512,

                  cfg_scale: 7,

                  seed: -1,

                  sampler_index: "DPM++ 2S a Karras",

                  n_iter: 1,

                  denoising_strength: 0.7,

                  enable_hr: true,

                  hr_scale: 2,

                  hr_upscaler: "4x-UltraSharp",

                  hr_second_pass_steps: 20,
                  alwayson_scripts: {
                    ControlNet: {
                      args: [
                        {
                          enabled: true,
                          module: "canny",
                          model: "control_canny-fp16 [e3fe7712]",
                          weight: 1,
                          input_image: inputImage,
                          // mask: null,
                          // invert_image: false,
                          // resize_mode: 0,
                          // rgbbgr_mode: false,
                          // lowvram: false,
                          // processor_res: 0,
                          // threshold_a: 64,
                          // threshold_b: 64,
                          // guidance_start: 0,
                          // guidance_end: 1,
                          // guessmode: false,
                          resize_mode: "Crop and Resize",
                          low_vram: false,
                          processor_res: 512,
                          threshold_a: 100,
                          threshold_b: 200,
                          guidance_start: 0,
                          guidance_end: 1,
                          pixel_perfect: false,
                          control_mode: "Balanced",
                        },
                      ],
                    },
                  },
                });
                break;
            }
          }

          if (labelText == "ColorChameleon") {
            Object.assign(this.Text2Img.params.data, {
              override_settings: {
                sd_model_checkpoint: "MoyouArtificial_v10502g [b6c1edcbe9]",
                // sd_model_checkpoint: "sd_xl_base_1.0.safetensors",
              },

              batch_size: outputNumber,

              negative_prompt: "nsfw,low quality,worst quality,normal quality",

              // hr_resize_x: 512,

              // hr_resize_y: 512,

              width: 540,

              height: 720.5,

              cfg_scale: 7,

              seed: -1,

              sampler_index: "DPM++ SDE Karras",
              // sampler_index: "DPM++ 2S a Karras",

              n_iter: 1,

              denoising_strength: 0.55,

              enable_hr: true,

              hr_scale: 2,

              hr_upscaler: "BSRGAN",

              hr_second_pass_steps: 20,
              alwayson_scripts: {
                ControlNet: {
                  args: [
                    {
                      enabled: true,
                      module: "recolor_luminance",
                      model: "ioclab_sd15_recolor [6641f3c6]",
                      weight: 1,
                      input_image: inputImage,
                      //   // mask: null,
                      //   // invert_image: false,
                      //   // resize_mode: 0,
                      //   // rgbbgr_mode: false,
                      //   // lowvram: false,
                      //   // processor_res: 0,
                      //   // threshold_a: 64,
                      //   // threshold_b: 64,
                      //   // guidance_start: 0,
                      //   // guidance_end: 1,
                      //   // guessmode: false,
                      resize_mode: "Crop and Resize",
                      low_vram: false,
                      processor_res: 512,
                      gamma_correction: 1,
                      guidance_start: 0,
                      guidance_end: 1,
                      pixel_perfect: true,
                      control_mode: "Balanced",
                    },
                  ],
                },
              },
            });
            switch (choiceColumnElement.getAttribute("data-name")) {
              case "0":
                Object.assign(this.Text2Img.params.data, {
                  prompt:
                    "realistic, (photorealistic:1.4),masterpiece, best quality, 1girl, solo,long hair,(black hair:1),hair_only",
                });
                break;
              case "1":
                Object.assign(this.Text2Img.params.data, {
                  prompt:
                    "realistic, (photorealistic:1.4),masterpiece, best quality, 1girl, solo,long hair,(blue hair:1),hair_only",
                });
                break;
              case "2":
                Object.assign(this.Text2Img.params.data, {
                  prompt:
                    "realistic, (photorealistic:1.4),masterpiece, best quality, 1girl, solo,long hair,(orange hair:1),hair_only",
                });
                break;
              case "3":
                Object.assign(this.Text2Img.params.data, {
                  prompt:
                    "realistic, (photorealistic:1.4),masterpiece, best quality, 1girl, solo,long hair,(tan hair:1),hair only",
                });
                break;
              case "4":
                Object.assign(this.Text2Img.params.data, {
                  prompt:
                    "realistic, (photorealistic:1.4),masterpiece, best quality, 1girl, solo,long hair,(purple hair:1),hair_only",
                });
                break;
              case "5":
                Object.assign(this.Text2Img.params.data, {
                  prompt:
                    "realistic, (photorealistic:1.4),masterpiece, best quality, 1girl, solo,long hair,(pink hair:1),hair_only",
                });
                break;
            }
          }
        }

        /** */
        if (labelText == "Sketch2Pic") {
          Object.assign(this.Text2Img.params.data, {
            // sampler_name: "soranix_v011bFP16VAE.safetensors",
            // prompt:
            //   "sanachan, (masterpiece, top quality, best quality, official art, beautiful and aesthetic:1.2), (1girl:1.3), extremely detailed,(fractal art:1.1),(colorful:1.1)(flowers:1.3),highest detailed,(zentangle:1.2), (dynamic pose), (abstract background:1.3), (many colors:1.4), ,(earrings), (feathers:1.5)," +
            //   ans,
            // batch_size: Number(outputNumber.value),

            // negative_prompt:
            //   "(worst quality, low quality:2), nsfw, logo, signature, watermark, text, easynegative, (badhandv4), verybadimagenegative_v1.3, ng_deepnegative_v1_75t",

            // hr_resize_x: 512,

            // hr_resize_y: 768,

            // width: 512,

            // height: 768,

            // cfg_scale: 6.5,

            // seed: 3678817358,

            // sampler_name: "DPM++ 2M Karras",

            // n_iter: 1,

            // denoising_strength: 0.55,

            // enable_hr: true,

            // hr_scale: 2,

            // hr_upscaler: "R-ESRGAN 4x+ Anime6B",

            // hr_second_pass_steps: 15,
            // sampler_name: "v1-5-pruned-emaonly.safetensors",
            override_settings: {
              sd_model_checkpoint: "MoyouArtificial_v10502g [b6c1edcbe9]",
              // sd_model_checkpoint: "sd_xl_base_1.0.safetensors",
            },
            prompt: "" + ans,
            batch_size: outputNumber,

            negative_prompt: "poor quality, ugly",

            // hr_resize_x: 512,

            // hr_resize_y: 512,

            width: 512,

            height: 512,

            cfg_scale: 7,

            seed: -1,

            sampler_index: "DPM++ SDE Karras",

            n_iter: 1,

            denoising_strength: 0.55,

            enable_hr: true,

            hr_scale: 2,

            hr_upscaler: "4x-UltraSharp",

            hr_second_pass_steps: 20,
            alwayson_scripts: {
              ControlNet: {
                args: [
                  {
                    enabled: true,
                    module: "scribble_pidinet",
                    model: "control_v11p_sd15_scribble [d4ba51ff]",
                    weight: 1,
                    input_image: inputImage,
                    //   // mask: null,
                    //   // invert_image: false,
                    //   // resize_mode: 0,
                    //   // rgbbgr_mode: false,
                    //   // lowvram: false,
                    //   // processor_res: 0,
                    //   // threshold_a: 64,
                    //   // threshold_b: 64,
                    //   // guidance_start: 0,
                    //   // guidance_end: 1,
                    //   // guessmode: false,
                    resize_mode: "Crop and Resize",
                    low_vram: false,
                    processor_res: 512,
                    // threshold_a: 100,
                    // threshold_b: 200,
                    guidance_start: 0,
                    guidance_end: 1,
                    pixel_perfect: false,
                    control_mode: "Balanced",
                  },
                ],
              },
            },
          });
        }

        /** */

        let icon = element.querySelector(`.icon img`);
        icon.src = "./framework/Assets/loading.svg";
        icon.classList.add("loading");
        let p = document.createElement("p");
        p.style.color = "rgba(196, 198, 202, 1)";
        p.innerText = "Kindly wait a short while.";

        icon.parentNode.appendChild(p);

        /** */

        const apiUrl = "https://api.openai.com/v1/chat/completions";
        const prompt = "Hello, how are you?";
        const temperature = 0.7;
        const maxTokens = 100;
        const apiKey = "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"; // 替换为您的实际 API 密钥

        const requestData = {
          temperature: temperature,
          max_tokens: maxTokens,

          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "今天深圳天气怎么样" },
            // { role: "user", content: `${message}` },
          ],
        };

        const axiosConfig = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        };

        axios
          .post(apiUrl, JSON.stringify(requestData), axiosConfig)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });

        /** */

        /** */
        axios
          .post(
            "http://192.168.9.131:7860/tagger/v1/interrogate",

            { image: inputImage, model: "wd14-vit-v2-git", threshold: 0.35 }
          )
          .then((res) => {
            let str = Object.keys(res.data.caption).join(",");
            console.log("tagger", str);
          });
        /** */

        axios
          .post(
            "http://192.168.9.131:7860/sdapi/v1/txt2img",
            // "http://127.0.0.1:7860/sdapi/v1/txt2img",
            this.Text2Img.params.data
          )
          .then(async (res) => {
            // let res = {
            //   data: {
            //     images: ["./DemoAppText/Demo4000/assets/pic2/"],
            //   },
            // };
            icon.parentNode.style.zIndex = "1";
            icon.src = "./framework/Assets/imageDisplay-icon.svg";
            icon.classList.remove("loading");
            const lastChild = icon.parentNode.lastElementChild;
            if (lastChild) {
              icon.parentNode.removeChild(lastChild);
            }
            const primaryImage = element.querySelector(" .primary-image");
            const imageList = element.querySelector(" .image-list");
            const imageContainer = element.querySelector(" .image-container");
            const imageUploaderInputContain = element.querySelector(
              ".imageUploader-input-contain"
            );
            console.log("Number(outputNumber.value) > 1", outputNumber);
            if (res.data.images.length > 1 && outputNumber > 1) {
              /** 多图片显示 */

              const selectedFiles = res.data.images;

              if (selectedFiles.length > 0) {
                primaryImage.innerHTML = `<img style="border-radius: 2px;" src="data:image/png;base64,${selectedFiles[0]}" alt="Selected Image">`;
                imageContainer.style.height = "100%";
                imageUploaderInputContain.style.backgroundColor = "#252831";

                primaryImage.style.width = "100%";
                imageList.style.width = "0%";
                if (selectedFiles.length === 1) {
                  primaryImage.style.width = "100%";
                  imageList.style.width = "0%";
                } else {
                  primaryImage.style.width = "83%";
                  imageList.style.width = "17%";
                }

                imageList.innerHTML = "";
                for (let i = 1; i < selectedFiles.length; i++) {
                  const div = document.createElement("div");
                  div.style.cssText = `width:100%;
                height:${Number(element.style.height.split("px")[0]) * 0.22}px;
                  `;

                  const img = document.createElement("img");
                  img.style.borderRadius = "2px";
                  img.src = "data:image/png;base64," + selectedFiles[i];
                  img.alt = `Image ${i + 1}`;
                  div.appendChild(img);
                  imageList.appendChild(div);
                }
              }
              imageUploaderInputContain
                .querySelectorAll("img")
                .forEach((item) => {
                  item.addEventListener("click", () => {
                    console.log(
                      "item.parentElement.class",
                      item.parentElement.class
                    );
                    if (item.parentNode.classList.contains("primary-image")) {
                    } else {
                      let tem = item.src;
                      item.src = primaryImage.querySelector("img").src;
                      primaryImage.querySelector("img").src = tem;
                    }
                  });
                });
            } else {
              let div = document.createElement("div");
              div.style.cssText = `
                display:flex;
                justify-content:center;
                align-items:center;
                width:100%;
                height:100%;
                position:absolute;
                top:0;
                left:0;
                `;
              let img = document.createElement("img");
              img.id = "renderings";
              img.style.cssText = `
                  height: 99%;
                  width: 99%;
                  position: absolute;
                  border-radius: 4px;
                  overflow: hidden;
              `;
              img.src = "data:image/png;base64," + res.data.images[0];
              // img.src = res.data.images[0];
              div.appendChild(img);
              primaryImage.appendChild(div);
              console.log("div", div);
              imageContainer.style.height = "100%";
              imageUploaderInputContain.style.backgroundColor = "#252831";

              primaryImage.style.width = "100%";
              imageList.style.width = "0%";
              // element.appendChild(div);
            }

            await window.myApi
              .saveImagesFunction(res.data.images)
              .then(async () => {
                let imageData = Array.from(
                  await window.myApi.scanImageFunction()
                ).reverse();

                let imgList = element.querySelector(".contain-img");
                imgList.innerHTML = "";
                imageData.forEach((item, index) => {
                  let tem = document.createElement("div");
                  tem.style.cssText = `
                  width: 38px;
                  max-height: 38px;
                  margin: 4px 4px 0 0;
                  box-sizing: border-box;
                  padding: 2px;
                  overflow: hidden;
              
                  `;
                  tem.innerHTML = `
                  <img
                  src="${item}"
                  alt=""
                  style="height: 100%;width: 100%; border-radius: 2px;"
                />
                  `;
                  imgList.appendChild(tem);
                  if (index === 0) {
                    element.querySelector("#sidebar .show-img img").src = item;
                    imgList.querySelector("img").parentNode.style.border =
                      "dashed 1px white";
                    imgList.querySelector("img").parentNode.style.borderRadius =
                      "4px";
                  }
                });
                let imgs = element.querySelectorAll(".contain-img img");

                imgs.forEach((item) => {
                  item.style.cursor = "pointer";

                  item.addEventListener("click", () => {
                    imgs.forEach((item2) => {
                      item2.parentElement.style.border = "none";
                    });
                    item.parentElement.style.border = "dashed 1px white";
                    item.parentElement.style.borderRadius = "4px";

                    element.querySelector(".show-img img").src = item.src;
                  });
                });
              });
          })
          .catch((error) => {
            console.log(error);
          });
      },
    };
    this.Img2Img = {
      params: {
        data: {
          init_images: [],
          resize_mode: 0,
          denoising_strength: 0.75,
          image_cfg_scale: 0,
          mask: "",
          mask_blur: 0,
          mask_blur_x: 4,
          mask_blur_y: 4,
          inpainting_fill: 0,
          inpaint_full_res: true,
          inpaint_full_res_padding: 0,
          inpainting_mask_invert: 0,
          initial_noise_multiplier: 0,
          prompt: "",

          seed: -1,
          subseed: -1,
          subseed_strength: 0,
          seed_resize_from_h: -1,
          seed_resize_from_w: -1,

          batch_size: 1,
          n_iter: 1,
          steps: 20,
          cfg_scale: 7,
          width: 512,
          height: 512,
          restore_faces: false,
          tiling: false,
          do_not_save_samples: false,
          do_not_save_grid: false,
          negative_prompt: "null",
          eta: 0,
          s_min_uncond: 0,
          s_churn: 0,
          s_tmax: 0,
          s_tmin: 0,
          s_noise: 1,
          override_settings: {},
          override_settings_restore_afterwards: true,
          script_args: [],
          sampler_index: "Euler",
          include_init_images: false,

          send_images: true,
          save_images: false,
          alwayson_scripts: {},
        },
      },
      run: (data) => {
        let element = document.querySelector(`#${data.output}`);
        let imgWidth, imgHeight;
        var outputNumber = 1;

        console.log("element", element);
        element.querySelector(".primary-image").innerHTML = "";
        element.querySelector(".image-list").innerHTML = "";

        if (data.prompt) {
          let prompt = document.querySelector(`#${data.prompt} input`);
          console.log("prompt", prompt);
          let promptArr = prompt.value.split(",");
          var ans = "";
          promptArr.forEach((item) => {
            // ans += `(${item}:1.5),`;
            ans += `${item}`;
          });
        }
        if (data.outputNumber) {
          outputNumber = Number(
            document.querySelector(`#${data.outputNumber} input`).value
          );
        }
        if (data.inputElement) {
          var inputImage;
          var canvasImage;

          // canvasImage = document
          //   .querySelector(`#${data.inputElement} canvas`)
          //   .toDataURL("image/png");

          /** */

          // 获取原Canvas元素
          let originalCanvas = document.querySelector(
            `#${data.inputElement} canvas`
          );

          // 创建新Canvas元素
          let newCanvas = document.createElement("canvas");
          imgWidth = originalCanvas.width;
          imgHeight = originalCanvas.height;
          newCanvas.width = originalCanvas.width;
          newCanvas.height = originalCanvas.height;
          let newContext = newCanvas.getContext("2d");
          // 设置新Canvas的背景颜色为黑色
          newContext.fillStyle = "black";
          newContext.fillRect(0, 0, newCanvas.width, newCanvas.height);

          // 在新Canvas上绘制原Canvas的内容
          newContext.drawImage(originalCanvas, 0, 0);

          // 在新Canvas上执行颜色更改操作
          let imageData = newContext.getImageData(
            0,
            0,
            newCanvas.width,
            newCanvas.height
          );

          // 在这里进行颜色更改，例如将黑色改为白色
          // 遍历图像数据
          for (var i = 0; i < imageData.data.length; i += 4) {
            // 判断当前像素是否为线条部分（假设线条是非透明的）
            if (
              imageData.data[i] !== 0 &&
              imageData.data[i + 1] !== 0 &&
              imageData.data[i + 2] !== 0
            ) {
              // 设置当前像素为白色
              imageData.data[i] = 255; // 红色通道
              imageData.data[i + 1] = 255; // 绿色通道
              imageData.data[i + 2] = 255; // 蓝色通道
              // imageData.data[i + 3] 透明通道不需要改变，保持不变
            } else {
              // 设置当前像素为黑色
              imageData.data[i] = 0; // 红色通道
              imageData.data[i + 1] = 0; // 绿色通道
              imageData.data[i + 2] = 0; // 蓝色通道
              // imageData.data[i + 3] 透明通道不需要改变，保持不变
            }
          }

          // 更新Canvas的图像数据
          newContext.putImageData(imageData, 0, 0);

          // 将新Canvas的内容导出为Base64格式的数据
          canvasImage = newCanvas.toDataURL("image/png");

          /** */
          // 获取图像元素
          const imgElement = document.querySelector(
            `#${data.inputElement} .image-container img`
          );

          // 创建一个新的Canvas元素
          const inputImageCanvas = document.createElement("canvas");
          const inputImageContext = inputImageCanvas.getContext("2d");

          // 将Canvas的大小设置为图像的渲染尺寸
          inputImageCanvas.width = originalCanvas.width;
          inputImageCanvas.height = originalCanvas.height;

          // 在Canvas上绘制图像
          inputImageContext.drawImage(
            imgElement,
            0,
            0,
            originalCanvas.width,
            originalCanvas.height
          );

          // 获取Canvas上的Base64数据
          inputImage = inputImageCanvas.toDataURL("image/jpeg");
        }
        if (data.choiceColumnElement) {
          var choiceColumnElement = document.querySelector(
            `#${data.choiceColumnElement} .active`
          );
        }

        console.log("inputImage", inputImage, "canvasImage", canvasImage);
        /** */
        Object.assign(this.Img2Img.params.data, {
          init_images: [inputImage],
          mask: canvasImage,
          mask_blur: 4,
          resize_mode: 1,
          override_settings: {
            sd_model_checkpoint: "MoyouArtificial_v10502g [b6c1edcbe9]",
            // sd_model_checkpoint: "sd_xl_base_1.0.safetensors",
          },
          prompt: "" + ans,
          batch_size: outputNumber,

          negative_prompt: "poor quality, ugly",

          // hr_resize_x: 512,

          // hr_resize_y: 512,

          width: imgWidth,

          height: imgHeight,

          cfg_scale: 7,

          seed: -1,

          sampler_index: "DPM++ SDE Karras",

          n_iter: 1,

          denoising_strength: 0.55,

          enable_hr: true,

          hr_scale: 2,

          hr_upscaler: "4x-UltraSharp",

          hr_second_pass_steps: 20,
          alwayson_scripts: {
            // ControlNet: {
            //   args: [
            //     {
            //       enabled: true,
            //       module: "scribble_pidinet",
            //       model: "control_v11p_sd15_scribble [d4ba51ff]",
            //       weight: 1,
            //       input_image: inputImage,
            //       //   // mask: null,
            //       //   // invert_image: false,
            //       //   // resize_mode: 0,
            //       //   // rgbbgr_mode: false,
            //       //   // lowvram: false,
            //       //   // processor_res: 0,
            //       //   // threshold_a: 64,
            //       //   // threshold_b: 64,
            //       //   // guidance_start: 0,
            //       //   // guidance_end: 1,
            //       //   // guessmode: false,
            //       resize_mode: "Crop and Resize",
            //       low_vram: false,
            //       processor_res: 512,
            //       // threshold_a: 100,
            //       // threshold_b: 200,
            //       guidance_start: 0,
            //       guidance_end: 1,
            //       pixel_perfect: false,
            //       control_mode: "Balanced",
            //     },
            //   ],
            // },
          },
        });
        /** */

        let icon = element.querySelector(`.icon img`);
        icon.src = "./framework/Assets/loading.svg";
        icon.classList.add("loading");
        let p = document.createElement("p");
        p.style.color = "rgba(196, 198, 202, 1)";
        p.innerText = "Kindly wait a short while.";

        icon.parentNode.appendChild(p);

        /** */
        axios
          .post(
            "http://192.168.9.131:7860/tagger/v1/interrogate",

            { image: inputImage, model: "wd14-vit-v2-git", threshold: 0.35 }
          )
          .then((res) => {
            let str = Object.keys(res.data.caption).join(",");
            console.log("tagger", str);
          });
        /** */

        axios
          .post(
            "http://192.168.9.131:7860/sdapi/v1/img2img",
            // "http://127.0.0.1:7860/sdapi/v1/img2img",
            this.Img2Img.params.data
          )
          .then(async (res) => {
            // let res = {
            //   data: {
            //     images: ["./DemoAppText/Demo4000/assets/pic2/"],
            //   },
            // };
            icon.parentNode.style.zIndex = "1";
            icon.src = "./framework/Assets/imageDisplay-icon.svg";
            icon.classList.remove("loading");
            const lastChild = icon.parentNode.lastElementChild;
            if (lastChild) {
              icon.parentNode.removeChild(lastChild);
            }
            const primaryImage = element.querySelector(" .primary-image");
            const imageList = element.querySelector(" .image-list");
            const imageContainer = element.querySelector(" .image-container");
            const imageUploaderInputContain = element.querySelector(
              ".imageUploader-input-contain"
            );
            console.log("Number(outputNumber.value) > 1", outputNumber);
            if (res.data.images.length > 1 && outputNumber > 1) {
              /** 多图片显示 */

              const selectedFiles = res.data.images;

              if (selectedFiles.length > 0) {
                primaryImage.innerHTML = `<img style="border-radius: 2px;" src="data:image/png;base64,${selectedFiles[0]}" alt="Selected Image">`;
                imageContainer.style.height = "100%";
                imageUploaderInputContain.style.backgroundColor = "#252831";

                primaryImage.style.width = "100%";
                imageList.style.width = "0%";
                if (selectedFiles.length === 1) {
                  primaryImage.style.width = "100%";
                  imageList.style.width = "0%";
                } else {
                  primaryImage.style.width = "83%";
                  imageList.style.width = "17%";
                }

                imageList.innerHTML = "";
                for (let i = 1; i < selectedFiles.length; i++) {
                  const div = document.createElement("div");
                  div.style.cssText = `width:100%;
                height:${Number(element.style.height.split("px")[0]) * 0.22}px;
                  `;

                  const img = document.createElement("img");
                  img.style.borderRadius = "2px";
                  img.src = "data:image/png;base64," + selectedFiles[i];
                  img.alt = `Image ${i + 1}`;
                  div.appendChild(img);
                  imageList.appendChild(div);
                }
              }
              imageUploaderInputContain
                .querySelectorAll("img")
                .forEach((item) => {
                  item.addEventListener("click", () => {
                    console.log(
                      "item.parentElement.class",
                      item.parentElement.class
                    );
                    if (item.parentNode.classList.contains("primary-image")) {
                    } else {
                      let tem = item.src;
                      item.src = primaryImage.querySelector("img").src;
                      primaryImage.querySelector("img").src = tem;
                    }
                  });
                });
            } else {
              let div = document.createElement("div");
              div.style.cssText = `
                display:flex;
                justify-content:center;
                align-items:center;
                width:100%;
                height:100%;
                position:absolute;
                top:0;
                left:0;
                `;
              let img = document.createElement("img");
              img.id = "renderings";
              img.style.cssText = `
                  height: 99%;
                  width: 99%;
                  position: absolute;
                  border-radius: 4px;
                  overflow: hidden;
              `;
              img.src = "data:image/png;base64," + res.data.images[0];
              // img.src = res.data.images[0];
              div.appendChild(img);
              primaryImage.appendChild(div);
              console.log("div", div);
              imageContainer.style.height = "100%";
              imageUploaderInputContain.style.backgroundColor = "#252831";

              primaryImage.style.width = "100%";
              imageList.style.width = "0%";
              // element.appendChild(div);
            }

            await window.myApi
              .saveImagesFunction(res.data.images)
              .then(async () => {
                let imageData = Array.from(
                  await window.myApi.scanImageFunction()
                ).reverse();

                let imgList = element.querySelector(".contain-img");
                imgList.innerHTML = "";
                imageData.forEach((item, index) => {
                  let tem = document.createElement("div");
                  tem.style.cssText = `
                  width: 38px;
                  max-height: 38px;
                  margin: 4px 4px 0 0;
                  box-sizing: border-box;
                  padding: 2px;
                  overflow: hidden;
              
                  `;
                  tem.innerHTML = `
                  <img
                  src="${item}"
                  alt=""
                  style="height: 100%;width: 100%; border-radius: 2px;"
                />
                  `;
                  imgList.appendChild(tem);
                  if (index === 0) {
                    element.querySelector("#sidebar .show-img img").src = item;
                    imgList.querySelector("img").parentNode.style.border =
                      "dashed 1px white";
                    imgList.querySelector("img").parentNode.style.borderRadius =
                      "4px";
                  }
                });
                let imgs = element.querySelectorAll(".contain-img img");

                imgs.forEach((item) => {
                  item.style.cursor = "pointer";

                  item.addEventListener("click", () => {
                    imgs.forEach((item2) => {
                      item2.parentElement.style.border = "none";
                    });
                    item.parentElement.style.border = "dashed 1px white";
                    item.parentElement.style.borderRadius = "4px";

                    element.querySelector(".show-img img").src = item.src;
                  });
                });
              });
          })
          .catch((error) => {
            console.log(error);
          });
      },
    };
  }

  generate() {
    return new Promise(async (resolve, reject) => {
      try {
        let existModel =
          (
            await window.myApi.scanFilesFunction(
              `models/Stable-diffusion`,
              ".safetensors"
            )
          ).length === 0
            ? false
            : true;
        // let hardwareList = await window.myApi.checkHardwareFunction();
        // console.log("index", existModel, hardwareList);

        window.myApi.checkOperatingEnvFunction((event, value) => {
          console.log("stdout", value);
          if (value.includes("http://127.0.0.1:7860")) {
            resolve(); // 在异步操作完成后，解析 Promise
          }
          // event.sender.send('counter-value', value); //将回复结果发回主进程
        });
      } catch (error) {
        reject(error); // 如果出现错误，拒绝 Promise
      }
    });
  }
  close() {}
  ExtendedSearch() {}
  ExtendedInstallation() {}
}
