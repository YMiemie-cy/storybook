import BaseView from "./BaseView.js";
class ParameterBlock extends BaseView {
  constructor(element, options) {
    super(element, options);
  }

  startDrawing(parent) {
    this.element.innerHTML = `
<div
        style="
          box-sizing: border-box;
          border-radius: 2px;
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        "
      >
        <div
          style="
            background-image: linear-gradient(
                rgba(42, 45, 56, 0.5),
                rgba(42, 45, 56, 0.5)
              ),
              linear-gradient(
                rgba(245, 133, 122, 0.08),
                rgba(245, 133, 122, 0.08)
              );
            background-blend-mode: normal, normal;
            height: 100%;
            width: auto;
            position: absolute;
            left: 0;
            top: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            padding: 2%;
            border-right: dashed 1px white;
          "
        >
          <div
          class="parameterBlock-text"
            style="
              box-sizing: border-box;
              color: #c5c6c9;
              z-index: 1;
              font: 400 16px;
              position: relative;
            "
          >
            ${this.content.text}
          </div>
          <svg
            style="
              box-sizing: border-box;
              position: absolute;
              left: -7%;
              top: -37%;
              overflow: visible;
            "
            width="150%"
            height="170%"
            viewBox="0 0 220 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M220 25.5C220 39.5833 170.751 51 110 51C49.2487 51 0 39.5833 0 25.5C0 11.4167 49.2487 0 110 0C170.751 0 220 11.4167 220 25.5Z"
              fill="url(#paint0_radial_206_1292)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_206_1292"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(103.82 29.0581) rotate(100.65) scale(20.0636 83.6355)"
              >
                <stop stop-color="#121212" stop-opacity="0.5" />
                <stop offset="1" stop-color="#121212" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>

          <svg
            style="
              box-sizing: border-box;
              position: absolute;
              left: -2%;
              top: -10%;
              overflow: visible;
            "
            width="63%"
            height="27%"
            viewBox="0 0 92 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M92 4C92 6.20914 71.4051 8 46 8C20.5949 8 0 6.20914 0 4C0 1.79086 20.5949 0 46 0C71.4051 0 92 1.79086 92 4Z"
              fill="url(#paint0_radial_206_1293)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_206_1293"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(42.0571 4) rotate(90) scale(3.6 41.4)"
              >
                <stop stop-color="#9C81F2" stop-opacity="0.55" />
                <stop
                  offset="0.0001"
                  stop-color="#9C81F2"
                  stop-opacity="0.13"
                />
                <stop offset="1" stop-color="#9C81F2" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div
          style="
            box-sizing: border-box;
            border-radius: 4px;
            border-width: 1px;
            border-style: solid;
            border-image: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.8) 0%,
              rgba(156, 129, 242, 1) 100%
            );
            border-image-slice: 1;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0px;
            top: 0px;
          "
        ></div>
        <div
          style="
            box-sizing: border-box;
            background: radial-gradient(
              closest-side,
              rgba(255, 255, 255, 0.7) 0%,
              rgba(255, 255, 255, 0) 100%,
              rgba(255, 255, 255, 0) 100%
            );
            width: 15%;
            height: 3%;
            position: absolute;
            left: 3px;
            top: 0px;
          "
        ></div>

        <div
          style="
            box-sizing: border-box;
            color: #c5c6c9;
            text-align: left;
            font: 400 1rem;
            position: absolute;
            right: 0;
            top: 0;
            width: 50%;
            overflow:hidden;
            height: 100%;
          "
        >
          <input
            type="text"
            value="5"
            style="
    
              text-align: right;
              color: #c5c6c9;
              font: 400 16rem;
              border: 0px;
              outline-style: none;
              background-color: transparent;
              width: 99%;
              padding: 0;
               height: 100%;
            "
          />
        </div>
      </div>
`;

    if (this.class) {
      this.class.forEach((item) => {
        this.element.classList.add(item);
      });
    }

    if (this.attributes) {
      for (const attr in this.attributes) {
        console.log(attr, this.attributes[attr]);

        this.element.setAttribute(attr, this.attributes[attr]);
      }
    }

    this.element.id = this.name;
    // this.element.style.position = "relative";
    this.element.style.width = this.frame.width;
    this.element.style.height = this.frame.height;
    this.element.style.left = this.frame.x;
    this.element.style.top = this.frame.y;

    this.element.classList.add("parameterBlock-container");

    if (this.content) {
    }

    if (this.style) {
      for (const style in this.style) {
        this.element.style[style] = this.style[style];
      }
    }

    // if (this.actions) {
    //   const actionsFunction = new Function(
    //     "this.element",
    //     `(${this.actions})(this.element)`
    //   );

    //   actionsFunction(this.element);
    // }
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
    } else if (parent === undefined) {
      return domElement;
    } else {
      parentContainer = document.querySelector(`#${parent}`);
    }

    // 创建DOM并添加到父级容器

    parentContainer.appendChild(domElement);

    if (this.frame.color) {
      this.element.querySelector(".parameterBlock-text").style.color =
        this.frame.color;
    }

    let styleTag = document.createElement("style");
    styleTag.textContent = `
    .parameterBlock-container{
      position: relative;
    }
    `;
    document.head.appendChild(styleTag);
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
export default ParameterBlock;
