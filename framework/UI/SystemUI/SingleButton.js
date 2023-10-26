import BaseView from "./BaseView.js";
class SingleButton extends BaseView {
  constructor(element, options) {
    super(element, options);
  }

  startDrawing(parent) {
    // console.log("parent", this.element, parent);
    // 开始按钮的绘制逻辑
    // 解析JSON数据并创建DOM元素

    if (this.attributes) {
      for (const attr in this.attributes) {
        if (attr === "layout" && this.attributes[attr] === "h-layout") {
          this.element.style.flexDirection = "row";
        }
        if (attr === "layout" && this.attributes[attr] === "v-layout") {
          this.element.style.flexDirection = "column";
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
    this.element.style.zIndex = this.frame.zIndex;
    // this.element.style.overflow = "hidden";
    // this.element.style.borderRadius = "4px";

    this.element.classList.add("singleButton-container");

    if (this.class) {
      this.class.forEach((item) => {
        this.element.classList.add(item);
      });
    }

    if (this.content) {
      for (const content in this.content.list) {
        let tem = document.createElement("label");
        tem.style.cssText = `
        position: relative;
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        `;
        tem.classList.add("custom-radio");
        tem.innerHTML = `
       
        <input type="radio" name="radio-group">
        <span class="radio-indicator"></span>
        
         
   
${this.content.list[content]}
        `;
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
      this.element.querySelector(".custom-radio").style.color =
        this.frame.color;
    }

    this.renderingStyle(this.element, this.name);
  }

  renderingStyle(dom, id) {
    let styleTag = document.createElement("style");
    styleTag.textContent = `
    .singleButton-container{
      position :relative;
      borderRadius :4px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #${id} .custom-radio {
        position: relative;
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        color: white;
      }

      #${id} .custom-radio input[type="radio"] {
        display: none;
      }

      #${id} .radio-indicator {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        border: 2px solid rgba(157, 127, 245, 1);
        margin-right: 5px;
        margin-left: 5px;
        box-sizing: border-box;
      }

      #${id} .custom-radio input[type="radio"]:checked + .radio-indicator {
        border-color: rgba(157, 127, 245, 1);
        border-width: 4px;
      }
    `;

    document.head.appendChild(styleTag);

    dom
      .querySelectorAll(`#${id} .custom-radio input[type="radio"]`)
      .forEach((item, index) => {
        if (index === 0) {
          item.checked = true;
        }
        if (id.includes("_")) {
          item.name = item.name + id.split("_")[1];
        }
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
    console.log(111);
  }
}
export default SingleButton;
