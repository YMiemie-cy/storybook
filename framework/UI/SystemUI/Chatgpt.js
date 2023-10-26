import BaseView from "./BaseView.js";
class Chatgpt extends BaseView {
  constructor(element, options) {
    super(element, options);
  }

  startDrawing(parent) {
    this.element.id = this.name;

    this.element.style.width = this.frame.width;
    this.element.style.height = this.frame.height;
    this.element.style.left = this.frame.x;
    this.element.style.top = this.frame.y;

    this.element.innerHTML = `
    

    `;

    let styleTag = document.createElement("style");
    styleTag.textContent = `
   
    `;
    document.head.appendChild(styleTag);

    if (this.class) {
      this.class.forEach((item) => {
        this.element.classList.add(item);
      });
    }

    if (this.content) {
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
    } else {
      parentContainer = document.querySelector(`#${parent}`);
    }

    // 创建DOM并添加到父级容器

    parentContainer.appendChild(domElement);

    this.renderingStyle(this.element, this.name);

    /** script */
    if (this.scripts) {
      this.scripts.forEach((item) => {
        let script = document.createElement("script");
        script.src = item;
        document.body.appendChild(script);
      });
    }
  }
  renderingStyle(dom, id) {
    console.log("renderingStyle", dom, id);
    dom.querySelectorAll(".container .container-item").forEach((item) => {
      item.addEventListener("click", () => {
        dom.querySelectorAll(".container  .container-item").forEach((item2) => {
          item2.classList.remove("active");
        });

        event.currentTarget.classList.add("active");
      });
    });
  }
  handleActions(arr) {}

  handleAnimation() {
    // 处理按钮的动画逻辑
    console.log("处理按钮的动画");
  }

  onClick(ele) {}
}
export default Chatgpt;
