import AI from "./ai.js";

class SD extends AI {
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
      base: {
        model: "xxxx",
        weight: "0.5",
      },
      BackPromptWords: () => {},
      LocalRepaint: () => {},
    };
    this.ControlNet = {
      base: {
        pretreatment: "xxx",
        model: "xxx",
      },
    };
    this.Text2Img = {
      base: {
        prompt: "xxx",
        nePrompt: "xxx",
        vae: "xxx",
      },
    };
    this.Img2Img = {
      base: {
        prompt: "xxx",
        image: "xxx",
      },
      run: (data) => {
        let promptContent = document.querySelector("#prompt");

        axios
          .post("/api/sdapi/v1/img2img", {
            init_images: [`${data}`],
            denoising_strength: 0.75,
            image_cfg_scale: 0,
            mask_blur: 4,
            inpainting_fill: 0,
            inpaint_full_res: true,
            prompt: promptContent.value,
            seed: -1,
            subseed: -1,
            subseed_strength: 0,
            seed_resize_from_h: -1,
            seed_resize_from_w: -1,
            batch_size: 2,
            n_iter: 1,
            steps: 20,
            cfg_scale: 7,
            width: 512,
            height: 512,
          })
          .then((res) => {
            let div = document.createElement("div");
            div.style.cssText = `
            display:flex;
            justify-content:center;
            align-item:center;
            width:100%;
            height:100%;
            position:absolute;
            top:0;
            left:0;
            `;
            let img = document.createElement("img");
            img.id = "renderings";
            img.style.height = "99%";
            img.style.width = "99%";
            img.style.position = "absolute";
            img.src = "data:image/png;base64," + res.data.images[0];

            div.appendChild(img);
            document.querySelector("#imageDisplay").appendChild(div);
          })
          .catch((error) => {
            console.log(error);
          });
      },
    };
  }

  generate() {}
  close() {}
  ExtendedSearch() {}
  ExtendedInstallation() {}
}

export default SD;
// var sd = {
//   img2img: {
//     base: {},
//     run: (data) => {
//       let promptContent = document.querySelector("#prompt");

//       axios
//         .post("/api/sdapi/v1/img2img", {
//           init_images: [`${data}`],
//           denoising_strength: 0.75,
//           image_cfg_scale: 0,
//           mask_blur: 4,
//           inpainting_fill: 0,
//           inpaint_full_res: true,
//           prompt: promptContent.value,
//           seed: -1,
//           subseed: -1,
//           subseed_strength: 0,
//           seed_resize_from_h: -1,
//           seed_resize_from_w: -1,
//           batch_size: 2,
//           n_iter: 1,
//           steps: 20,
//           cfg_scale: 7,
//           width: 512,
//           height: 512,
//         })
//         .then((res) => {
//           let div = document.createElement("div");
//           div.style.cssText = `
//           display:flex;
//           justify-content:center;
//           align-item:center;
//           width:100%;
//           height:100%;
//           position:absolute;
//           top:0;
//           left:0;
//           `;
//           let img = document.createElement("img");
//           img.id = "renderings";
//           img.style.height = "99%";
//           img.style.width = "99%";
//           img.style.position = "absolute";
//           img.src = "data:image/png;base64," + res.data.images[0];

//           div.appendChild(img);
//           document.querySelector("#imageDisplay").appendChild(div);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     },
//   },
// };
