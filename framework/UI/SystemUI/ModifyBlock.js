import BaseView from "./BaseView.js";
class ModifyBlock extends BaseView {
  constructor(element, options) {
    super(element, options);
  }

  startDrawing(parent) {
    // 创建 link 标签
    // const linkStylesheet = document.createElement("link");
    // linkStylesheet.rel = "stylesheet";
    // linkStylesheet.href =
    //   "https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/themes/classic.min.css";
    // document.head.appendChild(linkStylesheet);

    // // 创建 script 标签（第一个）
    // const scriptPickr = document.createElement("script");
    // scriptPickr.src =
    //   "https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/pickr.min.js";
    // document.body.appendChild(scriptPickr);

    // // 创建 script 标签（第二个）
    // const scriptPickrEs5 = document.createElement("script");
    // scriptPickrEs5.src =
    //   "https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/pickr.es5.min.js";
    // document.body.appendChild(scriptPickrEs5);

    this.element.innerHTML = `
    <div
      style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
       
      "
    >
      <div id="picker-color" style="font-size: 10px;flex:1;"></div>
      <div class="picker-input" style="flex: 2; margin: 0 0  0 10px">
        <input
          type="text"
          style="
            width: 100%;
            box-sizing: border-box;
            text-align: center;
            border: 0px;
            outline-style: none;
            background-color: transparent;
            color:rgba(255, 255, 255, 0.73);
          "
          value="#FFFFFF"
        />
      </div>

      <div class="picker-opacity" style="color:rgba(255, 255, 255, 0.73);flex:1;"><input
      type="text"
      class="picker-opacity-input"
      style="
        width:100%;
        box-sizing: border-box;
        text-align: left;
        border: 0px;
        outline-style: none;
        background-color: transparent;
        color:rgba(255, 255, 255, 0.73);
      "
      value="100"
    /></div>
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

    // this.element.style.padding = "2px";

    this.element.classList.add("modifyBlock-container");

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
      this.element.style.color = this.frame.color;
    }

    let styleTag = document.createElement("style");
    styleTag.textContent = `
    .modifyBlock-container{
      position :relative;
    padding :2px;
    }
    .pickr {
        height: 100%;
        display: flex;
        align-items: center;
      }
      .pickr .pcr-button{
        width:${this.frame.height};
        height:${this.frame.height};
    }
    #${this.name}{
      border: dashed 1px transparent;
    }
      #${this.name}:hover{
        border:dashed 1px #C4C6CA;
      }
      #${this.name}:hover .picker-input{
        border-left:dashed 1px #C4C6CA;
        border-right:dashed 1px #C4C6CA;
      }
      .picker-opacity::after{
        content:"%";
        position:absolute;
        right:0%;
      }
    #${this.name}:focus-within{
        border:solid 1px rgba(157, 127, 245, 1) ;
        border-radius:2px;
      }
    `;
    document.head.appendChild(styleTag);

    this.renderingStyle(this.element, this.name);
  }

  renderingStyle(dom, id) {
    /** */
    let initialColor = "#ffffff";
    let inputEle = dom.querySelector(`.picker-input > input`);
    let opacityInput = dom.querySelector(`.picker-opacity-input`);

    // inputEle.addEventListener("change", () => {
    //   console.log(inputEle.value);
    //   initialColor = inputEle.value;
    // });
    const pickr = Pickr.create({
      el: `#${id} #picker-color`,
      theme: "classic", // 主题
      default: initialColor, // 初始颜色
      comparison: false, // 是否显示颜色比较框
      swatches: [
        "rgba(244, 67, 54, 1)",
        "rgba(233, 30, 99, 0.8)",
        "rgba(156, 39, 176, 0.5)",
        "rgba(63, 81, 181, 0.3)",
        "rgba(33, 150, 243, 0.1)",
        "rgba(0, 0, 0, 0)",
      ], // 预定义颜色样本
      components: {
        opacity: true, // 是否显示透明度控制
        preview: true, // 是否显示预览框
        hue: true, // 是否显示色相选择
        interaction: {
          input: true, // 是否允许输入颜色值
          clear: true, // 是否显示清除按钮
          save: true, // 是否显示保存按钮
        },
      },
      onInit: (instance) => {
        // 设置初始颜色后的回调函数
        instance.setColor(initialColor); // 设置选择器颜色
      },
    });

    // 颜色选择事件处理
    // pickr.on("save", (color) => {
    //   const rgbaColor = color.toRGBA().toString();
    //   const hexColor = color.toHEXA().toString().slice(0, 7);
    //   //   const opacity =
    //   //     color.toRGBA().toString().split(",")[3].split(")")[0] * 100; // 获取颜色的 RGBA 表示
    //   inputEle.value = hexColor;
    // });

    // 监听输入框值的变化
    inputEle.addEventListener("change", updatePreviewColor);
    opacityInput.addEventListener("change", updatePreviewColor);

    // 颜色选择事件处理
    pickr.on("change", (color) => {
      inputEle.value = color.toHEXA().toString().slice(0, 7); // 更新输入框的值
      opacityInput.value = Math.floor(
        color.toRGBA().toString().split(",")[3].split(")")[0] * 100
      ); // 获取颜色的 RGBA 表示
      // 更新输入框的值

      updatePreviewColor();
    });

    // 更新预览块的颜色
    function updatePreviewColor() {
      const colorPreview = dom.querySelector(".pcr-button");

      const inputValue = inputEle.value.trim();
      // inputEle.value = inputValue;
      // opacityInput.value = opacityInput.value;
      inputEle.setAttribute("value", inputValue);
      opacityInput.setAttribute("value", opacityInput.value);

      // console.log("inputValue", inputEle, inputValue, opacityInput.value);
      const isValidColor =
        /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/i.test(
          inputValue
        );

      function hexToRGBA(hex, opacity) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
      }

      if (isValidColor) {
        const rgbaColor = hexToRGBA(inputValue, opacityInput.value / 100);
        pickr.setColor(rgbaColor);

        colorPreview.style.setProperty("--pcr-color", rgbaColor);
      } else {
        colorPreview.style.setProperty("--pcr-color", "");
      }
    }

    /** */
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
export default ModifyBlock;
