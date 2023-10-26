import BaseView from "./BaseView.js";
class Slider extends BaseView {
  constructor(element, options) {
    super(element, options);
  }

  startDrawing(parent) {
    let min = this.element.attributes.min || 0;
    let max = this.element.attributes.max || 100;
    let step = this.element.attributes.step || 1;
    let value = this.element.attributes.value || 0;
    this.element.innerHTML = `
    <div class="range" style='position: relative;
    flex:3;
    height: 100%;'>
      <input type="range" min="${min}" max="${max}" step="${step}" value="${value}" />
      <div class="rang_width" style=' position: absolute;
      top: 0;
      left: 0;
      border-radius: 60px 0px 0px 60px;
      border: solid 1px rgba(157, 127, 245, 1);
      border-right-width: 0px;
      height: 100%;'></div>
    </div>
    <div class="slider-value" style="color: rgba(157, 127, 245, 1);width:20%;display:flex;margin-left: 10px;
    box-sizing: border-box;">
    <input  style="text-align: center;
    border: 0px;
    width: 100%;
    outline-style: none;
    flex:1;
    font-size: 1em;
    background-color: transparent;color: rgba(157, 127, 245, 1);" type="text" value="0" />
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
    this.element.style.zIndex = this.frame.zIndex;

    // this.element.style.display = "flex";
    // this.element.style.alignItems = "center";

    this.element.classList.add("slider-container");

    if (this.class) {
      this.class.forEach((item) => {
        this.element.classList.add(item);
      });
    }

    let rangeWidth = this.frame.width;
    let rangeHeight = this.frame.height;
    let nodeId = this.name;

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
    } else if (parent === undefined) {
      return domElement;
    } else {
      parentContainer = document.querySelector(`#${parent}`);
    }

    // 创建DOM并添加到父级容器

    parentContainer.appendChild(domElement);
    this.renderingStyle(this.element, this.name);

    // /** */

    // let styleTag = document.createElement("style");

    // var elem = document.querySelector('input[type="range"]');

    // var rangeValue = function () {
    //   var newValue = elem.value;
    //   var target = document.querySelector(".slider-value > input");

    //   target.value = newValue;
    //   var max = elem.getAttribute("max");
    //   //   let rangeWidth = document.querySelector(".range").style.width;

    //   let thumbWidth = Number(rangeHeight.split("px")[0]) + 5; // 滑块的宽度
    //   let borderOffset = thumbWidth * 0.5; // 圆形滑块的边框宽度
    //   let rangeBorderWidth =
    //     (Number(rangeWidth.split("px")[0]) - borderOffset) /
    //     Number(rangeWidth.split("px")[0]);
    //   console.log((rangeBorderWidth * 100).toFixed(0));

    //   var width = ((rangeBorderWidth * 100).toFixed(0) / max) * newValue + "%"; //这里的91.3是用了整个滑块的宽度300减去拖动的那个圆形滑块的宽度30再加上圆形滑块的边框宽度4然后再除以300得来的，因为显示拖动距离的rang_width在绝对定位后在滑动过程中会遮挡住圆形滑块，导致圆形滑块无法被拖动，所以要适当的减少rang_width在滑动时的宽度，当然rang_width的宽度是根据你自己的实际需求来计算出来的，并不是一成不变的91.3%

    //   target.addEventListener("change", () => {
    //     elem.value = target.value;
    //     console.log("change", target.value);
    //     document.querySelector(".rang_width").style.width = target.value + "%";
    //   });

    //   if (width === "0%") {
    //     elem.style.borderLeftWidth = "0px";
    //     document.querySelector(".rang_width").style.display = "none";
    //   } else {
    //     elem.style.borderLeftWidth = "1px";
    //     document.querySelector(".rang_width").style.display = "block";
    //   }
    //   if (width === (rangeBorderWidth * 100).toFixed(0) + "%") {
    //     elem.style.borderRightWidth = "0px";
    //   } else {
    //     elem.style.borderRightWidth = "1px";
    //   }
    //   document.querySelector(".rang_width").style.width = width;
    //   styleTag.textContent = `
    //   #${nodeId} input[type="range"] {
    //     display: block;
    //     -webkit-appearance: none;
    //     border: dashed 1px #c4c6ca;
    //     background-color: rgba(151, 122, 229, 0);
    //     width: 100%;
    //     height: 100%;
    //     border-radius: 60px;
    //     margin: 0 auto;
    //     outline: 0;
    //   }
    //   #${nodeId} input[type="range"]::-webkit-slider-thumb {
    //     -webkit-appearance: none;
    //     background-color: rgba(151, 122, 229, 1);
    //     width: ${thumbWidth}px;
    //     height: ${thumbWidth}px;
    //     border-radius: 50%;
    //     box-shadow: 0px 0px 0px ${thumbWidth / 2}px rgba(250, 124, 112, 0.2);
    //     cursor: pointer;
    //     transition: 0.3s ease-in-out;
    //   }
    //   .slider-value:hover{
    //     border: dashed 1px #c4c6ca;
    //     border-radius: 2px;
    //     background: radial-gradient(
    //         closest-side,
    //         rgba(42, 45, 56, 0.8) 0%,
    //         rgba(18, 18, 18, 0) 100%
    //       );
    //   }
    //   .slider-value::after{
    //     content:'%';
    //     color:rgba(157, 127, 245, 1);
    //     font-size: 1em;
    //   }
    //   .slider-value:focus-within  {
    //     border-radius: 2px;
    //     border: solid 1px rgba(157, 127, 245, 1);
    //   }
    // `;
    // };
    // rangeValue();
    // elem.addEventListener("input", rangeValue);
    // /** */

    // document.head.appendChild(styleTag);
  }
  renderingStyle(dom, id) {
    /** */

    let styleTag = document.createElement("style");

    var elem = dom.querySelector('input[type="range"]');

    var rangeValue = function () {
      var newValue = elem.value;
      var target = dom.querySelector(".slider-value > input");

      target.value = newValue;
      var max = elem.getAttribute("max");
      //   let rangeWidth = dom.querySelector(".range").style.width;

      let thumbWidth = Number(dom.style.height.split("px")[0]) + 5; // 滑块的宽度
      let borderOffset = thumbWidth * 0.5; // 圆形滑块的边框宽度
      let rangeBorderWidth =
        (Number(dom.style.width.split("px")[0]) - borderOffset) /
        Number(dom.style.width.split("px")[0]);

      var width = ((rangeBorderWidth * 100).toFixed(0) / max) * newValue + "%"; //这里的91.3是用了整个滑块的宽度300减去拖动的那个圆形滑块的宽度30再加上圆形滑块的边框宽度4然后再除以300得来的，因为显示拖动距离的rang_width在绝对定位后在滑动过程中会遮挡住圆形滑块，导致圆形滑块无法被拖动，所以要适当的减少rang_width在滑动时的宽度，当然rang_width的宽度是根据你自己的实际需求来计算出来的，并不是一成不变的91.3%

      target.addEventListener("change", () => {
        elem.value = target.value;

        dom.querySelector(".rang_width").style.width = target.value + "%";
      });

      if (width === "0%") {
        elem.style.borderLeftWidth = "0px";
        dom.querySelector(".rang_width").style.display = "none";
      } else {
        elem.style.borderLeftWidth = "1px";
        dom.querySelector(".rang_width").style.display = "block";
      }
      if (width === (rangeBorderWidth * 100).toFixed(0) + "%") {
        elem.style.borderRightWidth = "0px";
      } else {
        elem.style.borderRightWidth = "1px";
      }
      dom.querySelector(".rang_width").style.width = width;
      styleTag.textContent = `
      .slider-container{
      
    position :relative;
    
    display :flex;
    align-items :center;
      }
      #${id} input[type="range"] {
        display: block;
        -webkit-appearance: none;
        border: dashed 1px #c4c6ca;
        background-color: rgba(151, 122, 229, 0);
        width: 100%;
        height: 100%;
        border-radius: 60px;
        margin: 0 auto;
        outline: 0;
      }
      #${id} input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        background-color: rgba(151, 122, 229, 1);
        width: ${thumbWidth}px;
        height: ${thumbWidth}px;
        border-radius: 50%;
        box-shadow: 0px 0px 0px ${thumbWidth / 2}px rgba(250, 124, 112, 0.2);
        cursor: pointer;
        transition: 0.3s ease-in-out;
      }
       #${id} .slider-value:hover{
        border: dashed 1px #c4c6ca;
        border-radius: 2px;
        background: radial-gradient(
            closest-side,
            rgba(42, 45, 56, 0.8) 0%,
            rgba(18, 18, 18, 0) 100%
          );
      }
       #${id} .slider-value::after{
        content:'%';
        color:rgba(157, 127, 245, 1);
        font-size: 1em;
      }
       #${id} .slider-value:focus-within  {
        border-radius: 2px;
        border: solid 1px rgba(157, 127, 245, 1);
      }
    `;
    };
    rangeValue();
    elem.addEventListener("input", rangeValue);
    /** */

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
export default Slider;
