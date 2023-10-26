import BaseView from "./BaseView.js";
class Button extends BaseView {
  constructor(element, options) {
    super(element, options);
  }

  startDrawing(parent) {
    if (this.attributes) {
      for (const attr in this.attributes) {
        if (attr === "type" && this.attributes[attr] === "important") {
          this.element.innerHTML = `
          <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 90 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_206_929)">
<rect width="90" height="32" rx="4" fill="#2A2D38" fill-opacity="0.5"/>
<rect x="0.5" y="0.5" width="89" height="31" rx="3.5" fill="#FA7C70" fill-opacity="0.13" stroke="url(#paint0_linear_206_929)"/>
<ellipse cx="48.5" cy="15.5" rx="73.5" ry="24.5" fill="url(#paint1_radial_206_929)"/>
<rect x="4" width="71" height="1" fill="url(#paint2_radial_206_929)"/>
<ellipse cx="39" rx="43" ry="5" fill="url(#paint3_radial_206_929)"/>
</g>
<defs>
<linearGradient id="paint0_linear_206_929" x1="-6.78302e-06" y1="11.5" x2="85.0236" y2="-6.94237" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.1"/>
<stop offset="0.307292" stop-color="#FA7C70"/>
<stop offset="0.588542" stop-color="#9D7FF5"/>
<stop offset="0.994792" stop-color="white" stop-opacity="0.1"/>
</linearGradient>
<radialGradient id="paint1_radial_206_929" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(48.5 15.5) rotate(90) scale(24.5 73.5)">
<stop stop-color="#121212" stop-opacity="0.9"/>
<stop offset="1" stop-color="#121212" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint2_radial_206_929" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(39.5 0.5) scale(37.7903 511.5)">
<stop stop-color="white" stop-opacity="0.9"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint3_radial_206_929" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(39) rotate(90) scale(5 43)">
<stop stop-color="#FA7C70" stop-opacity="0.21"/>
<stop offset="1" stop-color="#F5857A" stop-opacity="0"/>
<stop offset="1" stop-color="#FA7C70" stop-opacity="0"/>
</radialGradient>
<clipPath id="clip0_206_929">
<rect width="100%" height="100%" rx="4" fill="white"/>
</clipPath>
</defs>
</svg>

          `;
          this.element.style.cursor = "pointer";
        }
        if (attr === "type" && this.attributes[attr] === "timelyImportant") {
          this.element.innerHTML = `
          <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 90 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_206_941)">
          <rect width="100%" height="100%" preserveAspectRatio="none" rx="4" fill="#2A2D38" fill-opacity="0.5"/>
          <rect x="0.5" y="0.5" width="89" height="31" preserveAspectRatio="none" rx="3.5" fill="#9D7FF5" fill-opacity="0.1" stroke="url(#paint0_linear_206_941)"/>
          <ellipse cx="48" cy="15.5" rx="53" ry="13.5" fill="url(#paint1_radial_206_941)"/>
          <rect x="4" width="35" height="1" fill="url(#paint2_radial_206_941)"/>
          <ellipse cx="21.5" rx="29.5" ry="5" fill="url(#paint3_radial_206_941)"/>
          </g>
          <defs>
          <linearGradient id="paint0_linear_206_941" x1="-9.46008e-07" y1="7.99999" x2="87.4131" y2="-1.58713" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.2"/>
          <stop offset="1" stop-color="#9D7FF5" stop-opacity="0.5"/>
          </linearGradient>
          <radialGradient id="paint1_radial_206_941" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(48 15.5) rotate(90) scale(13.5 53)">
          <stop stop-color="#121212" stop-opacity="0.5"/>
          <stop offset="1" stop-color="#121212" stop-opacity="0"/>
          </radialGradient>
          <radialGradient id="paint2_radial_206_941" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21.5 0.5) scale(18.629 511.5)">
          <stop stop-color="white" stop-opacity="0.7"/>
          <stop offset="1" stop-color="white" stop-opacity="0"/>
          </radialGradient>
          <radialGradient id="paint3_radial_206_941" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21.5) rotate(90) scale(5 29.5)">
          <stop stop-color="#FA7C70" stop-opacity="0.21"/>
          <stop offset="1" stop-color="#FA7C70" stop-opacity="0"/>
          </radialGradient>
          <clipPath id="clip0_206_941">
          <rect width="100%" height="100%" preserveAspectRatio="none" rx="4" fill="white"/>
          </clipPath>
          </defs>
          </svg>
          `;
          this.element.style.cursor = "pointer";
        }

        this.element.setAttribute(attr, this.attributes[attr]);
      }
    }

    this.element.id = this.name;
    // this.element.style.position = "relative";
    this.element.style.width = this.frame.width;
    this.element.style.height = this.frame.height;
    this.element.style.left = this.frame.x;
    this.element.style.top = this.frame.y;

    // this.element.style.borderRadius = "4px";

    this.element.classList.add("button-container");
    let styleTag = document.createElement("style");
    styleTag.textContent = `
    #${this.name}:active{
      opacity: 0.5;
    }
    #${this.name}:hover{
      filter: brightness(1.1);
    }
    .button-container{
      position: relative;
      border-radius: 4px;
      cursor: pointer;
    }
    `;
    document.head.appendChild(styleTag);

    if (this.class) {
      this.class.forEach((item) => {
        this.element.classList.add(item);
      });
    }

    if (this.content) {
      for (const content in this.content) {
        if (content === "icon") {
          const iconElement = document.createElement("img");
          iconElement.src = this.content.icon;
          iconElement.style.cssText = `
          position:absolute; top:0;left:0;right:0;bottom:0;margin:auto;height:60%;width:60%;
          `;
          this.element.appendChild(iconElement);
        } else {
          const contentElement = document.createElement("div");
          contentElement.classList.add("button-text");
          contentElement.innerText = this.content[content];
          contentElement.style.cssText = `
          position:absolute; top:0;height:100%;width:100%;display:flex;align-item:center;justify-content:center;align-items: center;color: #c4c6ca;font-size: 1em;
          `;
          this.element.appendChild(contentElement);
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
        // Execute the script
        // let layerElement = this.element;
        // const scriptFunction = new Function(...action.data, action.script);
        // const functionCallString = `scriptFunction(${Array.from(
        //   action.data
        // ).join(", ")});`;
        // eval(functionCallString);
        // const functionCallString = `this.onClick(this.element, ${Array.from(
        //   action.data
        // ).join(", ")});`;
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
    } else if (parent == undefined) {
      return domElement;
    } else {
      parentContainer = document.querySelector(`#${parent}`);
    }

    // 创建DOM并添加到父级容器

    parentContainer.appendChild(domElement);

    if (this.frame.color) {
      this.element.querySelector(".button-text").style.color = this.frame.color;
    }

    /** script */
    if (this.scripts) {
      this.scripts.forEach((item) => {
        let script = document.createElement("script");
        script.src = item;
        document.body.appendChild(script);
      });
    }
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

  handleAnimation() {
    // 处理按钮的动画逻辑
    console.log("处理按钮的动画");
  }

  onClick(ele) {
    for (let i = 0; i < this.actions.length; i++) {
      const action = this.actions[i];
      if (action.event === "click") {
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
        if (action.children) {
          this.handleActions(action.children);
        }
      }
    }
  }
}
export default Button;
