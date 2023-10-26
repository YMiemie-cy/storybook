import BaseView from "./BaseView.js";
const img = require("../../../framework/Assets/uploadCloud.svg");
const pens = require("../../../framework/Assets/pens.svg");
const eraserButton = require("../../../framework/Assets/eraserButton.svg");
const penButton = require("../../../framework/Assets/penButton.svg");
const clearCanvasBtn = require("../../../framework/Assets/clearCanvasBtn.svg");
const backCanvasBtn = require("../../../framework/Assets/backCanvasBtn.svg");

class ImageUploader extends BaseView {
  constructor(element, options) {
    super(element, options);
  }

  startDrawing(parent) {
    /** */
    this.element.innerHTML = `
    
    <svg preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 375 237" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_206_1438)">
    <rect class="border" x="0.4" y="0.4" width="374.2" height="236.2" rx="7.6" fill="#2A2D38" fill-opacity="0.2" stroke="url(#paint0_linear_206_1438)" stroke-width="0.8"/>
    <ellipse cx="209.5" cy="129.5" rx="270.5" ry="160.5" fill="url(#paint1_radial_206_1438)"/>
    <ellipse cx="304" cy="187" rx="85" ry="83" fill="url(#paint2_radial_206_1438)"/>
    <ellipse cx="87.5" cy="-13" rx="131.5" ry="50" fill="url(#paint3_radial_206_1438)"/>
   
    </g>
    <defs>
    <filter id="filter0_d_206_1438" x="176.555" y="91.9918" width="24.8398" height="34.6332" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dx="1" dy="1"/>
    <feGaussianBlur stdDeviation="1"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.57 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_206_1438"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_206_1438" result="shape"/>
    </filter>
    <linearGradient id="paint0_linear_206_1438" x1="187.5" y1="0" x2="187.5" y2="237" gradientUnits="userSpaceOnUse">
    <stop stop-color="white" stop-opacity="0.24"/>
    <stop offset="1" stop-color="#9D7FF5" stop-opacity="0.2"/>
    </linearGradient>
    <radialGradient id="paint1_radial_206_1438" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(209.5 129.5) rotate(90) scale(160.5 270.5)">
    <stop stop-color="#121212" stop-opacity="0.55"/>
    <stop offset="1" stop-color="#121212" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="paint2_radial_206_1438" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(304 187) rotate(90) scale(83 85)">
    <stop stop-color="#FA7C70" stop-opacity="0.06"/>
    <stop offset="1" stop-color="#121212" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="paint3_radial_206_1438" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(87.5 -13) rotate(90) scale(50 131.5)">
    <stop stop-color="#FA7C70" stop-opacity="0.16"/>
    <stop offset="1" stop-color="#121212" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="paint4_linear_206_1438" x1="187.975" y1="92.9918" x2="187.975" y2="123.625" gradientUnits="userSpaceOnUse">
    <stop stop-color="white"/>
    <stop offset="0.416667" stop-color="#B19BF5"/>
    <stop offset="1" stop-color="#9D7FF5"/>
    </linearGradient>
    <linearGradient id="paint5_linear_206_1462" x1="187.975" y1="92.9918" x2="187.975" y2="123.625" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="0.416667" stop-color="#B19BF5"/>
<stop offset="1" stop-color="#9D7FF5"/>
</linearGradient>
    <radialGradient id="paint5_radial_206_1438" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(88.4516 0.499975) rotate(-0.0836051) scale(68.6452 3124.81)">
    <stop stop-color="white" stop-opacity="0.6"/>
    <stop offset="1" stop-color="white" stop-opacity="0"/>
    </radialGradient>
    <clipPath id="clip0_206_1438">
    <rect width="100%" height="100%" rx="8" fill="white"/>
    </clipPath>
    </defs>
           <div    style=" flex-direction: column;
           box-sizing: border-box;
           color: #c4c6ca;
           text-align: center;
           font-size: 1em;
           font-weight: 400;
           position: absolute;
           top: 0;
           left: 0;
           height: 96%;
           width: 100%;
           z-index: 1;
           display: flex;
           justify-content: center;
           align-items: center;">
           <img class="imageUploader-icon" src="${img}" style="
           min-height:6px;
           max-width: 56px;
       max-height: 56px;
      
   ">

        <div class="imageUploader-text">${
          this.content.text ? this.content.text : "Upload Image"
        }</div></div>
    </svg>

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
    <label id="uploadLabel" for="imageInput" class="custom-upload-button">
     
    </label>

    <input type="file" id="imageInput" accept="image/*" multiple />
    <input type="file" id="singularImageInput" accept="image/*" />
  </div>
    `;
    /** */

    this.element.id = this.name;
    // this.element.style.position = "relative";
    this.element.classList.add("tool-imageUploader");
    this.element.style.width = this.frame.width;
    this.element.style.height = this.frame.height;
    this.element.style.left = this.frame.x;
    this.element.style.top = this.frame.y;

    this.element.classList.add("imageUploader-container");

    let isAttributes = false;

    if (this.attributes) {
      for (const attr in this.attributes) {
        if (attr === "isCanvas" && this.attributes[attr] === "true") {
          isAttributes = true;
          // let canvasContainer = document.createElement("div");
          // canvasContainer.innerHTML = `
          // <canvas class="tool-canvas" style="border-radius: 8px;background-color: '#fff'; "></canvas>
          // `;
          // this.element = document.createElement("canvas");
          // this.element.classList.add("tool-canvas");
          // this.element.setAttribute("width", this.frame.width);
          // this.element.setAttribute("height", this.frame.height);
          // this.element.style.borderRadius = "8px";
          this.element.style.position = "relative";
          this.element.innerHTML = `
          <canvas class="tool-canvas" width= "${this.frame.width}" height= "${this.frame.height}" style=" border-radius: 8px; background-color: #fff;width: 100%;height: 100%" > 
          </canvas>
          <div class="mouse" style="left: 0;top: 0;position: absolute;width: 16px;height:16px; background: url(${pens}) no-repeat center center /cover; display: none;"></div>
          <div style="display: flex;justify-content: space-between"> 
            <div id="eraserButton" style="cursor: pointer;width: 20px;height: 20px; background: url(${eraserButton}) no-repeat center center / cover"></div>
            <div id="penButton" style="cursor: pointer;width: 20px;height: 20px; background: url(${penButton}) no-repeat center center / cover"></div>
            <div id="clearCanvasBtn" style="cursor: pointer;width: 20px;height: 20px; background: url(${clearCanvasBtn}) no-repeat center center / cover"></div>
            <div id="backCanvasBtn" style="cursor: pointer;width: 20px;height: 20px; background: url(${backCanvasBtn}) no-repeat center center / cover"></div>
          </div>
          `;
          // this.element.appendChild(canvasContainer);

          setTimeout(() => {
            let script = document.createElement("script");
            script.innerHTML = `

            const canvas = document.querySelector('.tool-canvas');
const context = canvas.getContext('2d');
// const mouse = document.querySelector('.mouse');
context.willReadFrequently = true;

const drawHistory = [];
let isDrawing = false;
let isErasing = false;
let isPenSelected = false;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

const saveButton = document.getElementById('saveButton'); // 获取保存按钮

document.querySelector('#clearCanvasBtn').addEventListener('click', clearCanvas);
document.querySelector('#backCanvasBtn').addEventListener('click', undoLastStep);

// 切换为绘图模式
document.getElementById('penButton').addEventListener('click', () => {
  isErasing = false;
  isPenSelected = true;
  context.strokeStyle = 'rgba(156, 129, 242, 0.8)'; // 设置绘制颜色为黑色
  context.lineWidth = 2; // 设置绘制线条宽度
  canvas.style.cursor = 'url(./framework/Assets/pens.svg) 0 0, auto'; // 使用自定义小黑点光标
  // canvas.style.cursor = "none"
  // mouse.style.display = 'block'
  
  
});

// 切换为橡皮擦模式
document.getElementById('eraserButton').addEventListener('click', () => {
  isErasing = true;
  context.strokeStyle = '#fff'; // 设置绘制颜色为白色，模拟擦除
  context.lineWidth = 40; // 设置擦除线条宽度，增大橡皮擦大小
  canvas.style.cursor = 'url(./framework/Assets/eraser.png) 0 0, auto'; // 使用自定义圆圈光标
});

function startDrawing(event) {
  if (!isPenSelected) return;
  isDrawing = true;
  let rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left + 16;
  let y = event.clientY - rect.top + 16;
  context.beginPath();
  context.moveTo(x, y);
  drawHistory.push(context.getImageData(0, 0, canvas.width, canvas.height));
}

function draw(event) {
  let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left + 16;
    let y = event.clientY - rect.top + 16;
  if (!isDrawing || !isPenSelected){
    // if(x  === ${this.frame.width} || y  === ${this.frame.height}){
    //   mouse.style.display = "none";
    // }
    // mouse.style.left = x - 8 + 'px';
    // mouse.style.top = y - 8 + 'px';
  }else{
    if (isErasing) {
      context.globalCompositeOperation = 'destination-out';
    } else {
      context.globalCompositeOperation = 'source-over';
    }
    // mouse.style.left = x - 8 + 'px';
    // mouse.style.top = y - 8 + 'px';
    context.lineTo(x, y);
    context.stroke();
  }
  
}


function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawHistory.length = 0;
}

function undoLastStep() {
  if (drawHistory.length > 0) {
    drawHistory.pop();
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (const imageData of drawHistory) {
      context.putImageData(imageData, 0, 0);
    }
  }
}

function stopDrawing() {
  isDrawing = false;
  context.closePath();
}


               `;
            // document.body.appendChild(script);
          }, 0);
        } else if (attr === "isPens" && this.attributes[attr] === "true") {
          console.log("isPens", attr);
          let tem = document.createElement("div");

          tem.innerHTML = `
          <div class="tool-pens-container" style="width: 100%; height: 100%; position: relative;">
          <canvas class="tool-canvas" width= "${this.frame.width}" height= "${
            this.frame.height
          }" style=" border-radius: 8px; background-color: transparent;position: absolute;margin: auto;top: 0;left: 0;right: 0;bottom: 0;" > 
          </canvas>
          
          <svg preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 375 237" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_206_1438)">
          <rect class="border" x="0.4" y="0.4" width="374.2" height="236.2" rx="7.6" fill="#2A2D38" fill-opacity="0.2" stroke="url(#paint0_linear_206_1438)" stroke-width="0.8"/>
          <ellipse cx="209.5" cy="129.5" rx="270.5" ry="160.5" fill="url(#paint1_radial_206_1438)"/>
          <ellipse cx="304" cy="187" rx="85" ry="83" fill="url(#paint2_radial_206_1438)"/>
          <ellipse cx="87.5" cy="-13" rx="131.5" ry="50" fill="url(#paint3_radial_206_1438)"/>
         
          </g>
          <defs>
          <filter id="filter0_d_206_1438" x="176.555" y="91.9918" width="24.8398" height="34.6332" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="1" dy="1"/>
          <feGaussianBlur stdDeviation="1"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.57 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_206_1438"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_206_1438" result="shape"/>
          </filter>
          <linearGradient id="paint0_linear_206_1438" x1="187.5" y1="0" x2="187.5" y2="237" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.24"/>
          <stop offset="1" stop-color="#9D7FF5" stop-opacity="0.2"/>
          </linearGradient>
          <radialGradient id="paint1_radial_206_1438" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(209.5 129.5) rotate(90) scale(160.5 270.5)">
          <stop stop-color="#121212" stop-opacity="0.55"/>
          <stop offset="1" stop-color="#121212" stop-opacity="0"/>
          </radialGradient>
          <radialGradient id="paint2_radial_206_1438" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(304 187) rotate(90) scale(83 85)">
          <stop stop-color="#FA7C70" stop-opacity="0.06"/>
          <stop offset="1" stop-color="#121212" stop-opacity="0"/>
          </radialGradient>
          <radialGradient id="paint3_radial_206_1438" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(87.5 -13) rotate(90) scale(50 131.5)">
          <stop stop-color="#FA7C70" stop-opacity="0.16"/>
          <stop offset="1" stop-color="#121212" stop-opacity="0"/>
          </radialGradient>
          <linearGradient id="paint4_linear_206_1438" x1="187.975" y1="92.9918" x2="187.975" y2="123.625" gradientUnits="userSpaceOnUse">
          <stop stop-color="white"/>
          <stop offset="0.416667" stop-color="#B19BF5"/>
          <stop offset="1" stop-color="#9D7FF5"/>
          </linearGradient>
          <linearGradient id="paint5_linear_206_1462" x1="187.975" y1="92.9918" x2="187.975" y2="123.625" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="0.416667" stop-color="#B19BF5"/>
      <stop offset="1" stop-color="#9D7FF5"/>
      </linearGradient>
          <radialGradient id="paint5_radial_206_1438" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(88.4516 0.499975) rotate(-0.0836051) scale(68.6452 3124.81)">
          <stop stop-color="white" stop-opacity="0.6"/>
          <stop offset="1" stop-color="white" stop-opacity="0"/>
          </radialGradient>
          <clipPath id="clip0_206_1438">
          <rect width="100%" height="100%" rx="8" fill="white"/>
          </clipPath>
          </defs>
                 <div    style=" flex-direction: column;
                 box-sizing: border-box;
                 color: #c4c6ca;
                 text-align: center;
                 font-size: 1em;
                 font-weight: 400;
                 position: absolute;
                 top: 0;
                 left: 0;
                 height: 96%;
                 width: 100%;
                 z-index: 1;
                 display: flex;
                 justify-content: center;
                 align-items: center;">
              
                 <img class="imageUploader-icon" src="${img}" style="
                 min-height:6px;
                 max-width: 56px;
             max-height: 56px;
            
         ">
              <div class="imageUploader-text">${
                this.content.text ? this.content.text : "Upload Image"
              }</div></div>
          </svg>
      
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
          <label id="uploadLabel" for="imageInput" class="custom-upload-button">
           
          </label>
      
          <input type="file" id="imageInput" accept="image/*" multiple />
          <input type="file" id="singularImageInput" accept="image/*" />
        </div>

        </div>
        <div class="mouse" style="left: 0;top: 0;position: absolute;width: 16px;height:16px; background: url('./framework/Assets/pens.svg') no-repeat center center /cover; display: none;"></div>
        <div style="display: flex;justify-content: space-between"> 
          <div id="eraserButton" style="cursor: pointer;width: 20px;height: 20px; background: url('./framework/Assets/eraserButton.svg') no-repeat center center / cover"></div>
          <div id="penButton" style="cursor: pointer;width: 20px;height: 20px; background: url('./framework/Assets/penButton.svg') no-repeat center center / cover"></div>
          <div id="clearCanvasBtn" style="cursor: pointer;width: 20px;height: 20px; background: url('./framework/Assets/clearCanvasBtn.svg') no-repeat center center / cover"></div>
          <div id="backCanvasBtn" style="cursor: pointer;width: 20px;height: 20px; background: url('./framework/Assets/backCanvasBtn.svg') no-repeat center center / cover"></div>
        </div>
  
          `;
          tem.style.cssText = `
          position: absolute;
        top: 0;
        left: 0;
        width:100%;
        height:100%;
          `;

          this.element.appendChild(tem);
          //       let tem2 = document.createElement("div");
          //       tem2.innerHTML = `

          // <div style="display: flex;
          // width:100%;
          // gap: 10px;
          // ">
          //   <button id="pen">Pen</button>
          //   <button id="rectangle">Rectangle</button>
          //   <button id="circle">Circle</button>
          //   <button id="star">Star</button>
          // </div>
          //       `;
          //       tem2.style.cssText = `
          //       `;

          //       this.element.appendChild(tem2);

          setTimeout(() => {
            let script = document.createElement("script");
            script.innerHTML = `

      const canvas = document.querySelector('.tool-canvas');
const context = canvas.getContext('2d');
// const mouse = document.querySelector('.mouse');
context.willReadFrequently = true;

const drawHistory = [];
let isDrawing = false;
let isErasing = false;
let isPenSelected = false;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

const saveButton = document.getElementById('saveButton'); // 获取保存按钮

document.querySelector('#clearCanvasBtn').addEventListener('click', clearCanvas);
document.querySelector('#backCanvasBtn').addEventListener('click', undoLastStep);

// 切换为绘图模式
document.getElementById('penButton').addEventListener('click', () => {
isErasing = false;
isPenSelected = true;
context.strokeStyle = 'rgba(156, 129, 242, 0.8)'; // 设置绘制颜色为黑色
context.lineWidth = 2; // 设置绘制线条宽度
canvas.style.cursor = 'url(./framework/Assets/pens.svg) 0 0, auto'; // 使用自定义小黑点光标
// canvas.style.cursor = "none"
// mouse.style.display = 'block'


});

// 切换为橡皮擦模式
document.getElementById('eraserButton').addEventListener('click', () => {
isErasing = true;
context.strokeStyle = '#fff'; // 设置绘制颜色为白色，模拟擦除
context.lineWidth = 40; // 设置擦除线条宽度，增大橡皮擦大小
canvas.style.cursor = 'url(./framework/Assets/eraser.png) 0 0, auto'; // 使用自定义圆圈光标
});

function startDrawing(event) {
if (!isPenSelected) return;
isDrawing = true;
let rect = canvas.getBoundingClientRect();
let x = event.clientX - rect.left + 16;
let y = event.clientY - rect.top + 16;
context.beginPath();
context.moveTo(x, y);
drawHistory.push(context.getImageData(0, 0, canvas.width, canvas.height));
}

function draw(event) {
let rect = canvas.getBoundingClientRect();
let x = event.clientX - rect.left + 16;
let y = event.clientY - rect.top + 16;
if (!isDrawing || !isPenSelected){
// if(x  === ${this.frame.width} || y  === ${this.frame.height}){
//   mouse.style.display = "none";
// }
// mouse.style.left = x - 8 + 'px';
// mouse.style.top = y - 8 + 'px';
}else{
if (isErasing) {
context.globalCompositeOperation = 'destination-out';
} else {
context.globalCompositeOperation = 'source-over';
}
// mouse.style.left = x - 8 + 'px';
// mouse.style.top = y - 8 + 'px';
context.lineTo(x, y);
context.stroke();
}

}


function clearCanvas() {
context.clearRect(0, 0, canvas.width, canvas.height);
drawHistory.length = 0;
}

function undoLastStep() {
if (drawHistory.length > 0) {
drawHistory.pop();
context.clearRect(0, 0, canvas.width, canvas.height);
for (const imageData of drawHistory) {
context.putImageData(imageData, 0, 0);
}
}
}

function stopDrawing() {
isDrawing = false;
context.closePath();
}


         `;
            document.body.appendChild(script);
          }, 0);
        } else if (
          attr === "isImgCompare" &&
          this.attributes[attr] === "true"
        ) {
          isAttributes = true;
          let tem = document.createElement("div");
          tem.style.cssText = `
          position: absolute;
          top: 0;
          height: 100%;
          width: 100%;
          `;
          tem.innerHTML = `
          <div  style="
          position: relative;
          width: 100%;
          height: 100%;">
          <div class="img background-img" ></div>
          <div class="img foreground-img" ></div>
          <input
            type="range"
            min="1"
            max="100"
            value="50"
            class="slider"
            name="slider"
            id="slider"
          />
          <div class="slider-button"></div>
        </div>
          `;
          this.element.appendChild(tem);
          const slider = this.element.querySelector(".slider");
          let ele = this.element;

          let sliderPos;
          slider.addEventListener("input", function (e) {
            sliderPos = e.target.value;
            ele.querySelector(".foreground-img").style.width = `${sliderPos}% `;

            const styleElement = document.createElement("style");
            styleElement.innerHTML = `.slider::-webkit-slider-thumb { left: ${sliderPos}% !important}`;

            document.head.appendChild(styleElement);

            ele.querySelector(
              ".slider-button"
            ).style.left = `calc(${sliderPos}% - 16px)`;
          });
        }

        this.element.setAttribute(attr, this.attributes[attr]);
      }
    }

    if (this.class) {
      this.class.forEach((item) => {
        this.element.classList.add(item);
      });
    }

    if (this.content) {
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
          this.element.querySelector(".imageUploader-icon").src =
            this.content[content];
        }
      }
    }

    if (this.style) {
      for (const style in this.style) {
        this.element.style[style] = this.style[style];
      }
    }

    for (const action of this.actions) {
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

    // if (parent.includes("editor")) {
    //   domElement.querySelector("#uploadLabel").style.display = "none";
    // }

    parentContainer.appendChild(domElement);

    /** */

    if (!isAttributes) {
      const ele = this.element;
      const imageInput = this.element.querySelector("#imageInput");
      const singularImageInput = this.element.querySelector(
        "#singularImageInput"
      );
      const primaryImage = this.element.querySelector(".primary-image");
      const imageList = this.element.querySelector(".image-list");
      const imageContainer = this.element.querySelector(".image-container");
      const imageUploaderInputContain = this.element.querySelector(
        ".imageUploader-input-contain"
      );

      let currentImg;

      imageInput.addEventListener("change", (event) => {
        const selectedFiles = event.target.files;

        if (selectedFiles.length > 0) {
          if (this.element.getAttribute("isPens")) {
            this.element.querySelector("canvas").style.zIndex = "99";
          }

          const reader = new FileReader();

          reader.onload = function (event) {
            const base64 = event.target.result;

            primaryImage.innerHTML = `<img style="border-radius: 2px;" src="${base64}" alt="Selected Image">`;
            console.log(
              'this.element.querySelector(".primary-image img");',
              primaryImage
            );
            let img = primaryImage.querySelector(" img");
            let originalWidth = img.naturalWidth;
            let originalHeight = img.naturalHeight;
            let container = primaryImage;
            let containerWidth = container.offsetWidth;
            let containerHeight = container.offsetHeight;

            let aspectRatio = originalWidth / originalHeight;

            let displayedWidth, displayedHeight;

            if (containerWidth / aspectRatio <= containerHeight) {
              displayedWidth = containerWidth;
              displayedHeight = containerWidth / aspectRatio;
            } else {
              displayedWidth = containerHeight * aspectRatio;
              displayedHeight = containerHeight;
            }

            ele
              .querySelector("canvas")
              .setAttribute("width", parseInt(displayedWidth) + "px");
            ele
              .querySelector("canvas")
              .setAttribute("height", parseInt(displayedHeight) + "px");
          };

          reader.readAsDataURL(selectedFiles[0]);

          imageContainer.style.height = "100%";
          imageUploaderInputContain.style.backgroundColor = "#252831";

          if (selectedFiles.length === 1) {
            primaryImage.style.width = "100%";
            imageList.style.width = "0%";
          } else {
            primaryImage.style.width = "83%";
            imageList.style.width = "17%";
          }

          imageList.innerHTML = "";
          for (let i = 1; i < selectedFiles.length; i++) {
            reader.readAsDataURL(selectedFiles[i]);
            const div = document.createElement("div");
            div.style.cssText = `
        height:${Number(this.frame.height.split("px")[0]) * 0.22}px;
          `;

            const img = document.createElement("img");
            img.style.borderRadius = "2px";

            img.src = URL.createObjectURL(selectedFiles[i]);
            img.alt = `Image ${i + 1}`;
            div.appendChild(img);
            imageList.appendChild(div);
          }
          this.element.querySelectorAll("img").forEach((item) => {
            item.addEventListener("click", () => {
              console.log(item);
              currentImg = item;
              singularImageInput.click();
            });
          });
        }
      });
      singularImageInput.addEventListener("change", () => {
        let selectedFile = event.target.files[0];
        currentImg.src = URL.createObjectURL(selectedFile);
      });
    }

    /** */

    if (this.frame.color) {
      this.element.querySelector(".imageUploader-text").style.color =
        this.frame.color;
    }

    let styleTag = document.createElement("style");
    styleTag.textContent = `
    .imageUploader-container{
      position:relative;

    }
    .tool-imageUploader > .border {
      transition: stroke 10s ease-in-out;
    }
    .tool-imageUploader:hover .border {
      stroke: url(#paint5_linear_206_1462);
    }
    .image-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;

      display: flex;
      align-items: center;
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
    
    .image-container img:hover{
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
export default ImageUploader;
