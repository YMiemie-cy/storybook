import BaseView from "./BaseView.js";
class DropDownMenu extends BaseView {
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
            box-sizing: border-box;
            background: rgba(42, 45, 56, 0.5);
            border-radius: 2px;
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
            background: rgba(157, 127, 245, 0.1);
            border-radius: 2px;
            border-width: 1px;
            border-style: solid;
            border-image: linear-gradient(
              -90deg,
              rgba(157, 127, 245, 0) 0%,
              rgba(157, 127, 245, 1) 72.91666865348816%,
              rgba(255, 255, 255, 0.9) 97.91666865348816%
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
              rgba(18, 18, 18, 0.7) 0%,
              rgba(18, 18, 18, 0) 100%
            );
            border-radius: 50%;
            width: 100%;
            height: 123%;
            position: absolute;
            left: -18px;
            top: -2px;
          "
        ></div>
        <div
        
          style="
            box-sizing: border-box;
            color: #c4c6ca;
            text-align: left;
            font: 400 14px;
            position: absolute;
            left: 10%;
            height: 100%;
            width: 66%;
            overflow: hidden;
            display: flex;
            align-items: center;
          "
        >
          <div class="title">level1</div>
        </div>
        <svg
          class="lowerArrow"
          style="
            box-sizing: border-box;
            position: absolute;
            left: 82%;
            top: 46%;
            overflow: visible;
          "
          width="8"
          height="4"
          viewBox="0 0 8 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M4 4C3.88882 4 3.78229 3.9601 3.70447 3.8893L0.11827 0.627128C-0.0417039 0.481628 -0.0390516 0.24806 0.124167 0.105453C0.287371 -0.0371403 0.549375 -0.034801 0.70932 0.110711L4 3.10406L7.29067 0.110711C7.45062 -0.0348136 7.7126 -0.0371907 7.87583 0.105453C8.03906 0.248073 8.0417 0.481628 7.88173 0.627128L4.29552 3.8893C4.2177 3.9601 4.11118 4 4 4Z"
            fill="#C4C6CA"
          />
        </svg>

        <div
          style="
            box-sizing: border-box;
            background: radial-gradient(
              closest-side,
              rgba(250, 124, 112, 0.21) 0%,
              rgba(250, 124, 112, 0) 100%
            );
            border-radius: 50%;
            width: 43%;
            height: 50%;
            position: absolute;
            left: -5%;
            top: -35%;
          "
        ></div>
        <div
          style="
            box-sizing: border-box;
            background: radial-gradient(
              closest-side,
              rgba(255, 255, 255, 0.9) 0%,
              rgba(255, 255, 255, 0) 100%
            );
            width: 38%;
            height: 0.2%;
            position: absolute;
            left: 1%;
            top: 0px;
          "
        ></div>
      </div>
      <div
        class="menu"
        style="
          box-sizing: border-box;
          width: 100%;
          height: auto;
          position: relative;
          overflow: hidden;
          border-radius: 2px;
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.3s ease-in-out;
        "
      >
        <div
          style="
            box-sizing: border-box;
            background: rgba(42, 45, 56, 0.5);
            border-radius: 2px 0px 0px 2px;
            width: 71%;
            height: 100%;
            position: absolute;
            left: 0px;
            top: 0px;
          "
        ></div>
        <div
          style="
            box-sizing: border-box;
            background: rgba(157, 127, 245, 0.1);
            border-radius: 2px 0px 0px 2px;
            border-width: 1px;
            border-style: solid;
            border-image: linear-gradient(
              185.04deg,
              rgba(255, 255, 255, 0.79) 0%,
              rgba(255, 255, 255, 0.9) 20.3125%,
              rgba(156, 129, 242, 1) 59.89583134651184%,
              rgba(255, 255, 255, 0.25) 100%
            );
            border-image-slice: 1;
            width: 71%;
            height: 100%;
            position: absolute;
            left: 0px;
            top: 0px;
          "
        ></div>
        <svg
          style="
            box-sizing: border-box;
            position: absolute;
            left: 0px;
            top: -40%;
            overflow: visible;
          "
          width="112"
          height="232"
          viewBox="0 0 112 232"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M112 116C112 180.065 86.9279 232 56 232C25.0721 232 0 180.065 0 116C0 51.935 25.0721 0 56 0C86.9279 0 112 51.935 112 116Z"
            fill="url(#paint0_radial_206_1984)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_206_1984"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(52.8539 132.186) rotate(91.2056) scale(89.7175 43.3148)"
            >
              <stop stop-color="#121212" stop-opacity="0.4" />
              <stop offset="1" stop-color="#121212" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>

        <svg
          style="
            box-sizing: border-box;
            position: absolute;
            left: -49%;
            top: 14%;
            overflow: visible;
          "
          width="134"
          height="232"
          viewBox="0 0 134 232"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M134 116C134 180.065 104.003 232 67 232C29.9969 232 0 180.065 0 116C0 51.935 29.9969 0 67 0C104.003 0 134 51.935 134 116Z"
            fill="url(#paint0_radial_206_1985)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_206_1985"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(63.236 132.186) rotate(91.4423) scale(89.7261 51.8181)"
            >
              <stop stop-color="#121212" stop-opacity="0.27" />
              <stop offset="1" stop-color="#121212" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <div
          style="
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            width: 68%;
            padding: 2px 0;
          "
        >
        ${this.content.list
          .map(
            (item, index) =>
              `<div class="menu-item" data-target="${index + 1}">${item}</div>`
          )
          .join("")}
        
        </div>

        <div
          style="
            box-sizing: border-box;
            width: 5%;
            height: 6%;
            position: absolute;
            left: 82%;
            top: 4%;
            overflow: hidden;
          "
        >
          <div
            style="
              box-sizing: border-box;
              background: radial-gradient(
                closest-side,
                rgba(18, 18, 18, 0) 100%
              );
              border-radius: 50%;
              width: 3%;
              height: 2%;
              position: absolute;
              left: 3%;
              top: 2%;
            "
          ></div>
        </div>

        <div
          style="
            box-sizing: border-box;
            background: rgba(250, 124, 112, 0.04);
            border-radius: 0px 4px 4px 0px;
            border-style: dashed;
            border-color: #c4c6ca;
            border-width: 1px 1px 1px 0px;
            width: 29%;
            height: 100%;
            position: absolute;
            left: 71%;
            top: 0px;
          "
        >
          <div
            style="
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
              align-items: center;
              width: 100%;
            "
          >

          ${this.content.list
            .map(
              (item, index) => ` <svg
            class="_3-5"
            data-svg="${index + 1}"
            style="box-sizing: border-box; overflow: visible"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.90259 9.69064L2.81958 6.609C2.64868 6.4381 2.64868 6.16193 2.81958 5.99103C2.99048 5.82013 3.26665 5.82013 3.43755 5.99103L6.51919 9.07267C6.69009 9.24357 6.69009 9.51974 6.51919 9.69064C6.34966 9.86154 6.07212 9.86154 5.90259 9.69064Z"
              fill="#FA7C70"
            />
            <path
              d="M5.9124 9.70021C5.74014 9.52794 5.74014 9.2463 5.9124 9.07404L10.5239 4.46251C10.6962 4.29025 10.9778 4.29025 11.1501 4.46251C11.3224 4.63478 11.3224 4.91642 11.1501 5.08868L6.53857 9.70021C6.36631 9.87384 6.08604 9.87384 5.9124 9.70021Z"
              fill="#FA7C70"
            />
          </svg>`
            )
            .join("")}
            
          </div>
        </div>
        <div
          style="
            box-sizing: border-box;
            background: radial-gradient(
              closest-side,
              rgba(245, 133, 122, 0.21) 0%,
              rgba(245, 133, 122, 0) 100%
            );
            border-radius: 50%;
            width: 43%;
            height: 5%;
            position: absolute;
            left: 2%;
            top: -3%;
          "
        ></div>
        <div
          style="
            box-sizing: border-box;
            background: radial-gradient(
              closest-side,
              rgba(255, 255, 255, 0.9) 0%,
              rgba(255, 255, 255, 0) 100%
            );
            width: 38%;
            height: 0.3%;
            position: absolute;
            left: 3%;
            top: 0px;
          "
        ></div>
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

    this.element.classList.add("dropDownMenu-container");

    if (this.content) {
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
      this.element.querySelector(".title").style.color = this.frame.color;
    }

    /** */
    this.renderingStyle(this.element, this.name);

    /** */
  }
  renderingStyle(dom, id) {
    let styleTag = document.createElement("style");
    styleTag.textContent = `
    .dropDownMenu-container{
      position: relative;
    }
      #${id}:hover .menu {
        box-sizing: border-box;
        display: block !important;
        transform: scaleY(1) !important;
      }
      #${id}:hover .lowerArrow {
        display: none;
      }

      #${id} .menu-item {
        box-sizing: border-box;
        color: #c4c6ca;
        text-align: left;
        font: 400 14px "Arial", sans-serif;
        position: relative;
        width: 100%;
        height: ${dom.style.height};
        line-height: ${dom.style.height};
        text-align: center;
      }

      #${id} .menu-item:hover {
        box-sizing: border-box;
        background-color: rgba(157, 127, 245, 0.2);
        cursor: pointer;
      }
      #${id} ._3-5 {
        box-sizing: border-box;
        overflow: visible;
        opacity: 0;
      }

      #${id} ._3-5.active {
        opacity: 1;
      }
    `;
    document.head.appendChild(styleTag);
    const menuItems = dom.querySelectorAll(".menu-item");
    const svgs = dom.querySelectorAll("._3-5");

    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        const targetIndex = item.getAttribute("data-target");

        dom.querySelector(`.title`).innerText = item.innerText;

        // 隐藏所有的 SVG
        svgs.forEach((svg) => svg.classList.remove("active"));

        // 显示对应的 SVG
        const targetSVG = dom.querySelector(`[data-svg="${targetIndex}"]`);

        targetSVG.classList.add("active");
      });
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
export default DropDownMenu;
