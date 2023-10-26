import BaseView from "./BaseView.js";
import ChoiceColumn from "./ChoiceColumn.js";

class PopUps extends BaseView {
  constructor(element, options) {
    super(element, options);
  }

  startDrawing(parent) {
    if (this.attributes) {
      for (const attr in this.attributes) {
        this.element.setAttribute(attr, this.attributes[attr]);
      }
    }

    this.element.id = this.name;
    // this.element.style.position = "absolute";
    this.element.style.width = this.frame.width;
    this.element.style.height = this.frame.height;
    this.element.style.left = this.frame.x;
    this.element.style.top = this.frame.y;
    this.element.style.position = "fixed";
    this.element.style.zIndex = "99999";
    this.element.innerHTML = `       
              <div class="top">
                <div class="title">Item Edit</div>
                <div class="false-button"></div>
              </div>
              <div class="popup-label-input">
                <input type="text" />
              </div>
              <p>Image</p>
              <div class="popup-image-button"></div>
              <input
                type="file"
                class="theme-button-input"
                style="display: none"
              />
              <div class="theme-fileName">
                <img src="./framework/Assets/editor/imageIcon.svg" alt="" />
                <div
                  style="
                    width: 125px;
                    white-space: break-spaces;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  "
                >
                  xxxxxx
                </div>
                <div class="theme-delete-button"></div>
              </div>

              <div class="bottom">
                <div class="popup-script-editor"></div>
                <div class="popup-save-button"></div>
              </div>
   `;

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

    let styleTag = document.createElement("style");
    styleTag.textContent = `
    #${this.name} {
    
      background-color: #2a2d38;
      border-radius: 10px;
      box-sizing: border-box;
      padding: 19px;
    }
    #${this.name} .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    #${this.name} .top .title {
      color: #c5c6c9;
      font-size: 14px;
    }
    #${this.name} .top .false-button {
      background: url("framework/Assets/editor/popup-false.svg") no-repeat center center / contain;
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
    #${this.name} .popup-label-input {
      background: url("framework/Assets/editor/popup-label-input.svg") no-repeat center center / contain;
      width: 100%;
      height: 24px;
      margin-top: 15px;
      margin-bottom: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgba(255, 255, 255, 0.8);
      font-size: 10px;
      cursor: pointer;
      position: relative;
    }
    #${this.name} .popup-label-input input {
      border: 0;
      position: absolute;
      color: #c5c6c9;
      outline-style: none;
      background-color: transparent;
      width: 77%;
      height: 47%;
      right: 0;
    }
    #${this.name} p {
      color: #7e828a;
      font-size: 12px;
      margin-bottom: 0;
    }
    #${this.name} .popup-image-button {
      background: url("framework/Assets/editor/popup-image.svg") no-repeat center center / contain;
      width: 100%;
      height: 24px;
      margin-top: 10px;
      margin-bottom: 10px;
      cursor: pointer;
    }
    #${this.name} .popup-image-button:active {
      opacity: 0.3;
    }
    #${this.name} .bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 50px;
    }
    #${this.name} .bottom .popup-script-editor {
      background: url("framework/Assets/editor/popup-script-editor.svg") no-repeat center center / contain;
      width: 100%;
      height: 24px;
      cursor: pointer;
    }
    #${this.name} .bottom .popup-script-editor:active {
      opacity: 0.3;
    }
    #${this.name} .bottom .popup-save-button {
      background: url("framework/Assets/editor/popup-save.svg") no-repeat center center / contain;
      width: 100%;
      height: 24px;
      cursor: pointer;
    }
    #${this.name} .bottom .popup-save-button:active {
      opacity: 0.3;
    }
    `;
    document.head.appendChild(styleTag);

    // 获取父级容器
    let parentContainer;

    if (parent === "layers") {
      parentContainer = document.querySelector("#container");
    } else {
      parentContainer = document.querySelector(`#${parent}`);
    }

    // 创建DOM并添加到父级容器

    parentContainer.appendChild(domElement);

    if (this.content) {
      for (const content in this.content) {
        if (content === "icon") {
          const iconElement = document.createElement("img");
          iconElement.src = this.content.icon;
          iconElement.style.cssText = `
          position:absolute; top:0;left:0;right:0;bottom:0;margin:auto;height:80%;width:80%;
          `;
          this.element.appendChild(iconElement);
        } else {
          this.element.querySelector(".modalWindow-text").innerHTML =
            this.content[content];
        }
      }
    }

    if (this.frame.color) {
      this.element.style.color = this.frame.color;
    }

    /** script */
    let labelInput = this.element.querySelector(
      ".popup-label-input input"
    ).value;
    window.data.choiceColumnList.forEach((item) => {
      if (item.active) {
        this.element.querySelector(".popup-label-input input").value =
          item.title;
      }
    });
    this.element
      .querySelector(".false-button")
      .addEventListener("click", () => {
        this.element.remove();
      });

    this.element
      .querySelector(".popup-label-input input")
      .addEventListener("change", () => {
        console.log("event.target.value", event.target.value);
        labelInput = event.target.value;
      });

    this.element
      .querySelector(".bottom .popup-script-editor")
      .addEventListener("click", () => {});

    this.element
      .querySelector(".bottom .popup-save-button")
      .addEventListener("click", () => {
        window.data.choiceColumnList.forEach((item) => {
          if (item.active) {
            item.title = labelInput;
          }
        });
        {
          const ChoiceColumnElement = document.createElement("div");
          const tem = new ChoiceColumn(ChoiceColumnElement, {
            name: "ChoiceColumn",
            frame: { width: "100%", height: "100%" },
            attributes: {},
            class: [],
            content: {
              list: [...window.data.choiceColumnList],
            },
            style: {},
            actions: [],
            script: [],
          });
          document
            .querySelector(`#${window.data.selectObj.id}`)
            .lastElementChild.remove();
          tem.startDrawing(`${window.data.selectObj.id}`);
        }
        this.element.remove();
      });

    /** script */
  }

  handleActions(arr) {}

  handleAnimation() {
    // 处理按钮的动画逻辑
    console.log("处理按钮的动画");
  }

  onClick(ele) {}
}
export default PopUps;
