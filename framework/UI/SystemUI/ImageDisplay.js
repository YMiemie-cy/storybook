import BaseView from "./BaseView.js";
const img = require("../../../framework/Assets/imageDisplay-icon.svg");

class ImageDisplay extends BaseView {
  constructor(element, options) {
    super(element, options);
  }

  startDrawing(parent) {
    // 开始按钮的绘制逻辑
    // 解析JSON数据并创建DOM元素

    this.element.innerHTML = `
    <div  style="box-sizing: border-box;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;">
        <div  style="box-sizing: border-box;
        background: rgba(42, 45, 56, 0.2);
        border-radius: 8px;
        border-width: 1px;
        border-style: dashed;
        border-color: #ccc;
        border-image-slice: 1;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0px;
        top: 0px;"></div>
        <div  style="box-sizing: border-box;
        background: radial-gradient(
          closest-side,
          rgba(18, 18, 18, 0.55) 0%,
          rgba(18, 18, 18, 0) 100%
        );
        border-radius: 50%;
        width: 144%;
        height: 135%;
        position: absolute;
        left: -16%;
        top: -14%;"></div>
        <div  style=" box-sizing: border-box;
        background: radial-gradient(
          closest-side,
          rgba(250, 124, 112, 0.06) 0%,
          rgba(18, 18, 18, 0) 100%
        );
        border-radius: 50%;
        width: 45%;
        height: 70%;
        position: absolute;
        left: 58%;
        top: 44%;"></div>
        <div  style=" box-sizing: border-box;
        background: radial-gradient(
          closest-side,
          rgba(250, 124, 112, 0.16) 0%,
          rgba(18, 18, 18, 0) 100%
        );
        border-radius: 50%;
        width: 70%;
        height: 42%;
        position: absolute;
        left: -12%;
        top: -27%;"></div>
        <div  style=" box-sizing: border-box;
        background: radial-gradient(
          closest-side,
          rgba(255, 255, 255, 0.6) 0%,
          rgba(255, 255, 255, 0) 100%
        );
        width: 41%;
        height: 0.3%;
        position: absolute;
        left: 3%;
        top: 0px;"></div>
        

        <div class="icon" style="z-index: 3;width:100%; height:100%;position: absolute;display: flex;justify-content:center; align-items:center;flex-direction:column;">
        <img style="max-width: 30px;max-height: 30px;" src="${img}" />
        </div>

        <div
    class="imageUploader-input-contain"
    style="
      overflow:hidden;
      position: absolute;
      box-sizing: border-box;
      width: 98%;
      height: 98%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      border-radius: 4px;
    "
  >
    <div class="image-container">
      <div class="primary-image"></div>
      <div class="image-list"></div>
    </div>
    <label for="imageInput" class="custom-upload-button">
     
    </label>
  
      </div>
    `;

    if (this.attributes) {
      for (const attr in this.attributes) {
        this.element.setAttribute(attr, this.attributes[attr]);
      }
    }

    this.element.id = this.name;
    // this.element.style.position = "relative";
    this.element.style.width = this.frame.width;
    this.element.style.height = this.frame.height;
    this.element.style.left = this.frame.x;
    this.element.style.top = this.frame.y;

    // this.element.style.borderRadius = "8px";

    this.element.classList.add("imageDisplay-container");

    if (this.content) {
      // for (const content in this.content) {
      //   if (content === "icon") {
      //     const iconElement = document.createElement("img");
      //     iconElement.src = content.icon;
      //     this.element.appendChild(iconElement);
      //   } else {
      //     const contentElement = document.createElement("div");
      //     contentElement.innerText = this.content[content];
      //     this.element.appendChild(contentElement);
      //   }
      // }

      for (const content in this.content) {
        //   if (content === "icon") {
        //     const iconElement = document.createElement("img");
        //     iconElement.src = content.icon;
        //     this.element.appendChild(iconElement);
        //   } else {
        //     const contentElement = document.createElement("div");
        //     contentElement.innerText = this.content[content];
        //     this.element.appendChild(contentElement);
        //   }
        if (content === "backgroundImage") {
          this.element.querySelector(
            ".imageUploader-input-contain"
          ).style.background = this.content[content];
        }
        if (content === "iconImage") {
          this.element.querySelector(".icon > img").src = this.content[content];
        }
      }
    }
    if (this.class) {
      this.class.forEach((item) => {
        this.element.classList.add(item);
      });
    }

    if (this.style) {
      for (const style in this.style) {
        this.element.style[style] = this.style[style];
      }
    }

    for (const action of this.actions) {
      if (action.script) {
        if (!action.event) {
          let functionCallString;
          let layerElement = this.element;
          if (action.data) {
            action.data.forEach((item, index) => {
              if (item.includes("-Element")) {
                layerElement = document.querySelector(`#${item.split("-")[0]}`);
                console.log("domID", `#${item.split("-")[0]}`);
                action.data.splice(index, 1);
                action.data.unshift("layerElement");
              }
            });
            if (action.data.length > 0) {
              functionCallString = `${action.script.split(".")[0]}(${Array.from(
                action.data
              ).join(", ")})`;
            } else {
              functionCallString = `${action.script.split(".")[0]}()`;
            }
            console.log(functionCallString);
          } else {
            functionCallString = `${action.script.split(".")[0]}()`;
          }
          eval(functionCallString);
        }
      } else if (action.script && action.data) {
        // Define the function
        window[action.script] = new Function(...action.data, action.content);
      } else if (action.script) {
        // Define the function
        window[action.script] = new Function(action.content);
      }
    }

    const domElement = this.element;

    // 获取父级容器
    let parentContainer;

    if (parent === "layers") {
      parentContainer = document.querySelector("#container");
    } else if (parent === undefined) {
      return domElement;
    } else {
      parentContainer = document.querySelector(`#${parent}`);
    }

    // 创建DOM并添加到父级容器

    parentContainer.appendChild(domElement);

    if (this.frame.color) {
      this.element.style.color = this.frame.color;
    }

    let styleTag = document.createElement("style");
    styleTag.textContent = `
   .imageDisplay-container{
   position :relative;
  
   }
    .image-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;

      display: flex;
      align-items: flex-start;
      z-index: 2;
    }

    .image-container img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    #${this.name}  .primary-image {
      width: 83%;
      height: 100%;

    }

    .image-list {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      max-height: 100%;
      width: 17%;
      overflow-y: auto;
    }

    .custom-upload-button {
      display: inline-block;
      
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      width: 100%;
      height: 100%;
      position: absolute;
    }
    .custom-upload-button:hover {
      
    }

    #ImageDisplay .icon .active{
      animation: rotate 2s linear infinite;
    }
  
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    #imageInput {
      display: none;
      position: absolute;
      z-index: 999;
    }
    #singularImageInput{
      display: none;
      position: absolute;
    }
    .image-list::-webkit-scrollbar {
      width: 0.5em; /* 调整滚动条宽度 */
    }

    .image-list::-webkit-scrollbar-track {
      background-color: transparent; /* 隐藏滚动条背景 */
    }

    .image-list::-webkit-scrollbar-thumb {
      background-color: transparent; /* 隐藏滚动条滑块 */
    }
    
    .image-container .image-list div:hover{
      cursor:pointer;
      background:#555;
     
    }

    #${this.name} .img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: ${this.frame.width} 100%;
    }
    #${this.name} .background-img {
      background-image: url("https://i.loli.net/2020/12/28/1dGpFx3zJ9Pjcme.jpg");
    }
    #${this.name} .foreground-img {
      background-image: url("https://i.loli.net/2020/12/28/xIZmjtBR5VWoqiz.jpg");
      width: 50%;
    }
    #${this.name} .slider {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 100%;
      opacity: 0;
      outline: none;
      margin: 0;
      transition: all 0.2s;
    }

    #${this.name}  .slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 2px;
      height: ${this.frame.height};
      background-image: linear-gradient(
        -360deg,
        rgba(157, 127, 245, 1) 0%,
        rgba(255, 255, 255, 0.9) 100%
      );
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: 0 0;
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 50%;
    }

    #${this.name}  .slider-button {
      pointer-events: none;
      position: absolute;
      width: 15px;
      height: 30px;
      border-radius: 10%;
      background-color: rgba(250, 124, 112, 0.1);
      border: solid 1px rgba(157, 127, 245, 1);
      left: calc(50% - 15px);
      top: calc(50% - 7.5px);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    #${this.name}  .slider-button::before {
      content: "";
      padding: 3px;
      display: inline-block;
      border: solid rgba(157, 127, 245, 1);
      border-width: 0 1px 1px 0;
      transform: rotate(135deg);
    }
    `;

    document.head.appendChild(styleTag);
  }

  handleAnimation() {
    // 处理按钮的动画逻辑
    console.log("处理按钮的动画");
  }
  handleActions(arr) {
    for (let i = 0; i < arr.length; i++) {
      const action = arr[i];
      console.log(action);

      if (action.script) {
        if (!action.event) {
          let functionCallString;
          let layerElement = this.element;
          if (action.data) {
            action.data.forEach((item, index) => {
              if (item.includes("-Element")) {
                layerElement = document.querySelector(`#${item.split("-")[0]}`);
                console.log("domID", `#${item.split("-")[0]}`);
                action.data.splice(index, 1);
                action.data.unshift("layerElement");
              }
            });
            if (action.data.length > 0) {
              functionCallString = `${action.script.split(".")[0]}(${Array.from(
                action.data
              ).join(", ")})`;
            } else {
              functionCallString = `${action.script.split(".")[0]}()`;
            }
            console.log(functionCallString);
          } else {
            functionCallString = `${action.script.split(".")[0]}()`;
          }
          eval(functionCallString);
        }
      }
    }
  }
}
export default ImageDisplay;
