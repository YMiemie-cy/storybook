import BaseView from "./BaseView.js";
class TreeSelector extends BaseView {
  constructor(element, options) {
    super(element, options);
  }

  startDrawing(parent) {
    let tem = document.createElement("div");
    tem.style.cssText = `
    flex: 1;
    box-sizing: border-box;
    margin-bottom: 5px;
    position:relative;
    width: 100%;
    height: ${
      (this.frame.height.split("px")[0] - (this.content.list.length - 1) * 10) /
      this.content.list.length
    }px;
    `;
    tem.classList.add("tree-checkbox");
    tem.classList.add("tree-item");
    tem.innerHTML = `
    <div  style="box-sizing: border-box; position: absolute; inset: 0">
   
    <div class="select-box" style="width:28%;height:100%;border-left:dashed 1px #C4C6CA;
      border-top:dashed 1px #C4C6CA;
      border-bottom:dashed 1px #C4C6CA;
      box-sizing: border-box;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
      ">
      <svg
      class="_3-5"
      style="opacity:0"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5896 12.4594L3.62573 8.49729C3.40601 8.27756 3.40601 7.92249 3.62573 7.70276C3.84546 7.48303 4.20054 7.48303 4.42026 7.70276L8.38237 11.6649C8.6021 11.8846 8.6021 12.2397 8.38237 12.4594C8.1644 12.6791 7.80757 12.6791 7.5896 12.4594Z"
        fill="#FA7C70"
      />
      <path
        d="M7.60166 12.4717C7.38018 12.2502 7.38018 11.8881 7.60166 11.6666L13.5308 5.73752C13.7522 5.51604 14.1144 5.51604 14.3358 5.73752C14.5573 5.95901 14.5573 6.32112 14.3358 6.5426L8.40674 12.4717C8.18525 12.6949 7.8249 12.6949 7.60166 12.4717Z"
        fill="#FA7C70"
      />
    </svg>
    </div>

    <div
      style="
        box-sizing: border-box;
        width: 76%;
        height: 100%;
        position: absolute;
        left: 24%;
        top: 0;
        overflow: hidden;
      "
    >
      <svg
        style="
          box-sizing: border-box;
          border-radius: 0px;
          position: absolute;
          left: 0px;
          top: 0px;
          overflow: visible;
        "
        width="100%"
        height="100%"
        viewBox="0 0 83 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M-0.00013132 0.00645701L78.9997 0.000311205C81.209 0.000139335 83 1.79105 83 4.00031V28C83 30.2091 81.2091 32 79 32H2.65598L-0.00013132 0.00645701Z"
          fill="#2A2D38"
          fill-opacity="0.5"
        />
      </svg>

      <svg
        style="
          box-sizing: border-box;
          border-radius: 0px;
          position: absolute;
          left: 0px;
          top: 0px;
          overflow: visible;
        "
        width="100%"
        height="100%"
        viewBox="0 0 83 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M3.11619 31.5L0.543095 0.506415L78.9997 0.500311C80.9328 0.500161 82.5 2.06721 82.5 4.00031V28C82.5 29.933 80.933 31.5 79 31.5H3.11619Z"
          fill="#9D7FF5"
          fill-opacity="0.1"
          stroke="url(#paint0_linear_206_1860)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_206_1860"
            x1="1"
            y1="2"
            x2="83.5565"
            y2="16.2785"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EAEAEB" />
            <stop offset="1" stop-color="#9C81F2" />
          </linearGradient>
        </defs>
      </svg>

      <div
        style="
          box-sizing: border-box;
          background: radial-gradient(
            closest-side,
            rgba(18, 18, 18, 0.9) 0%,
            rgba(18, 18, 18, 0) 100%
          );
          border-radius: 50%;
          width: 111%;
          height: 140%;
          position: absolute;
          left: 98%;
          top: -22%;
          transform-origin: 0 0;
          transform: rotate(0deg) scale(-1, 1);
        "
      ></div>
      <div
        style="
          box-sizing: border-box;
          background: radial-gradient(
            closest-side,
            rgba(250, 124, 112, 0.21) 0%,
            rgba(250, 124, 112, 0) 100%
          );
          border-radius: 50%;
          width: 37%;
          height: 38%;
          position: absolute;
          left: 36%;
          top: -22%;
          transform-origin: 0 0;
          transform: rotate(0deg) scale(-1, 1);
        "
      ></div>
      <div
        class="tree-checkbox-text"
        style="
          box-sizing: border-box;
          color: #7e828a;
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          z-index: 1;
        "
      >
        <div>${this.content.list[0]}</div>
      </div>
    </div>
    <div
      style="
        box-sizing: border-box;
        background: radial-gradient(
          closest-side,
          rgba(255, 255, 255, 0.9) 0%,
          rgba(255, 255, 255, 0) 100%
        );
        width: 32%;
        height: 3%;
        position: absolute;
        left: 57%;
        top: 0;
        transform-origin: 0 0;
        transform: rotate(0deg) scale(-1, 1);
      "
    ></div>
  </div>
    `;
    this.element.appendChild(tem);

    this.element.querySelectorAll(".tree-item").forEach((item) => {});

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

    // this.element.style.borderRadius = "4px";
    // this.element.style.display = "flex";
    // this.element.style.flexDirection = "column";
    // this.element.style.justifyContent = "flex-start";

    this.element.classList.add("treeSelector-container");

    if (this.class) {
      this.class.forEach((item) => {
        this.element.classList.add(item);
      });
    }

    if (this.content) {
      for (let i = 1; i < this.content.list.length; i++) {
        let tem = document.createElement("div");
        tem.classList.add("tree-item");
        tem.style.cssText = `
        position:relative;
        width:80%;
        flex: 1;
        box-sizing: border-box;
        margin-bottom: 5px;
        
        `;
        tem.innerHTML = `<div
        style="
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          position: static;
          display: flex;
    justify-content: space-between;
    align-items: center;
        "
      >
        
        <div class="select-box" style="width:22%;height:100%;border-left:dashed 1px #C4C6CA;
        border-top:dashed 1px #C4C6CA;
        border-bottom:dashed 1px #C4C6CA;
        box-sizing: border-box;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
        ">
        <svg
        class="_3-5"
        style="opacity:0"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5896 12.4594L3.62573 8.49729C3.40601 8.27756 3.40601 7.92249 3.62573 7.70276C3.84546 7.48303 4.20054 7.48303 4.42026 7.70276L8.38237 11.6649C8.6021 11.8846 8.6021 12.2397 8.38237 12.4594C8.1644 12.6791 7.80757 12.6791 7.5896 12.4594Z"
          fill="#FA7C70"
        />
        <path
          d="M7.60166 12.4717C7.38018 12.2502 7.38018 11.8881 7.60166 11.6666L13.5308 5.73752C13.7522 5.51604 14.1144 5.51604 14.3358 5.73752C14.5573 5.95901 14.5573 6.32112 14.3358 6.5426L8.40674 12.4717C8.18525 12.6949 7.8249 12.6949 7.60166 12.4717Z"
          fill="#FA7C70"
        />
      </svg>

      <svg
          style="
            box-sizing: border-box;
            position: absolute;
            left: 17%;
            top: 0;
            overflow: visible;
          "
          width="9%"
          height="100%"
          viewBox="0 0 7 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <g clip-path="url(#clip0_206_1779)">
            <path
              d="M4.30273 19.5L0.606638 0.5H4.91038C5.73881 0.5 6.41038 1.17157 6.41038 2V18C6.41038 18.8284 5.73881 19.5 4.91038 19.5H4.30273Z"
              fill="#9D7FF5"
              fill-opacity="0.1"
              stroke="url(#paint0_linear_206_1779)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_206_1779"
              x1="6.91016"
              y1="9"
              x2="2.41016"
              y2="10"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#8976DF" />
              <stop offset="1" stop-color="#C4C6CA" />
            </linearGradient>
            <clipPath id="clip0_206_1779">
              <rect width="6.91038" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div
          style="
            box-sizing: border-box;
            color: #c4c6ca;
            text-align: left;
            font: 400 16px sans-serif;
            
            height: 100%;
            display: flex;
            align-items: center;
          "
        >
          <div class="tree-checkbox-text" style="color: #7e828a">${this.content.list[i]}</div>
        </div>
        
      </div>`;
        this.element.appendChild(tem);
      }
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
    } else {
      parentContainer = document.querySelector(`#${parent}`);
    }

    // 创建DOM并添加到父级容器

    parentContainer.appendChild(domElement);

    if (this.frame.color) {
      this.element.querySelector(".tree-checkbox-text").style.color =
        this.frame.color;
    }

    this.renderingStyle(this.element, this.name);
  }
  renderingStyle(dom, id) {
    dom.querySelectorAll(".tree-item").forEach((item) => {
      item.style.cursor = "pointer";
      function handleClick() {
        console.log(222, item, dom);
        // debugger;
        let svgs = item.querySelector("._3-5");

        if (svgs.style.opacity == "0") {
          svgs.style.opacity = 1;
        } else {
          svgs.style.opacity = 0;
        }
      }
      var newHandle = function (event) {
        event.stopPropagation();

        handleClick(event);
      };
      item.removeEventListener("click", newHandle, false);
      item.addEventListener("click", newHandle, false);

      // item.addEventListener("mouseover", function () {
      //   let tem = item.querySelector(".select-box");
      //   tem.style.background = "rgba(250, 124, 112, 0.05)";

      //   let tem2 = item.querySelector(".tree-checkbox-text");
      //   tem2.style.color = "#c4c6ca";
      // });
      // item.addEventListener("mouseout", function () {
      //   let tem = item.querySelector(".select-box");
      //   tem.style.background = "none";

      //   let tem2 = item.querySelector(".tree-checkbox-text");
      //   // tem2.style.color = preColor;
      //   tem2.style.color = "#7e828a";
      // });

      let styleTag = document.createElement("style");
      styleTag.textContent = `
      .treeSelector-container{
        position :relative;
        border-radius :4px;
        display :flex;
        flex-direction :column;
        justify-content :flex-start;
      }
      #${id} .tree-item:hover .select-box {
        background: rgba(250, 124, 112, 0.05) !important;

      }
      #${id} .tree-item:hover .tree-checkbox-text{
        color: #c4c6ca !important;
      }

      #${id} .select-box{
        background: none;
      }
      #${id} .tree-checkbox-text{
        color :#7e828a;
      }

      `;
      document.head.appendChild(styleTag);
    });
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

  onClick(ele) {}

  onMouseOver(event) {
    // let tem = document.querySelector(".tree-choicebox");
    // console.log(tem);
    // tem.setAttribute("fill", "#FA7C70");
    // tem.setAttribute("fill-opacity", "0.05");
    // let tem2 = document.querySelector(".tree-checkbox-text");
    // tem2.style.color = "#c4c6ca";
  }
  onMouseOut(event) {
    // let tem = document.querySelector(".tree-choicebox");
    // console.log(tem);
    // tem.setAttribute("fill", "none");
    // tem.setAttribute("fill-opacity", "none");
    // let tem2 = document.querySelector(".tree-checkbox-text");
    // tem2.style.color = "#7e828a";
  }
}
export default TreeSelector;
