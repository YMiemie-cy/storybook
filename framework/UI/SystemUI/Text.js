import BaseView from "./BaseView.js";
class Text extends BaseView {
  constructor(element, options) {
    super(element, options);
  }

  startDrawing(parent) {
    // 开始按钮的绘制逻辑
    // 解析JSON数据并创建DOM元素

    if (this.attributes) {
      for (const attr in this.attributes) {
        this.element.setAttribute(attr, this.attributes[attr]);

        if (attr === "type" && this.attributes[attr] === "label") {
          let tem = document.createElement("span");
          this.element.classList.add("text-background-clip");
          this.element.style.cssText = `
          
          background-image: linear-gradient(90deg,
            rgba(156, 129, 242, 1) 0%,
            rgba(255, 255, 255, 0.73) 100%);
            -webkit-background-clip: text;
            color: transparent;
            text-align: center;
            font: 700 16px "Arial", sans-serif;
            `;
        }
        if (attr === "type" && this.attributes[attr] === "title") {
          this.element.classList.add("text-background-clip");
          this.element.style.cssText = `
          background-image: linear-gradient(90deg, #FA7C70 20.09%, rgba(255, 255, 255, 0.73) 80.37%);
          -webkit-background-clip: text;
          color: transparent;
          text-align: center;
          font: 700 16px "Arial", sans-serif;
            `;
        }
        if (attr === "type" && this.attributes[attr] === "subtitle") {
          this.element.style.cssText = `
            color: #7e828a;
            text-align: center;
            font: 400 14px "Arial", sans-serif;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            `;
        }
      }
    }

    this.element.id = this.name;
    // this.element.style.position = "relative";
    this.element.style.width = this.frame.width;
    this.element.style.height = this.frame.height;
    this.element.style.left = this.frame.x;
    this.element.style.top = this.frame.y;

    // this.element.style.borderRadius = "4px";

    this.element.classList.add("text-container");

    if (this.class) {
      this.class.forEach((item) => {
        this.element.classList.add(item);
      });
    }

    if (this.content) {
      for (const content in this.content) {
        if (content === "icon") {
          const iconElement = document.createElement("img");
          iconElement.src = content.icon;
          this.element.appendChild(iconElement);
        } else {
          //   const contentElement = document.createElement("div");
          //   contentElement.innerText = this.content[content];
          this.element.innerText = this.content[content];
        }
      }
    }

    if (this.style) {
      for (const style in this.style) {
        this.element.style[style] = this.style[style];
      }
    }

    // for (const action of this.actions) {
    //   if (action.script) {
    //     // Execute the script
    //     let layerElement = this.element;
    //     const scriptFunction = new Function(...action.data, action.script);
    //     const functionCallString = `scriptFunction(${Array.from(
    //       action.data
    //     ).join(", ")});`;
    //     eval(functionCallString);
    //   } else if (action.function && action.content) {
    //     // Define the function
    //     window[action.function] = new Function(...action.data, action.content);
    //   }
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
    .text-container{
      position: relative;
      
  
      border-radius: 4px;
    }
    .text-background-clip {
      color: transparent;
      background-image: linear-gradient(45deg, #f06, #9f6);
      -webkit-background-clip: text;
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

  //   handleClick() {
  //     // 处理按钮点击事件
  //     if (this.actions) {
  //     }
  //   }
}
export default Text;
